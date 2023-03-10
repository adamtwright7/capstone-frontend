// web socket actions?? I really don't know what this file is doing. I think it's for an Axios REST API instead of the backend we're using.

export const SEND_MESSAGE_REQUEST = "SEND_MESSAGE_REQUEST";
export const UPDATE_CHAT_LOG = "UPDATE_CHAT_LOG";

export function updateChatLog(update) {
  return {
    type: UPDATE_CHAT_LOG,
    update,
  };
}
