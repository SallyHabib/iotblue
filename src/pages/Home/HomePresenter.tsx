import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  dispatchRefreshTokenRequest,
  dispatchSignInRequest,
  dispatchSignOutRequest
} from '../../store/users/actions'

export default () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    <div>
      Hello world
    </div>
  )
}
