import React, {useEffect} from 'react';
import classnames from 'classnames';
import styles from './index.less';
import { Card, Flex } from 'antd-mobile';

const personal = [
  {
    num: 168,
    title: '商品关注',
    link: '',
  },
  {
    num: 9,
    title: '店铺关注',
    link: '',
  },
  {
    num: 0,
    title: '喜欢的内容',
    link: '',
  },
  {
    num: 100,
    title: '浏览记录',
    link: '',
  },
];

interface HeaderProps{
  name: string;
  icon:string;
}
const Header: React.FC<HeaderProps> = ({name, icon}) => {
  useEffect(()=>{

  },[])

  return <div className={styles.main}>
    <Card full className={styles.header}>
      <Card.Header
        title={<div className={styles.name}>{name}</div>}
        thumb={
          <div className={classnames(styles.userIcon)}><img src={icon} alt="头像"/></div>
        }
      />
      <Card.Body>
        <Flex>
          {
            personal.map((item, index) => (
              <Flex.Item
                key={index}
                className={classnames('flexNone', 'txtCenter')}
              >
                <div>{item.num}</div>
                <div>{item.title}</div>
              </Flex.Item>
            ))
          }
        </Flex>
      </Card.Body>
      <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
    </Card>
  </div>
}
export default Header;
