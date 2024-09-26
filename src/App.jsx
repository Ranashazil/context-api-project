import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/provider'

function App() {


  return (
    <UserContextProvider>
<h1>this is a react</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App