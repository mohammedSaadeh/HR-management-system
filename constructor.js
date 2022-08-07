'use strict';
const body=document.getElementsByTagName('body');

var ID=999;
var net=0;
var allEmployees=[];



function Employee(name,department,level,image){
    this.name=name;
    this.department=department;
    this.level=level;
    this.image=image;
    // this.Salary=Salary;
    // this.id= function (ID) {
    //     this.ID=ID;
    // }
    // this.netSalary = function (net) {
    //     this.Salary=net;
    // }
    allEmployees.push(this);
}


let employee1= new Employee("Ghazi Same","Administration","Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Ghazi.jpg?raw=true");
let employee2= new Employee("Lana Ali","Finance","Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Lana.jpg?raw=true");
let employee3= new Employee("Tamara Ayoub","Marketing","Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Tamara.jpg?raw=true");
let employee4= new Employee("Safi Walid","Administration","Mid-Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Safi.jpg?raw=true");
let employee5= new Employee("Omar Zaid","Development","Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Omar.jpg?raw=true");
let employee6= new Employee("Rana Saleh","Development","Junior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Rana.jpg?raw=true");
let employee7= new Employee("Hadi Ahmad","Finance","Mid-Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Hadi.jpg?raw=true");



Employee.prototype.render = function () {
    // document.write(`<p>Employee Name: ${this.name} <br> Employee Department: ${this.department}<br> Salary: ${this.Salary()}</p>`);
    const Div=document.getElementById('Div');
    const div =document.createElement('div');
    const imgEl =document.createElement('img');
    Div.appendChild(div);
    imgEl.src= this.image;
    div.appendChild(imgEl);
    Div.classList.add('Design');
    div.classList.add('design');
    imgEl.style.width="200px";

    const pEl=document.createElement('p');
    pEl.textContent=`Name: ${this.name} - ID: ${this.id()}`;
    div.appendChild(pEl);
    const p2El=document.createElement('p');
    p2El.textContent=`Department: ${this.department} - Level: ${this.level}`;
    div.appendChild(p2El);
    const p3El=document.createElement('p');
    p3El.textContent=`${this.Salary()}`;
    div.appendChild(p3El);
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
};




Employee.prototype.id= function () {
    ID=ID+1;
    return ID; 
};




for (let i = 0; i < allEmployees.length; i++) {
    // allEmployees[i].Salary();
    allEmployees[i].id();
    allEmployees[i].render();
    // allEmployees[i].netSalary(Salary(allEmployees[i].level));
  
}