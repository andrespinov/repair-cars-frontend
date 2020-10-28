import React from 'react'
import Grid from '@material-ui/core/Grid'
import LoginForm from './components/LoginForm'
import { LoginContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/login/actions'

const Login = () => {
  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.loginReducer)
  const handleLogin = (payload) => {
    dispatch(login(payload))
  }

  return (
    <LoginContainer>
      <Grid container spacing={3} justify='center' className='content'>
        <Grid item xs={12} md={5} align='center'>
          <LoginForm onSubmit={handleLogin} loading={loading} />
        </Grid>
        <Grid item xs={12} md={7} className='panel'></Grid>
      </Grid>
    </LoginContainer>
  )
}

export default Login
