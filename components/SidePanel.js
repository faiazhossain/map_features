"use client"
import { Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
const { Header, Sider, Content } = Layout;
import React, { useState } from 'react'

const SidePanel = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{height:"90vh"}}
          items={[
            {
              key: '1',
              label: <Link href="/">Home</Link>,
            },
            {
              key: '2',
              label: <Link href="/default_map">Default Map</Link>,
            },
            {
              key: '3',
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
  )
}

export default SidePanel