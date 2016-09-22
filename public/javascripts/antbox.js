import React from 'react';
import { Link } from 'react-router';
import { Menu, Breadcrumb, Icon, Row, Col } from 'antd';
import LoginModal from './loginmodal.js';
//import Tables from './tables.js';
//import RegisterModal from './registermodal.js';
const SubMenu = Menu.SubMenu;
const DemoBox = props => <div className={`height-${props.value}`}>{props.children}</div>;

let AntdBox = React.createClass({
  render(){
    return (
      <div>
        <div className="ant-layout-aside">
          <aside className="ant-layout-sider">
            <div className="ant-layout-logo"></div>
            <Menu mode="inline" theme="dark"
              defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
              <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>} onTitleClick={function(obj){console.log(obj)}}>
                <Menu.Item key="1"><Link to="/abc">选项1</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/aaa">选项2</Link></Menu.Item>
                <Menu.Item key="3">选项3</Menu.Item>
                <Menu.Item key="4">选项4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>} onTitleClick={function(obj){console.log(obj)}}>
                <Menu.Item key="5">选项5</Menu.Item>
                <Menu.Item key="6">选项6</Menu.Item>
                <Menu.Item key="7">选项7</Menu.Item>
                <Menu.Item key="8">选项8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
                <Menu.Item key="9">选项9</Menu.Item>
                <Menu.Item key="10">选项10</Menu.Item>
                <Menu.Item key="11">选项11</Menu.Item>
                <Menu.Item key="12">选项12</Menu.Item>
              </SubMenu>
            </Menu>
          </aside>
          <div className="ant-layout-main">
            <div className="ant-layout-header">
              <Row type="flex" justify="center" align="middle" style={{height:"100%"}}>
                <Col offset={20} span={4}>
                  <LoginModal />
                </Col>
              </Row>
            </div>
            <div className="ant-layout-breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                <Breadcrumb.Item>某应用</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="ant-layout-container">
              <div className="ant-layout-content">
                {this.props.children}
              </div>
            </div>
            <div className="ant-layout-footer">
            Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
            </div>
          </div>
        </div>
      </div>
    )
  }

})


module.exports = AntdBox;
