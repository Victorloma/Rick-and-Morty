import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import Link from 'next/link'

const items: MenuProps['items'] = [
  {
    label: (
        <Link href="/">
            Home
        </Link>
    ),
    key: 'home',
    icon: <MailOutlined />,
  },
  {
    label: (
        <Link href="/statistics/">
            Statistics
        </Link>
    ),
    key: 'statistics',
    icon: <AppstoreOutlined />,
  },
]

const Header: React.FC = () => {
  const [current, setCurrent] = useState('Home')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Header