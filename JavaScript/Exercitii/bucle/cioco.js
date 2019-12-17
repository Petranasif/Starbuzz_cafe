var money = 1; /*cati bani am */
var price = 2; /* cat costa o cioclata */
var chocolates = 0; /*cate ciocolate am cumparat pana acum */

 do {
    money -= price;
    // money = money - price
    chocolates++;
    // chocolates = chocolates + 1
} while( money >= price);

document.write("Am cumparat "+ chocolates+" ciocolate")
document.write("<br/>")
document.write("Am "+ money+" lei")