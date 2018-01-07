const InitialState = {
  isLogin: false,
  userType: 0,
  token: '123456',
}

export default function (state = InitialState, action) {
  console.log('state:',state,'InitialState:',InitialState)
  if (action.type === 'OPEN_DRAWER') {
    return {
      ...state,
      drawerState: 'opened',
    }
  }

  if (action.type === 'CLOSE_DRAWER') {
    return {
      ...state,
      drawerState: 'closed',
    }
  }

  return state
}
