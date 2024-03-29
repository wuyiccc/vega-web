import { IActivityBarItem, ISidebarPane } from '@dtinsight/molecule/esm/model'
import VegaEditorConstants from '@/infrastructure/constants/VegaEditorConstants.ts'
import UserManageActivityBar from '@/extension/UserManage/component/UserManageActivityBar'
import React from 'react'
import UserManageSideBarView from '@/extension/UserManage/component/UserManageSideBar'

export const userManageActivityBar: IActivityBarItem = {
  id: VegaEditorConstants.LEFT_BAR_USER_MANAGE_ID,
  sortIndex: 2,
  name: VegaEditorConstants.LEFT_BAR_USER_MANAGE_ID,
  title: VegaEditorConstants.LEFT_BAR_USER_MANAGE_ID,
  type: 'normal',
  render: () => <UserManageActivityBar />
}

export const userManageSideBar: ISidebarPane = {
  id: VegaEditorConstants.LEFT_BAR_USER_MANAGE_ID,
  title: VegaEditorConstants.LEFT_BAR_USER_MANAGE_ID,
  render: () => {
    return <UserManageSideBarView />
  }
}
