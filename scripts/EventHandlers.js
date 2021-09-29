import { fetchFromFirstProgramPhpAndChangeHeaderText } from "./Ajax_Example";


// submit button to get info from firstProgram.php
const submitButtonToGetFromFirstProgramPhp = 
  document.getElementById("submitGetRequestToFirstProgramPhp");

submitButtonToGetFromFirstProgramPhp.addEventListener(
  "click", 
  function(){
    fetchFromFirstProgramPhpAndChangeHeaderText();
  }, 
  true);




  
  