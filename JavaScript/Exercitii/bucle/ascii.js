// var code = 0;

// while(code<1024) {
//     document.write(code + " " + String.fromCharCode(code));
//     document.write("<br/>")
//     code++;

// }
 /* in loc sa pun cum am pus sus, adica am definit var apoi am pus conditia in
 while apoi document apoi code+, pot direct sa fac cum am facut jos cu for */

 for(var code=0; code<255; code++) {
    document.write(code + " " + String.fromCharCode(code));
    document.write("<br/>")
} /* aceasta bucla for se foloseste pentru variante mai simple*/ 