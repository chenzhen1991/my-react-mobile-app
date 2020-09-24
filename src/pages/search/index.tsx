import React, { Component } from 'react';
import List from './List';
import SearchInput from './SearchInput'
import { ProductType } from '@/@types/product';
import { PaginationType } from '@/@types/list';
import { query } from '@/services/search';

interface ListState {

}

export default class Search extends Component<{}, ListState> {
  state: ListState = {
    data: [],
    pagination: {
      totalPage: 0,
      pageNo: 0,
      pageSize: 10,
      searchKey: '',
    }
  }

  queryList = (pagination?: PaginationType) => {
    const pageNo = this.state.pagination.pageNo;
    const pageSize = this.state.pagination.pageSize;
    const searchKey = this.state.pagination.searchKey;

    if(pagination){
      if(pagination.pageNo !== undefined) {
        pageNo = pagination.pageNo
      }
      pageSize = pagination.pageSize || pageSize
      searchKey = pagination.searchKey || searchKey
    }

    query({
      pageNo,
      pageSize,
      searchKey,
    }).then(res => {
      const {list} = res
      console.log(list)
      this.saveState(list);
    })
  }

  saveState = (partialState: {
    data?: ProductType[],
    pagination: PaginationType
  }) => {
    let data = [...this.state.data, ...(partialState.data || [])]
    let pagination = {
      ...this.state.pagination,
      ...partialState.pagination
    }

    if(pagination.pageNo === 0){
      data = partialState.data || [];
    }
    this.setState({ data, pagination });
  }

  render (){
    const {data, pagination} = this.state;
    return(
      <div>
        <SearchInput />
        <List data={data} pagination={pagination} queryList={this.queryList}/>
      </div>
    )
  }
}
