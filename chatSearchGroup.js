var searchItem = "";
function search(itemName="Wix Products"){
  searchItem = itemName;
  openSearchBox();
}

function openSearchBox() {
  setTimeout(()=>{
    var eventSearch = new KeyboardEvent('keydown', {
    key: 'k',
    altKey: true
  });


  // Dispatch the event on an element
    document.dispatchEvent(eventSearch);
    clickSearchBox();
  },5000)
}

function clickSearchBox() {
  setTimeout(()=>{
    console.log("Clicking");
    var clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });

    document.getElementsByClassName("to2l77zo gfz4du6o ag5g9lrv bze30y65 kao4egtt qh0vvdkp")[0].dispatchEvent(clickEvent);
    console.log("Clicked");
    inputNameInSearch();
  },3000);
}

function inputNameInSearch() {
  setTimeout(()=>{
    var k = searchItem;
    var eventDown = new KeyboardEvent('keydown', { k, bubbles: true, cancelable: true});
    var eventInput = new InputEvent('input', { data: k, bubbles: true, cancelable: true });
    var eventUp = new KeyboardEvent('keyup', { k, bubbles: true, cancelable: true });

    document.activeElement.focus();
    document.activeElement.dispatchEvent(eventDown);
    document.activeElement.dispatchEvent(eventInput); 
    document.activeElement.dispatchEvent(eventUp);
    console.log(k);
    pressEnter();
  }, 2000);
}

function pressEnter() {
  setTimeout(()=>{
    var pressEnt = new KeyboardEvent('keydown', {
      key: 'Enter',
      code: 'Enter',
      which: 13,
      keyCode: 13,
      charCode: 13
    });

    document.activeElement.dispatchEvent(pressEnt);
  }, 3000);
}

export { search };
