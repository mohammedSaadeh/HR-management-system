const employeeData1={
    ID:function (){
        let ran1 = Math.floor(1000 + Math.random() * 9000);
        return ran1;
    },
    Name:"Ghazi Same",
    Department:"Administration",
    Level:"Senior",
    Salary:function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    },
}
// console.log(employeeData1);
// console.log(employeeData1.ID());
console.log("Employee Name:",employeeData1.Name);
console.log("Employee Salary:",employeeData1.Salary(1500,2000));
console.log("");

const employeeData2={
    ID:function (){
        let ran2 = Math.floor(1000 + Math.random() * 9000);
        return ran2;
    },
    Name:"Lana Ali",
    Department:"Finance",
    Level:"Senior",
    Salary:function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    },
}
// console.log(employeeData2);
// console.log(employeeData2.ID());
console.log("Employee Name:",employeeData2.Name);
console.log("Employee Salary:",employeeData2.Salary(1500,2000));
console.log("");

const employeeData3={
    ID:function (){
        let ran3 = Math.floor(1000 + Math.random() * 9000);
        return ran3;
    },
    Name:"Tamara Ayoub",
    Department:"Marketing",
    Level:"Senior",
    Salary:function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}
// console.log(employeeData3);
// console.log(employeeData3.ID());
console.log("Employee Name:",employeeData3.Name);
console.log("Employee Salary:",employeeData3.Salary(1500,2000));
console.log("");

const employeeData4={
    ID:function (){
        let ran4 = Math.floor(1000 + Math.random() * 9000);
        return ran4;
    },
    Name:"Safi Walid",
    Department:"Administration",
    Level:"Mid-Senior",
    Salary:function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}
// console.log(employeeData4);
// console.log(employeeData4.ID());
console.log("Employee Name:",employeeData4.Name);
console.log("Employee Salary:",employeeData4.Salary(1000,1500));
console.log("");

const employeeData5={
    ID:function (){
        let ran5 = Math.floor(1000 + Math.random() * 9000);
        return ran5;
    },
    Name:"Omar Zaid",
    Department:"Development",
    Level:"Senior",
    Salary:function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}
// console.log(employeeData5);
// console.log(employeeData5.ID());
console.log("Employee Name:",employeeData5.Name);
console.log("Employee Salary:",employeeData5.Salary(1500,2000));
console.log("");

const employeeData6={
    ID:function (){
        let ran6 = Math.floor(1000 + Math.random() * 9000);
        return ran6;
    },
    Name:"Rana Saleh",
    Department:"Development",
    Level:"Junior",
    Salary:function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}
// console.log(employeeData6);
// console.log(employeeData6.ID());
console.log("Employee Name:",employeeData6.Name);
console.log("Employee Salary:",employeeData6.Salary(500,1000));
console.log("");

const employeeData7={
    ID:function (){
        let ran7 = Math.floor(1000 + Math.random() * 9000);
        return ran7;
    },
    Name:"Hadi Ahmad",
    Department:"Finance",
    Level:"Mid-Senior",
    Salary:function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}
// console.log(employeeData7);
// console.log(employeeData7.ID()); 
console.log("Employee Name:",employeeData7.Name);
console.log("Employee Salary:",employeeData7.Salary(1000,1500)); 
                   