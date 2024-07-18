import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
// import Login from './Components/Login/Login'
// import Registration from './Components/Registration/Registration'
import Homepage from './Components/Homepage/Homepage';
import Usercomision from './Components/Usercomision/Usercomision';
import Partners from './Components/Partners/Partners';
import NavigationBar from './Components/NavigationBar/NavigationBar';

function App() {
 

  return (
    <div>
      <Homepage/>
      <Usercomision/>
      <Partners/>
      <NavigationBar/>
    </div>
  )
}

export default App
