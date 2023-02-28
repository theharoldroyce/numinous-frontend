import React from 'react'
import { Route } from 'react-router-dom'
import FronendLayout from '../src/PublicRoute'
function PublicRoute({...rest}) {
  return (
    <Route {...rest} render={ (props) => <FronendLayout {...props} /> }/>
  )
}

export default PublicRoute