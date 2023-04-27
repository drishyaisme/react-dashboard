import './App.css'
import MainDash from './components/MainDash'
import RightSide from './components/RightSide'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <MainDash />
          <RightSide />
        </div>
      </div>
    </div>
  )
}

export default App