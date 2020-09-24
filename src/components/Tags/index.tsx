import React, {Component} from 'react';
import classnames from 'classnames';
import { Tag } from 'antd-mobile';
import styles from './index.less';

interface Props {
  tags:string[];
}
const Tags: React.FC<Props> = ({tags = []}) => {
  return (
    <div className={classnames(styles.main)}>
      {tags.map((tag, index) => (
        <Tag key={index} className={classnames(styles.tag, 'font12')}>
          {tag}
        </Tag>
      ))}
    </div>
  )
}
export default Tags;
