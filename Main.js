import * from "chatSearchGroup.js"
import swal from "sweetalert.min.js"
import { gsm, ssm } from "getMsgSequence.js"

//Given the current active page, check if the page is web.whatsapp.com and return TRUE
function isWhatsapp() {
    return (location.href.indexOf("web.whatsapp.com") !== -1);
} //Tested and Working as of 4/10/23


//Given the page is web.whatsapp.com, check if the page is logged in or not
function isLogggedIn() {
    return (document.getElementsByClassName("two _1jJ70").length >= 1);
} //Tested and Working as of 4/10/23


//Given the page is web.whatsapp.com and it is logged in, check whether the page is the chat page or not
function isChatPage() {
   //there are 5 span elements. the span elements are only filled when whatsapp web change its state from the chatpage to another page like status page.
   var isStatusPage = document.getElementsByClassName("ppled2lx tkdu00h0 gfz4du6o r7fjleex lhggkp7q qq0sjtgm ln8gz9je").length >= 1;
   if (isStatusPage) {
       return "status";
   }
   else {
       return true;
   }
}// Tested and Working as of 4/10/23

//Given the page is web.whatsapp.com and it is logged in, and the page is not a chat page, then move to chat page.
function moveToChatPage(currentPage) {
    if (currentPage == "status") {
        document.getElementsByClassName("lhggkp7q q177n8ra n642r0m2 b9fczbqn lxozqee9")[0].click();
    }
}//TW = 4/10/23

// Given the page is web.whatsapp.com with the chat page, search for the wix product group.
function searchAndOpenWixProductsGroup() {
    return chatSearchGroup.search("Wix Products");
}//TW = 4/10/23

//Given the wix product group does not exist, throw an error to the user.
function throwUserError(bool, error_type, error_disc) {
    if (bool) {
        window.onload = function() {
            swal(error_type, error_disc, "error");
        }
        
    }
}//TW = 4/10/23

//Given the wix product group is opened successfully, organize the image, video and text in dictionary data structure and return the dictionary. 
function getImageAndTextPairs() {
    // Now to work upon
    var msg_list = gsm();
    var result = ssm();
    return result;   
}//TW = 4/11/23


