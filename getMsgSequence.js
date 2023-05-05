export function gsm() {
  var messages = document.getElementsByClassName(
    "n5hs2j7m oq31bsqd gx1rr48f qh5tioqs"
  )[0].children;

  var tagged_msg = [];

  for (message of messages) {
    if (message.querySelector('[data-testid="image-thumb"]')) {
      //console.log("Image");
      tagged_msg.push("Image");
    } else if (message.querySelector('[data-testid="video-content"]')) {
      //console.log("Video");
      tagged_msg.push("Video");
    } else if (message.querySelector('[data-testid="msg-container"]')) {
      //console.log("Message");
      tagged_msg.push("Message");
    }
  }
  return tagged_msg;
}

export function ssm(msg_list) {
  var detSequence = msg_list[0][0] == "Message" ? true : false;
  var tempArray = [];
  var result = {};
  var count = 0;

  if (detSequence) {
    var last_msg = null;
    for (msg of msg_list) {
      //Edge case first messages,  array how to store?
      console.log(msg);
      if (msg[0] == "Message" && count >= 1) {
        //Learnt new thing, the properties that are calculated needs to put up in bracket, otherwise they are not considered as keys
        result[count - 1] = { [last_msg[0]]: [last_msg[1], tempArray] };
        last_msg = msg;
        tempArray = [];
        count++;
      } else if (msg[0] != "Message") {
        tempArray.push(msg);
      } else {
        last_msg = msg;
        count++;
      }
    }

    result[count - 1] = { [last_msg[0]]: [last_msg[1], tempArray] };
  } else {
    for (msg of msg_list) {
      if (msg[0] == "Message") {
        result[count] = { [msg[0]]: [msg[1], tempArray] };
        count++;
        tempArray = [];
      } else {
        tempArray.push(msg);
      }
    }
  }
  return result;
}
