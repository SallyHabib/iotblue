import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { hello } from './routes/routes'
import store, { history } from './store'
import { ConnectedRouter } from 'connected-react-router'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div style={{padding: 40}}>
        <ConnectedRouter history={history}>{hello}</ConnectedRouter>
      </div>
    </Provider>
  )
}

// const AppStart = () => {
//   const appStart = useSelector((state: RootState) => state.common.appStart)

//   return appStart ? (
//     <Container>
//       <ConnectedRouter history={history}>{routes}</ConnectedRouter>
//     </Container>
//   ) : (
//     <Container>Loading...</Container>
//   )
// }

export default App
