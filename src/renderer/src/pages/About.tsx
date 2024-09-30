import { Button, message } from "tea-component";

const About = () => {
  return (
    <>
    <div>
      <h1>About Page</h1>
      <p>This is the about page of the Electron App.</p>
      <Button
        onClick={() => {
          const text = window.api.sayHello()
          message.success({ content: `About: ${text}` })
        }}
      >
        Api
      </Button>
      <Button onClick={()=>{
        window.aboout("Aboout页发生的about消息")
      }}>about</Button>
    </div>
    </>
  )
};

export default About;