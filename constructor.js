'use strict';

function Data(name,department,level){
    this.name=name;
    this.department=department;
    this.level=level;
}


let employee1= new Data("Ghazi Same","Administration","Senior");
let employee2= new Data("Lana Ali","Finance","Senior");
let employee3= new Data("Tamara Ayoub","Marketing","Senior");
let employee4= new Data("Safi Walid","Administration","Mid-Senior");
let employee5= new Data("Omar Zaid","Development","Senior");
let employee6= new Data("Rana Saleh","Development","Junior");
let employee7= new Data("Hadi Ahmad","Finance","Mid-Senior");

Data.prototype.print = function () {
    document.write(`<p>Employee Name: ${this.name} <br> Employee Department: ${this.department}<br> Employee Salary: ${this.id}</p>`);
}


employee1.print();
employee2.print();
employee3.print();
employee4.print();
employee5.print();
employee6.print();
employee7.print();


// var id=999;
// uniqueId= function (counter) {
//     this.id=counter+1;
//     id++;
// }
