function double1(n) {
    return n*2;
};
var double2 = function(n) { 
    return n*2;

}

var double3 = (n) => n*2; /* aceasta este o prescurtare pentru functia double2, semnul => inseamna: rezulta*/

double2(10);
double3(10);