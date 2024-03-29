import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Dropdown, MenuProps, Switch } from 'antd'
import styles from './index.module.less'
import LocalDB from '@/infrastructure/db/LocalDB.ts'
import RedirectUtils from '@/infrastructure/util/common/RedirectUtils.ts'
import StatusDB from '@/infrastructure/db/StatusDB.ts'
import StringUtils from '@/infrastructure/util/common/StringUtils.ts'
import LocalDBConstants from '@/infrastructure/constants/LocalDBConstants.ts'

function NavHeader() {
  const state = StatusDB.db()

  const userEntity = StatusDB.db(state => state.userEntity)

  const breadList = [
    {
      title: '首页'
    },
    {
      title: '工作台'
    }
  ]

  const items: MenuProps['items'] = [
    {
      key: 'username',
      label: StringUtils.isNotEmpty(state.userEntity.username) ? state.userEntity.username : StringUtils.EMPTY
    },
    {
      key: 'logout',
      label: '退出'
    }
  ]

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'logout') {
      LocalDB.remove(LocalDBConstants.TOKEN)
      RedirectUtils.toLoginPage()
    }
  }

  const reverseCollapsed = () => {
    state.reversedCollapsed()
  }

  return (
    <div className={styles.naviHeader}>
      <div className={styles.left}>
        <div onClick={reverseCollapsed}>{state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</div>
        <Breadcrumb items={state.breadList} style={{ marginLeft: 10 }} />
      </div>
      <div className='right'>
        <Dropdown menu={{ items, onClick }} trigger={['click']}>
          <span className={styles.nickName}>{state.userEntity.nickname}</span>
        </Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
