import { createTransform } from 'redux-persist';

// 假设 state.historyMessage.list 是我们需要持久化的 Map 类型数据
const historyMessageTransform = createTransform(
  // 序列化函数，在数据存储前调用
  (inboundState:any, key) => {
    if (key === 'historyMessageList' || key === 'uploadProgressList') {
      // 将 Map 转换为数组，以便于存储
      return {
        ...Array.from(inboundState).entries(),
      };
    }
    return inboundState;
  },
  // 反序列化函数，在数据读取后调用
  (outboundState:any, key) => {
    if (key === 'historyMessageList' || key === 'uploadProgressList') {
      // 将数组转换回 Map
      return {
        a: new Map(outboundState),
      };
    }
    return outboundState;
  },
  // 指定这个 transform 只作用于 'historyMessage' 这部分的 state
  { whitelist: ['historyMessageList','uploadProgressList'] }
);

export default historyMessageTransform;