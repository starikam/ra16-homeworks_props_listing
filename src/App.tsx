import Listing from './components/Listing';
import data from './data/etsy.json'
import './App.css'

function App() {
  const items = JSON.parse(JSON.stringify(data))
  return (
    <div className="App">
      <Listing items={items}/>
    </div>
  )
}

export default App
