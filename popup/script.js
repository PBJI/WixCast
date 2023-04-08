//Given the current active page, check if the page is web.whatsapp.com and return TRUE
function isWhatsapp() {
    return (location.href.indexOf("web.whatsapp.com") !== -1);
} //Tested and Working


//Given the page is web.whatsapp.com, check if the page is logged in or not
function isLogggedIn() {
    return (document.getElementsByClassName("two _1jJ70").length >= 1);
}


//Given the page is web.whatsapp.com and it is logged in, check whether the page is the chat page or not
function isChatPage() {
   //not implemented
}

//Given the page is web.whatsapp.com and it is logged in, and the page is not a chat page, then move to chat page.
function moveToChatPage() {
    //not implemented
}

// Given the page is web.whatsapp.com with the chat page, search for the wix product group.
function searchWixProductsGroup() {
    
}

//Given the wix product group does not exist, throw an error to the user.
function noWixProductGroup() {
    window.onload = function() {
        swal("Error 1000","WixCast Cannot find your Wix Products Group. Please create one and try again.", "error");
    }
}

//Given the chat page is open and the wix product group exists, open it.
function openWixProductGroup() {
    //not implemented
}

//Given the wix product group is opened successfully, store the image and text in dictionary data structure.
function getImageAndTextPairs() {
    // Now to work upon

}
