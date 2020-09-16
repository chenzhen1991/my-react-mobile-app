import React, {useEffect} from 'react';
import { InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

interface LoginFormProps {
  form: {
    getFieldProps: Function,
    getFieldsValue: Function,
  },
  handleSubmit: Function,
}
const LoginForm:React.FC<LoginFormProps> = ({ form,handleSubmit }) => {
  const {getFieldProps, getFieldsValue} = form;
  const submit = () => {
    // 登录收集信息
    let value = getFieldsValue()
    handleSubmit(value)
  }
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <InputItem
        clear
        placeholder="请输入账号"
        type="text"
        {...getFieldProps('name')}
      >账号</InputItem>
      <WhiteSpace size="lg" />
      <InputItem
        clear
        placeholder="请输入密码"
        type="password"
        autoComplete="new-password"
        {...getFieldProps('password')}
      >密码</InputItem>
      <WhiteSpace size="lg" />
      <Button type="primary" onClick={submit}>登 录</Button>
    </WingBlank>
  )
}

export default createForm()(LoginForm);
