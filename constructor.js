'use strict';

var ID=999;
var net=0;
var allEmployees=[];

function add() {
    ID=ID+1;
    return ID;
};

function Salary(x) {
    if (x=="Senior")
    {var fullsalary=Math.floor(Math.random()*(2000-1500))+1500;
        var net=fullsalary-(fullsalary*0.075);
    return net;
    }
    else if (x=="Mid-Senior")
    {var fullsalary=Math.floor(Math.random()*(1500-1000))+1000;
        var net=fullsalary-(fullsalary*0.075);
    return net;
} else (x=="Junior")
{var fullsalary=Math.floor(Math.random()*(1000-500))+500;
    var net=fullsalary-(fullsalary*0.075);
return net;
}
};

function Data(id,name,department,level,Salary){
    this.id=id;
    this.name=name;
    this.department=department;
    this.level=level;
    this.Salary=Salary;
    this.add= function (ID) {
        this.ID=ID;
    }
    this.netSalary = function (net) {
        this.Salary=net;
    }
    allEmployees.push(this);
}


let employee1= new Data("id","Ghazi Same","Administration","Senior","Salary");
let employee2= new Data("id","Lana Ali","Finance","Senior","Salary");
let employee3= new Data("id","Tamara Ayoub","Marketing","Senior","Salary");
let employee4= new Data("id","Safi Walid","Administration","Mid-Senior","Salary");
let employee5= new Data("id","Omar Zaid","Development","Senior","Salary");
let employee6= new Data("id","Rana Saleh","Development","Junior","Salary");
let employee7= new Data("id","Hadi Ahmad","Finance","Mid-Senior","Salary");

Data.prototype.print = function () {
    document.write(`<p>Employee Name: ${this.name} <br> Employee Department: ${this.department}<br> Employee Salary: ${this.Salary}</p>`);
}


for (let i = 0; i < allEmployees.length; i++) {
    allEmployees[i].add(add());
    allEmployees[i].netSalary(Salary(allEmployees[i].level));
    allEmployees[i].print();
    
}