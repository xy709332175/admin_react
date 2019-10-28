import React, { Component } from 'react'
import {
  Card,
  Button,
  Icon,
  Table,
  Modal,
  message
} from 'antd'
import {connect} from 'react-redux'
import {reqAddCategory, reqUpdateCategory} from '../../api'
import {
  getCategorysAsync,
  addCategoryAsync,
  updateCategoryAsync
} from '../../redux/action-creators/categorys'

import LinkButton from '../../components/link-button'
import AddUpdateForm from './add-unpate-form'
import { __values } from 'tslib'
import categorys from '../../redux/reducers/categorys'

/* 
Admin的分类管理子路由组件
*/

@connect(
  state => ({categorys:  state.categorys}),
  {getCategorysAsync,addCategoryAsync,updateCategoryAsync}
)
class Category extends Component {

  state = {
    loading: false,
    isShowAdd: false, // 是否显示loading
    isShowUpdate: false,
  }

  columns = [
    {
      title: '分类名称',
      dataIndex: 'name',
    },
    {
      width: 300,
      title: '操作',
      render: (category) => <LinkButton onClick = {() => this.isShowUpdate(category)}>修改分类</LinkButton>,
    }
  ]

  /* 
  异步获取分类列表显示
  */
  getCategorys = async () => {
    // 显示loading
    this.setState({
      loading: true
    })
    const msg = await this.props.getCategorysAsync()
    // 隐藏loading
    this.setState({
      loading: false
    })
    if (msg) {
      message.error(msg)
    }
  }

  addCategory = () => {
    this.form.validateFields(async (error, values) => {
      if(!error) {
        const {categoryName} = values
        const msg = await this.props.addCategoryAsync(categoryName)
        if(msg) {
          message.error(msg)
        } esle {
          this.setState({
            isShowAdd: false
          })
          message.success('添加分类成功')
        }
      }
    }) 
  }

  updateCategory = () => {
    this.form.validateFields(async (error, values) => {
      if(!error) {
        const {categoryName} = values
        const categoryId = this.category._id

        const meg = await this.props.updateCategoryAsync({categoryId, categoryName})
        if(msg) {
          message.error(msg)
        } else {
          this.setState({
            isShowUpdate: false
          })
          message.success('更新分类成功')
        }
      }
    })
  }

  hideAdd = () => {
    this.form.resetFields()
    this.setState({
      isShowAdd: false
    })
  }

  showUpdate = (category) => {
    this.category = category
    this.setState({
      isShowUpdate: true
    })
  }

  hideUpdate = () => {
    delete this.category
    this.form.resetFields()
    this.setState({
      isShowUpdate: false
    })
  }

  componentDidMount () {
    this.getCategorys()
  }

  render() {

    const {loading, isShowAdd, isShowUpdate} = this.state
    const {categorys} = this.props
    const category = this.category || {}

    // 右上角界面
    const extra = (
      <Button type="primary" onClick = {() => this.setState({isShowAdd:true})}>
        <Icon type="plus"></Icon>
        添加
      </Button>
    )

    return (
      <Card extra={extra}>
        <Table 
          bordered
          loading={loading}
          dataSource={categorys} 
          columns={columns} 
          rowKey="_id"
          pagination={{pageSize: 5, showQuickJumper: true}}
        />
        <Modal
          title="添加分类"
          visible={isShowAdd}
          onOk={this.addCategory}
          onCancel={this.hideAdd}
        >
          <AddUpdateForm setForm={(form) => this.form = form}/>
        </Modal>
        <Modal
          title="修改分类"
          visible={isShowUpdate}
          onOk={this.updateCategory}
          onCancel={this.hideUpdate}
        >
          <AddUpdateForm setForm={(form) => this.form = form} categoryName={category.name}/>
        </Modal>
      </Card>
    )
  }
}
export default Category