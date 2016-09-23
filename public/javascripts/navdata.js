import React from 'react';
import Tables from './tables';
import { Icon } from 'antd';
 
var About = React.createClass({
  render : function(){
    return (
      <div>
        <p>about page</p>
      </div>
    )
  }
});

var navData = [
  {
    key : "sub1",
    title : <span><Icon type="user" />导航一</span>,
    data : [
      {
        key : "1",
        link : "/abc",
        name : "选项一",
        component : Tables
      },
      {
        key : "2",
        link : "/aaa",
        name : "选项二",
        component : About
      }
    ]
  },
  {
    key : "sub2",
    title : <span><Icon type="laptop" />导航二</span>,
    data : [
      {
        key : "3",
        link : "/bbb",
        name : "选项三",
        component : Tables
      },
      {
        key : "4",
        link : "/ccc",
        name : "选项四",
        component : About
      }
    ]
  }
]

module.exports = navData;