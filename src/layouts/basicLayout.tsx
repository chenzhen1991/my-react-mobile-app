import React, { useEffect } from 'react';
import '@/static/iconfont/iconfont.css';
import BottomNav from '@/components/BottomNav';

interface BasicLayoutProps {

}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  useEffect(() => {}, [])
  return <div>
    <footer>
      <BottomNav />
    </footer>
  </div>
};

export default BasicLayout;
