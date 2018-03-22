var wifeName = "Lang";
//var counter = 5;
function resetScreen() {
  yourFeelings();
}
function yourFeelings() {
  document.getElementById("displayWord1").innerHTML = "";
  var loveCount = prompt(wifeName + ", type in a number between 1 - 10 which indicates how much you love me.",);
  var loveWord = prompt(wifeName + ", what word immediately comes to mind when you think of me?",);
  //var lovePhrase = "You love me " + loveCount + " x " + loveWord + "  //= " + loveCount + loveWord;

   for(var i = 1; i <= loveCount; i++) {
    if(i % 2 != 0) {
      document.getElementById("displayWord1").innerHTML += "(" + i + ")" + loveWord + " ";
      
   }
       document.getElementById("displayWord2").innerHTML = "You entered " + loveCount + " but here are the odd instances of that number";
  } 
};