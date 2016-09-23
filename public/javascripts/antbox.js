import React from 'react';
import { Link } from 'react-router';
import { Menu, Breadcrumb, Icon, Row, Col } from 'antd';
import LoginModal from './loginmodal.js';
import navData from './navdata';

const SubMenu = Menu.SubMenu;
const DemoBox = props => <div className={`height-${props.value}`}>{props.children}</div>;

let AntdBox = React.createClass({
  render(){
    var navBar = navData.map(function(item,index){
      return <SubMenu key={item.key} title={item.title} >
              {
                item.data.map(function(val,i){
                  return <Menu.Item key={val.key} ><Link to={val.link}>{val.name}</Link></Menu.Item>
                })
              }
              </SubMenu>
    });

    return (
      <div>
        <div className="ant-layout-aside">
          <aside className="ant-layout-sider">
            <div className="ant-layout-logo"></div>
            <Menu mode="inline" theme="dark"
              defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
              { navBar }
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
