var searchItem = "";
var confirmItem = false;

async function search(itemName = "Wix Products") {
  searchItem = itemName;
  await delay(5000);
  openSearchBox();
  await delay(3000);
  clickSearchBox();
  await delay(1000);
  inputNameInSearch();
  await delay(3000);
  pressEnter();
  await delay(500);
  return confirmSearch();
}

function openSearchBox() {
  var eventSearch = new KeyboardEvent("keydown", {
    key: "k",
    altKey: true,
  });

  // Dispatch the event on an element
  document.dispatchEvent(eventSearch);
}

function clickSearchBox() {
  console.log("Clicking");
  var clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  document
    .getElementsByClassName(
      "to2l77zo gfz4du6o ag5g9lrv bze30y65 kao4egtt qh0vvdkp"
    )[0]
    .dispatchEvent(clickEvent);
  console.log("Clicked");
}

function inputNameInSearch() {
  var k = searchItem;
  var eventDown = new KeyboardEvent("keydown", {
    k,
    bubbles: true,
    cancelable: true,
  });
  var eventInput = new InputEvent("input", {
    data: k,
    bubbles: true,
    cancelable: true,
  });
  var eventUp = new KeyboardEvent("keyup", {
    k,
    bubbles: true,
    cancelable: true,
  });

  document.activeElement.focus();
  document.activeElement.dispatchEvent(eventDown);
  document.activeElement.dispatchEvent(eventInput);
  document.activeElement.dispatchEvent(eventUp);
  console.log(k);
}

function pressEnter() {
  var pressEnt = new KeyboardEvent("keydown", {
    key: "Enter",
    code: "Enter",
    which: 13,
    keyCode: 13,
    charCode: 13,
  });

  document.activeElement.dispatchEvent(pressEnt);
}

function confirmSearch() {
  var currentChatName = document.querySelectorAll(
    '[data-testid="conversation-info-header-chat-title"]'
  )[0].innerText;
  if (searchItem == currentChatName) {
    return true;
  } else {
    return false;
  }
}

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

export { search };
