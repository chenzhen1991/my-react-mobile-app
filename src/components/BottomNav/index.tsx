import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';
import { history } from 'umi';

const menus = [
  {
    title: '首页',
    icon: 'shouye',
    link:'/'
  },
  {
    title: '购物车',
    icon: '3',
    link:'/cart'
  },
  {
    title: '订单列表',
    icon: 'icon-',
    link:'/olist'
  },
  {
    title: '我的',
    icon: 'wode',
    link:'/user'
  },
]

interface BottomNavProps {
  pathname:string
}
export default class BottomNav extends Component<BottomNavProps> {
  render(){
    const {pathname} = this.props
    return <TabBar>
      {menus.map(({icon, title,link}, index) => {
        return (
          <TabBar.Item
              icon={
                <div
                  className={'iconfont icon-'+icon}
                />
              }
              selectedIcon={
                <div
                  className={'red iconfont icon-'+icon}
                />
              }
              selected={pathname === link}
              title={title}
              key={icon}
              onPress={()=>{
                console.log(history)
                history.push(link)
              }}
          >
          </TabBar.Item>
        )
      })}
    </TabBar>
  }
}
