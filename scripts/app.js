var wifeName = "Lang";
//var counter = 5;

function yourFeelings() {
  
  var loveCount = prompt(wifeName + ", type in a number between 1 - 10 which indicates how much you love me.",);
  var loveWord = prompt(wifeName + ", what word immediately comes to mind when you think of me?",);
  var lovePhrase = "You love me " + loveCount + " x " + loveWord + " = " + loveWord + loveCount;

   for(var i = 1; i <= loveCount; i++) {
    document.getElementById("displayWord1").innerHTML += loveWord + " ";
   }
    document.getElementById("displayWord2").innerHTML += lovePhrase + " ";
};