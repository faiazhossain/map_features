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
    <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{height:"98vh"}}
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
              label: <Link href="/layer_visibility">Layer Visibility</Link>,
            },
          ]}
        />
      </Sider>
  )
}

export default SidePanel