var offer = new Date("August 12, 2021 12:00:00").getTime();
var now = new Date().getTime();
var distDays = Math.floor((offer - now)/86400000);
var distHours = Math.floor((offer - now)/(1000*60*60)%24);
var x = setInterval(function (){

}, 1000)
document.querySelector(".SaleTimer").innerHTML = "До конца акции: " + distDays + " дней и " + distHours + " часов.";
