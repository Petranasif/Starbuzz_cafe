 
 for(var j=1; j<10; j++) {
    for(var i = 1; i<10; i++) {
        document.write(j + " x " + i + " = " + j * i)
        document.write("<br/>");
    }
    document.write("<br/>");
}

/* 
j=1 
1<10
i=1
i<10
scrie in html 1 x 1 = 1
br
j=1
i=2
html 1 x 2 = 2 
br
.
.
br
j=1
i=9
1x9=9
br
j=1
i=10 nu mai merge atunci se duce la cealalt for
j=2
i=1
2x1=2
j=2
i=2
2x2=4
.
.
j=2
i=10 nu mai merge merg in for de sus
j=3
i=1
si asa.... */



