async function uploadMediaByDom(domElement, type="image") {
  var type_lower = type.toLowerCase();
  var image = domElement;
  var imageBlob = await makeRequest('GET',image.src);
  var response = await readyReader(imageBlob, type_lower);
  return response;
}

async function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
      	xhr.responseType = 'blob';
        xhr.send();
    });
}

async function readyReader(imageBlob, type) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onloadend = function() {
      image64string = reader.result;

      var myHeaders = new Headers();
      myHeaders.append("Authorization","Client-ID 93bbc78eff59f6b");

      var formdata = new FormData();
      formdata.append(type, image64string.split('base64,')[1]);


      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://api.imgur.com/3/image", requestOptions)
        .then(response => response.text())
        .then(result => resolve(result))
        .catch(error => reject(['error', error]))
    }
    reader.readAsDataURL(imageBlob);
  });
}

export { uploadMediaByDom };
