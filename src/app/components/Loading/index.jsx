import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { LoadingContainer } from './styles'

const Loading = (props) => {
  return (
    <LoadingContainer>
      <CircularProgress {...props} />
    </LoadingContainer>
  )
}

export default Loading
