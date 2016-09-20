import React from 'react';
import { Table, Button } from 'antd';

const ButtonGroup = Button.Group;
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `李大嘴${i}`,
    age: 32 + i,
    address: `西湖区湖底公园${i}号`,
  });
}

const Tables = React.createClass({
  getInitialState() {
    return {
      selectedRowKeys: [],  // 这里配置默认勾选列
      loading: false,
      filteredInfo : null,
      sortedInfo : null
    };
  },
  start() {
    this.setState({ loading: true });
    // 模拟 ajax 请求，完成后清空
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  },
  handleChange(pagination, filters, sorter){
    console.log('各类参数是', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  },
  onSelectChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  },
  showdata(record){
    console.log(record)
  },
  render() {
    const { loading, selectedRowKeys, } = this.state;
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    const That = this;

    const columns = [{
      title: '姓名',
      dataIndex: 'name'
    }, {
      title: '年龄',
      dataIndex: 'age',
      filters : [
        { text : '30+', value:3 },
        { text : '40+', value:4 }
      ],
      filteredValue : filteredInfo.age,
      onFilter : (value, record) => (record.age + '').indexOf(value) === 0,
      sorter : (a,b) => a.age - b.age,
      sortOrder : sortedInfo.columnKey === 'age' && sortedInfo.order
    }, {
      title: '住址',
      dataIndex: 'address'
    },{
      title: '操作',
      key: 'operation',
      width: 100,
      render : function(text, record, index){
        return <a href="javascript:;" onClick={function(){ console.log(That);That.showdata(record); }}>操作</a>
      }
    }]; 

    const hasSelected = selectedRowKeys.length > 0;
    
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <ButtonGroup>
            <Button type="primary" onClick={this.start} loading={loading}>新增</Button>
            <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>操作</Button>
            <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>删除</Button>
          </ButtonGroup>
          <span style={{ marginLeft: 8 }}>{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}</span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} loading={loading} onChange={this.handleChange} bordered />
      </div>
    );
  },
});

module.exports = Tables;

