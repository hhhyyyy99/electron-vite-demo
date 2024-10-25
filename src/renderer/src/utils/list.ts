import { uid } from 'radash'
import { sleep } from './tools'

// const baseMessage =  {
//   "message_client_time": 1729158803,
//   "message_cloud_custom_str": "{\"messageFeature\":{\"version\":1,\"needTyping\":1}}",
//   "message_conv_id": "17485093",
//   "message_conv_type": 1,
//   "message_custom_int": 0,
//   "message_custom_moderation_configuration_id": "",
//   "message_custom_str": "",
//   "message_elem_array": [
//     {
//       "elem_type": 0,
//       "text_elem_content": "QGd6+SfqzGPVuGa/NDdNlywTSeT78Ueo/xULNc0up1F28Gw0RBo+j0EnevhNFfWgmEYt8NC6CIUGx1R4BAjYyHW3+X8SamqcBWI2ohyPyg0GHezyspShpe4EdkDPeGblZrM0BnzLZ8/3StzdPlWPnSn13kUWx7YxtOo96e5C5gawmy9Nw5RDq7nVE134ZK7JPlX1zxl93G1bPl5e/9EFSR1QWuvqnxWiHc87Vgs5yjIrPFuLkgNOBGMI53x/C8DLGqLDed8ENTvVCbE1i/mYudljm5HhHyUpxKJacUNQDs3fQoNwEu/pPp9O4/UGlCN5XvR767ADu8OF63Cd+7V/xw=="
//     }
//   ],
//   "message_excluded_from_content_moderation": false,
//   "message_excluded_from_last_message": false,
//   "message_group_receipt_read_count": 0,
//   "message_group_receipt_unread_count": -1,
//   "message_has_risk_content": false,
//   "message_has_sent_receipt": false,
//   "message_is_broadcast_message": false,
//   "message_is_excluded_from_unread_count": false,
//   "message_is_from_self": true,
//   "message_is_online_msg": false,
//   "message_is_peer_read": true,
//   "message_is_read": true,
//   "message_msg_id": "144115265580856274-1729158803-632476325",
//   "message_need_read_receipt": true,
//   "message_offline_push_config": {
//     "offline_push_config_android_config": {
//       "android_offline_push_config_fcm_channel_id": "",
//       "android_offline_push_config_huawei_category": "",
//       "android_offline_push_config_notify_mode": 0,
//       "android_offline_push_config_oppo_channel_id": "",
//       "android_offline_push_config_sound": "",
//       "android_offline_push_config_title": "",
//       "android_offline_push_config_vivo_category": "",
//       "android_offline_push_config_vivo_classification": 1,
//       "android_offline_push_config_xiaomi_channel_id": ""
//     },
//     "offline_push_config_desc": "您有一条新的消息",
//     "offline_push_config_ext": "{\n  \"entity\" : {\n    \"chatType\" : 1,\n    \"content\" : \"您有一条新的消息\",\n    \"sender\" : \"35186423\",\n    \"nickname\" : \"Eamon\",\n    \"faceUrl\" : \"\",\n    \"action\" : 1\n  }\n}",
//     "offline_push_config_flag": 0,
//     "offline_push_config_ios_config": {
//       "ios_offline_push_config_ignore_badge": false,
//       "ios_offline_push_config_push_type": 0,
//       "ios_offline_push_config_sound": "",
//       "ios_offline_push_config_title": ""
//     }
//   },
//   "message_platform": 0,
//   "message_priority": 1,
//   "message_rand": 632476325,
//   "message_receipt_peer_read": true,
//   "message_revoke_reason": "",
//   "message_revoker_face_url": "",
//   "message_revoker_nick_name": "",
//   "message_revoker_user_id": "",
//   "message_risk_type_identified": 0,
//   "message_sender": "35186423",
//   "message_sender_profile": {
//     "user_profile_face_url": "",
//     "user_profile_friend_remark": "",
//     "user_profile_identifier": "35186423",
//     "user_profile_nick_name": "Eamon"
//   },
//   "message_seq": 29417088,
//   "message_server_time": 1729158803,
//   "message_status": 2,
//   "message_support_message_extension": false,
//   "message_unique_id": 7426680509107983000,
//   "message_version": 0
// }
export const user = [uid(10), uid(10), uid(10)]
export const conversationList: Array<{ conv_id: string, admin: string }> = Array.from({ length: 50 }, () => ({ conv_id: uid(10), admin: getRandomArrayItem(user)}))
export const messageList = generateMessageData(1000)
export function getRandomArrayItem(arr: Array<any>) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// 根据baseMessage生成1w条数据
export function generateMessageData(count: number) {
  return Array.from({ length: count }, () => {
    return {
      message_msg_id: uid(14),
      message_sender: uid(10),
      message_conv_id: getRandomArrayItem(conversationList).conv_id,
      message_sender_profile: { user_profile_identifier: uid(10), user_profile_nick_name: uid(4) }
    }
  })
}

// 根据conversation的conv_id获取messageList
export async function getMessageListByConvId(conv_id: string) {
  await sleep(2000) // 模拟网络请求延迟
  return messageList.filter(message => message.message_conv_id === conv_id)
}