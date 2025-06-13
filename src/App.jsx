import { Provider } from 'react-redux'
import './App.css'
import ChatList from './containers/ChatList'
import ChatWindow from './containers/ChatWindow'
import store from './redux/store'

function App() {
  return (
      <Provider store={store}>
        <div className='container'>
          <div className='side-panel'>
            <ChatList />
          </div>
          <div className='main-panel'>
            <ChatWindow />
          </div>
        </div>
    </Provider>
  )
}

export default App
