import Title from './components/Title'
import Result from './components/Result'
import NumberInput from "./components/NumberInput"

function App() {

  return (
    <div className="converter-container">
        <Title title={"Arabic number conversion tool"} />
        <Result />
        <NumberInput />
    </div>
  )
}

export default App;
