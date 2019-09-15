import React, {Component} from 'react'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes/Routes'
import store from './redux/store'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Provider store={store}>
          <Routes />
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App