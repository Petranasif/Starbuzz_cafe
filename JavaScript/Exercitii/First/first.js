
    var name = "petra";
    var message = "Hello " + name + "!";
    var timeout = 3000;
    var isNight = false;
    var isMorning = false;
    var nothing = null;


    var date = new Date();
    var hour = date.getHours();

    if(hour==)
    if(hour >= 20 || hour <= 6) {
        alert("Noapte Buna!"); 
        alert("somn usor");
    } else if(hour <= 11) {
        alert("buna dimineata!");
    } else if(hour <= 17) {
        alert("buna ziua")
    } else {
        alert("buna seara")
    }

    setTimeout(sayHello, timeout); 
    function sayHello() {
        // alert(message);
        console.log(message);
    } 