

function getXmlHttpRequest(){
  var xmlHttpRequestObject;
  
  try {
    xmlHttpRequestObject = new XMLHttpRequest();
  }
  catch(exception){
    // for old IE users 
    try {
      xmlHttpRequestObject = new ActiveXObject("msxml2.XMLHTTP");
    }catch(exception){
      try{
        xmlHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
      }catch(exception){
        alert("very old browser in use, please upgrade so AJAX can be used!");
        return false;
      }
    }
  }
  return xmlHttpRequestObject;
}

function SendGetRequestWithAjaxForResponseText(url){

  var xmlHttpRequestObject = getXmlHttpRequest();

  // set functionality for 'readystatechange' 
  xmlHttpRequestObject.onreadystatechange = function(){

    if(xmlHttpRequestObject.readyState == 4){
      return xmlHttpRequestObject.responseText;
    }

  }

  xmlHttpRequestObject.open("GET", url, true);
  xmlHttpRequestObject.send(null);

}

function ChangeDynamicHeader (responseText){
  document.getElementById("AjaxResponse").innerHTML = responseText;
}

function fetchFromFirstProgramPhpAndChangeHeaderText(){
  const url = "https://localhost:4431/projects/firstProgram.php";
  var ajaxResponseText = SendGetRequestWithAjaxForResponseText(url);
  ChangeDynamicHeader(ajaxResponseText);
}

export {fetchFromFirstProgramPhpAndChangeHeaderText};