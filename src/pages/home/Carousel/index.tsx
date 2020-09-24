import React from 'react';
import { Carousel } from 'antd-mobile'
import styles from './index.less';

const carouselImgs = [
  {
    src:
      'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
    alt: '女装',
  },
  {
    src:
      'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg',
    alt: '男装',
  },

  {
    src:
      '//gw.alicdn.com/imgextra/i2/193/O1CN011QYq3d1DIR21KZdje_!!193-0-lubanu.jpg',
    alt: '鞋',
  },
  {
    src:
      '//img.alicdn.com/imgextra/i1/158/O1CN012x8yNc1D2PAaNb7lG_!!158-0-luban.jpg',
    alt: '包',
  },
];

export default () => {
  return (
    <Carousel
      autoplay={true}
      infinite
      className={styles.main}
    >
      {carouselImgs.map(val => (
        <a
          className={styles.carouselItem}
          key={val.alt}
          href="http://www.baidu.com"
        >
          <img
            src={val.src}
            alt={val.alt}
          />
        </a>
      ))}
    </Carousel>
  );
}
