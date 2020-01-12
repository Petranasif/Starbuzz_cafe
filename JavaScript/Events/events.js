var button = document.querySelector("input");
var element = document.getElementById("time");

function showTime() {
    element.innerText = Date();
};

function changeStyle () {
    element.className = "newStyle";
};

// showTime();

/* aceasta este prima varianta, dar nu e recomandata deoarece se subrascrie, adica se aplica doar aldoilea onclick ala cu changeStyle
 button.onclick = showTime;
 button.onclick = changeStyle;*/

/*aceasta este adoua varianta sa dienesc cele doua eventuri intrun singur function
 button.onclick = function() {
     showTime();
     changeStyle();
 };*/

/*aceasta este cea mai buna varianta*/
button.addEventListener("click", showTime);
button.addEventListener("click", changeStyle);

// button.removeEventListener("click", changeStyle); 
