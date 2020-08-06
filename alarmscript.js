const clicked = document.querySelector(".toggle-btn"); 
const clicked1 = document.querySelector(".toggle-btn1"); 
const clicked2 = document.querySelector(".toggle-btn2"); 
const clicked3 = document.querySelector(".toggle-btn3"); 
const dropdown = document.querySelector(".arrow");
const dropdown2 = document.querySelector(".arrow2");
const dropdown3 = document.querySelector(".arrow3");

clicked.addEventListener ("click", function(select) {
    select.preventDefault;
    document.querySelector(".toggle-btn").classList.toggle("active");
    document.querySelector(".general").classList.toggle("darkmode");
    dropdown.src= "images/whitearrow.png"; 
    dropdown2.src = "images/whitearrow.png"; 
    dropdown3.src = "images/whitearrow.png";
})


clicked1.addEventListener ("click", function(select1) {
    select1.preventDefault;
    document.querySelector(".toggle-btn1").classList.toggle("active");
    
})

clicked2.addEventListener ("click", function(select2) {
    select2.preventDefault;
    document.querySelector(".toggle-btn2").classList.toggle("active");
})

clicked3.addEventListener ("click", function(select3) {
    select3.preventDefault;
    document.querySelector(".toggle-btn3").classList.toggle("active");
})

dropdown.addEventListener ("click", function(show) {
    show.preventDefault
    document.querySelector(".daysofweek").classList.toggle("daysofweekactive");
})

dropdown2.addEventListener ("click", function(show2) {
    show2.preventDefault
    document.querySelector(".daysofweek2").classList.toggle("daysofweekactive");
})

dropdown3.addEventListener ("click", function(show3) {
    show3.preventDefault
    document.querySelector(".daysofweek3").classList.toggle("daysofweekactive");
})