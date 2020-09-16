import React, { useEffect } from 'react';
import {connect} from 'umi';
import '@/static/iconfont/iconfont.css';
import BottomNav from '@/components/BottomNav';
import './basicLayout.less'

interface BasicLayoutProps {
  location: string,
  pathname: string,
  dispatch: Dispatch,
  user: any
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { children, location, dispatch, user } = props
  useEffect(() => {
    // 获取用户信息
    if(dispatch) {
      dispatch({
        type: 'user/fetchCurrent'
      })
    }
  }, []);
  const {pathname} = location;
  return <div>
    <article>{children}</article>
    <footer>
      <BottomNav pathname={pathname}/>
    </footer>
  </div>
};

export default connect(({user}) => ({user}))(BasicLayout);
