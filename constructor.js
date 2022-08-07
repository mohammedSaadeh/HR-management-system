'use strict';

var ID=999;
var net=0;
var allEmployees=[];

function add() {
    ID=ID+1;
    return ID;
};

// function Salary(x) {
//     if (x=="Senior")
//     {var fullsalary=Math.floor(Math.random()*(2000-1500))+1500;
//         var net=fullsalary-(fullsalary*0.075);
//     return net;
//     }
//     else if (x=="Mid-Senior")
//     {var fullsalary=Math.floor(Math.random()*(1500-1000))+1000;
//         var net=fullsalary-(fullsalary*0.075);
//     return net;
// } else (x=="Junior")
// {var fullsalary=Math.floor(Math.random()*(1000-500))+500;
//     var net=fullsalary-(fullsalary*0.075);
// return net;
// }
// };

function Employee(name,department,level){
    this.name=name;
    this.department=department;
    this.level=level;
    // this.Salary=Salary;
    this.add= function (ID) {
        this.ID=ID;
    }
    // this.netSalary = function (net) {
    //     this.Salary=net;
    // }
    allEmployees.push(this);
}


let employee1= new Employee("Ghazi Same","Administration","Senior");
let employee2= new Employee("Lana Ali","Finance","Senior");
let employee3= new Employee("Tamara Ayoub","Marketing","Senior");
let employee4= new Employee("Safi Walid","Administration","Mid-Senior");
let employee5= new Employee("Omar Zaid","Development","Senior");
let employee6= new Employee("Rana Saleh","Development","Junior");
let employee7= new Employee("Hadi Ahmad","Finance","Mid-Senior");

Employee.prototype.print = function () {
    document.write(`<p>Employee Name: ${this.name} <br> Employee Department: ${this.department}<br> Salary: ${this.Salary()}</p>`);
}
Employee.prototype.Salary= function () {
    let salary=0;
    if (this.level=="Senior")
    {salary=Math.floor(Math.random()*(2000-1500))+1500;
      
    }
    else if (this.level=="Mid-Senior")
    {salary=Math.floor(Math.random()*(1500-1000))+1000;
      
    } 
    else if (this.level=="Junior")
    {salary=Math.floor(Math.random()*(1000-500))+500;}
return salary;
}


for (let i = 0; i < allEmployees.length; i++) {
    // allEmployees[i].Salary();
    allEmployees[i].add(add());
    allEmployees[i].print();
    // allEmployees[i].netSalary(Salary(allEmployees[i].level));
  
}