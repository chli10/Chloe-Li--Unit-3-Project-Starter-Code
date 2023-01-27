/* Declare variables below to save the different sections (divs) of your story*/

let storyopening = document.querySelector(".story-opening");
let option1 = document.querySelector(".option-one-screen");
let option2 = document.querySelector(".option-two-screen");
let end1 = document.querySelector(".option-one-end");
let end2 = document.querySelector(".option-two-end");
let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");



button1.onclick=function() {
    option1.style.display = "block";
    storyopening.style.display = "none";
    console.log("hello world");
};

button2.onclick=function() {
    option2.style.display = "block";
    storyopening.style.display = "none";
};

option1.onclick=function() {
    end1.style.display = "block";
    option1.style.display = "none";
    console.log("hi");
}; 

option2.onclick=function() {
  	end2.style.display="block";
    option2.style.display="none";
};    

