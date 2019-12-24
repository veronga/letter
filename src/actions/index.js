export function sendMessage(payload) {
  return {
    type: "ADD_MESSAGE",
    payload
  };
}

export function delMessage(payload) {
  return {
    type: "DELETE_MESSAGE",
    payload
  };
}
