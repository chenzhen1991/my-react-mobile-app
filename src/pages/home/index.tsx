import React from 'react';
import styles from './index.less';
import Carousel from './Carousel';
import NavTable from './NavTable';
import Recommend from './Recommend';
import SearchInput from './SearchInput';

export default () => {
  return (
    <div className={styles.main}>
      <SearchInput />
      <Carousel />
      <NavTable />
      <Recommend />
    </div>
  );
}
