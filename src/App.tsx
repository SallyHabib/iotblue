import React from 'react'
import { Provider } from 'react-redux'
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

export default App
