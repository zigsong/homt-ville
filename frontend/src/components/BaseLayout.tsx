import React, { useState } from 'react';
import { Route, RouteProps, useHistory } from 'react-router';
import { Link } from "react-router-dom";
// import history from '../history';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import './stylesheets/BaseLayout.css';
import logo from '../assets/homt1.png';
import yoga from '../assets/yoga_white.png';
import pilates from '../assets/pilates_white.png';
import weight from '../assets/weight_white.png';
import styled from 'styled-components';
import YogaList from './YogaList';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Logo = styled.img`
  width: 30px;
  height: auto;
  margin-right: 20px;
`

interface LayoutProps {
  contentComponent?: React.ReactNode;
}

export default function BaseLayout({ contentComponent }: LayoutProps) {
  const history = useHistory()
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    // console.log(collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" defaultOpenKeys={['sub1']} >
          <img src={logo} width="30px" height="auto" style={{ display: "block", margin: "auto", marginTop: "15px", marginBottom: "15px"  }}/>
          <SubMenu key="sub1" icon={<Logo src={yoga} />} title="Yoga" >
            <Menu.Item key="1" onClick={() => history.push('/yoga/videos')}>Videos</Menu.Item>
            <Menu.Item key="2" onClick={() => history.push('/yoga/community')}>Community</Menu.Item>
            <Menu.Item key="3">Market</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<Logo src={pilates} />} title="Pilates">
            <Menu.Item key="4">Videos</Menu.Item>
            <Menu.Item key="5">Community</Menu.Item>
            <Menu.Item key="6">Market</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<Logo src={weight} />} title="Weight">
            <Menu.Item key="7">Videos</Menu.Item>
            <Menu.Item key="8">Community</Menu.Item>
            <Menu.Item key="9">Market</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="title">HOMT VILLE</div>
        </Header>

        <Content className="site-content" style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Zig</Breadcrumb.Item> 
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            { contentComponent }
          </div>
        </Content>
      </Layout>
    </Layout>
  );

}