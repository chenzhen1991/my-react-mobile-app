import React, {Component} from 'react';
import {TabBar} from 'antd-mobile'

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

}
export default class BottomNav extends Component<BottomNavProps> {
  render(){
    return <TabBar>
      {menus.map(({icon, title,link}, index) => {
        return (
          <TabBar.Item
              icon={
                <div
                  className={'iconfont icon-'+icon}
                />
              }
              title={title}
              key={icon}
          >
          </TabBar.Item>
        )
      })}
    </TabBar>
  }
}
