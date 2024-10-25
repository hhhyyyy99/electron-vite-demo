import { useSelector } from 'react-redux'
import Home from './pages/Home'

function App(): JSX.Element {
  const state = useSelector((state) => state)

  console.log(state)
  return (
    <>
      <Home />
    </>
  )
}

export default App
