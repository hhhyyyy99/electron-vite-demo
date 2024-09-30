import { Button, message } from 'tea-component'

const Home = () => {
  return (
    <>
      <Button
        onClick={() => {
          const text = window.api.sayHello()
          message.success({ content: `Home: ${text}` })
        }}
      >
        Api
      </Button>
      <Button
        onClick={() => {
          window.aboout('Home页发生的about消息')
        }}
      >
        about
      </Button>
      <Button
        onClick={() => {
          window.electron.ipcRenderer.send('create-window')
        }}
      >
        创建窗口
      </Button>
      <Button
        onClick={() => {
          window.electron.ipcRenderer.send('destroy-window')
        }}
      >
        销毁窗口
      </Button>
    </>
  )
}

export default Home
