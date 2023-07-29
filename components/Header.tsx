import React, { useState } from 'react'
import { BarChartOutlined, HomeOutlined } from '@ant-design/icons'
import { MenuProps } from 'antd'
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
    icon: <HomeOutlined />,
  },
  {
    label: (
        <Link href="/statistics/">
            Statistics
        </Link>
    ),
    key: 'statistics',
    icon: <BarChartOutlined />,
  },
]

const Header: React.FC = () => {
  const [current, setCurrent] = useState('Home')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  };

  return <Menu className='menu' style={{ background: 'inherit', color: 'white'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
}

export default Header