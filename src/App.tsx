import './App.css'
// import Navigator from './components/Navigator/Index'
// import Market from './components/Market/Index'
import Inventory from './components/Inventory/Index'
import Styling from './Styling'

function App() {

  return (
    <div className={Styling.wrapper}>
        {/* <Navigator className={Styling.column} />
        <Market index={1} className={Styling.column} /> */}
        <Inventory className={Styling.column} />
    </div>
  )
}

export default App
