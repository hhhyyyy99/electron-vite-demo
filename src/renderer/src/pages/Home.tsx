import { conversationList, getMessageListByConvId } from "@renderer/utils/list"
import { getMessage, removeMessage, setMessage } from "@renderer/utils/localforage"

const Home = () => {
  const save = async (conv) => {
    console.log(conv);
    const messageList = await getMessageListByConvId(conv.conv_id)
    const keys = [conv.admin,conv.conv_id]
    setMessage(keys, messageList)
  }
  const get = async (conv) => {
    const keys = [conv.admin,conv.conv_id]
    const messageList = await getMessage(keys)
    console.log(messageList);
  }
  const remove = (conv) => {
    const keys = [conv.admin,conv.conv_id]
    removeMessage(keys)
  }
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      {conversationList.map((item) => {
        return (
          <div key={item.conv_id} style={{backgroundColor:"#f0f0f0",color:"#333",padding:"0 10px",cursor:"pointer"}} onClick={()=>save(item)} onContextMenu={()=> get(item)}>
            <p>{item.conv_id}</p>
          </div>
        ) 
      })}
    </div>
  )
}

export default Home
