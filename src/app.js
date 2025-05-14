import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
   
  let who = ['An old lady', 'A green dog', 'A flying elephant', 'Your mother', 'Pepito el de los palotes', 'A red snake'];
  let action = ['ate', 'peed', 'crushed', 'broke', 'stole', ];
  let what = ['my alarm clock', 'my car', 'my dignity', 'my time', 'my bike'];
  let when = ['before going to the office', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was on my way', 'when I wasn´t expecting it'];
  
  let whoIndex = Math.floor(Math.random() * who.length);  
  let actionIndex = Math.floor(Math.random() * action.length);  
  let whatIndex = Math.floor(Math.random() * what.length);  
  let whenIndex = Math.floor(Math.random() * when.length);  
  
  let excuseMe = `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;  
  
  document.getElementById("excuseMe").innerHTML = excuseMe;
};
