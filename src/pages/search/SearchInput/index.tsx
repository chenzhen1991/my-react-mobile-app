import React, { useCallback, useEffect, useRef, useState } from 'react';
import { InputItem, Button } from 'antd-mobile';
import { history } from 'umi';
import styles from './index.less'

interface SearchInputProps {

}
const SearchInput:React.FC<SearchInputProps> = props => {
  const inputRef = useRef<any>(null)
  useEffect(()=>{
    inputRef.current.focus()
  }, [])

  const [input, setInput] = useState<string>('')

  /*useCallback主要是做缓存*/
  const inputChange = useCallback((val: string) => {
    setInput(val)
  }, [])

  const [searchMode, setSearchMode] = useState<boolean>(false)
  const handle = useCallback(() => {
    if(searchMode){
      const val = input.trim();
      console.log(val)
      props.queryList({ searchKey: val, pageNo: 0 });
    }else{
      history.push('/')
    }
  }, [input, searchMode])

  useEffect(()=> {
    const val = input.trim();
    setSearchMode(val === "" ? false : true)
  }, [input])
  return (
    <div className={styles.main}>
      <InputItem ref={inputRef} value={input} onChange={inputChange} clear className={styles.searchBar}/>
      <Button type="primary" onClick={handle} className={styles.btn}>{searchMode ? '搜索' : '取消'}</Button>
    </div>
  )
}
export default SearchInput;

