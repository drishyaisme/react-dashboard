import Cards from './Cards'
import './MainDash.css'
import Table from './Table'

const MainDash = () => {
  return (
    <div>
        <div className="MainDash">
            <h1>Dashboard</h1>
            <Cards />
            <Table />
        </div>
    </div>
  )
}

export default MainDash