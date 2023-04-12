export function getMessageSequence() {
  var messages = document.getElementsByClassName("n5hs2j7m oq31bsqd gx1rr48f qh5tioqs")[0].children;

  var tagged_msg = [];

  for (message of messages) {
    if (message.querySelector('[data-testid="image-thumb"]')){
      //console.log("Image");
      tagged_msg.push("Image");
    }
    else if (message.querySelector('[data-testid="video-content"]')) {
      //console.log("Video");
      tagged_msg.push("Video");
    }
    else if (message.querySelector('[data-testid="msg-container"]')) {
      //console.log("Message");
      tagged_msg.push("Message");
    }
  }
  return tagged_msg;
}
