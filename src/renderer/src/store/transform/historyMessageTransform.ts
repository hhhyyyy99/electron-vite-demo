import { createTransform } from 'redux-persist';

// 假设 state.historyMessage.list 是我们需要持久化的 Map 类型数据
const historyMessageTransform = createTransform(
  // 序列化函数，在数据存储前调用
  (inboundState:{historyMessageList: Map<string, any>, uploadProgressList: Map<string, any>,[key: string]:any}, key) => {
    if (key === 'historyMessage') {
      // 将 Map 转换为数组，以便于存储
      return {
        ...inboundState,
        historyMessageList: Array.from(inboundState.historyMessageList.entries()),
        uploadProgressList: Array.from(inboundState.historyMessageList.entries())
      };
    }
    return inboundState;
  },
  // 反序列化函数，在数据读取后调用
  (outboundState:any, key) => {
    if (key === 'historyMessage') {
      // 将数组转换回 Map
      return {
        ...outboundState,
        historyMessageList: new Map(outboundState.historyMessageList),
        uploadProgressList: new Map(outboundState.uploadProgressList)
      };
    }
    return outboundState;
  },
  // 指定这个 transform 只作用于 'historyMessage' 这部分的 state
  { whitelist: ['historyMessage'] }
);

export default historyMessageTransform;