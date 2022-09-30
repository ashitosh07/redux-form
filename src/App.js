import { useSelector } from 'react-redux'
import './App.css'
import Login from './Components/Login'
import { selectUser } from './features/userSlice'
import Profile from './Components/Profile'

function App() {
  const user = useSelector(selectUser)

  return <div className='App'>{user ? <Profile /> : <Login />}</div>
}

export default App
