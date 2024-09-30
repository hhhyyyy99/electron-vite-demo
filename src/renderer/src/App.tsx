import { Button } from "tea-component"

function App(): JSX.Element {
  return (
    <>
      <Button onClick={()=>{window.logger.info("测试")}}>测试</Button>
    </>
  )
}

export default App
