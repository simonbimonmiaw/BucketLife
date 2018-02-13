var className = document.getElementsByClassName('inspiration')[0].className;
  if(className === "inspiration inspiration--showing") {
    document.getElementsByClassName('inspiration')[0].className = "inspiration";
  } else {
    document.getElementsByClassName('inspiration')[0].className = "inspiration inspiration--showing";
  }
}
;

/*var button = document.getElementById('slidebtn').onclick = function () {
  var className = document.getElementsByClassName('content-wrapper')[0].className;
  if(className === "content-wrapper content-wrapper--aside") {
    document.getElementsByClassName('content-wrapper')[0].className = "content-wrapper";
  } else {
    document.getElementsByClassName('content-wrapper')[0].className = "content-wrapper content-wrapper--aside";
  }

}
*/
