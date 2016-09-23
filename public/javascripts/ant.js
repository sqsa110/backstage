import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import '../bin/encode.js';
import AntdBox from './antbox';
import Tables from './tables';
import navData from './navdata';
import 'antd/dist/antd.css';
import './antbox.css';
console.log(navData);

var routersArr = [];
for(var i=0,maxi=navData.length;i<maxi;i++){
  for(var j=0,maxj=navData[i].data.length;i<maxj;j++){
    console.log(navData[i].data[j]);
    console.log(i,j)
    routersArr.push(<Route path={navData[i].data[j].link} component={navData[i].data[j].component} />)
  }
}

let routes = <Route path="/" component={AntdBox}>
              <IndexRoute component={Tables}/>
              {
                routersArr
              }
            </Route>;

ReactDOM.render(<Router routes={routes} history={hashHistory} />, document.getElementById('login'));

