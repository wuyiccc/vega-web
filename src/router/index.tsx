import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/view/Login/Login.tsx'
import Error404 from '@/view/404.tsx'
import Error403 from '@/view/403.tsx'
import React from 'react'
import molecule, { create, Workbench } from '@dtinsight/molecule'
import extensions from '@/extension'
import AuthLoader from '@/router/AuthLoader.ts'

const moInstance = create({
  extensions
})
const { ACTIVITY_BAR_GLOBAL_SETTINGS } = molecule.builtin.getConstants()
// 禁用扩展
moInstance.onBeforeInit(() => {
  // 移除内置activityBar的搜索模块
  molecule.builtin.inactiveModule('builtInSearchActivityItem')
  // 移除内置activityBar的文件浏览模块
  molecule.builtin.inactiveModule('builtInExplorerActivityItem')
  molecule.builtin.inactiveModule('activityBarData')
})

const DefaultWorkbench = () => moInstance.render(<Workbench />)

const router = [
  {
    id: 'workbench',
    path: '/',
    element: <DefaultWorkbench />,
    loader: AuthLoader
  },
  {
    id: 'login',
    path: '/login',
    element: <Login />
  },
  {
    id: 'others',
    path: '*',
    element: <Navigate to='/404'></Navigate>
  },
  {
    id: '404',
    path: '/404',
    element: <Error404 />
  },
  {
    id: '403',
    path: '/403',
    element: <Error403 />
  }
]

export default createBrowserRouter(router)
