//Add or summation two numbers --Test-1
function add(x, y){
  return  x + y;
}
console.log(add(2, 6));


// Generate Product Discount  ---Test-2
function ProductDiscount(price, discount) {
    return price - ((price * discount) / 100);
}
console.log(ProductDiscount(200, 6)); 


// Concate string       ---Test-3
function MyName(firstName, lastName){
    return "My Name is " + firstName + " " + lastName;
}
console.log(MyName("Mohib", "Ullah"));



// Calculate Net Salary          ---Test-4
function netSalary(salary, taxPercent){
   let tax = (salary * taxPercent) / 100;
   return salary - tax;
}
console.log(netSalary(15000, 10));



// Calculate Age        ---Test-5
function calculateAge(birthYear, currentYear){
     return currentYear - birthYear;
}
console.log(calculateAge(1999, 2025));


// Check  valid mobile number  ----Test-6
function isValidMobile(mobile){
   const pattern =  /^01[0-9]{9}$/;
   return pattern.test(mobile);
}
console.log(isValidMobile('0179872'))


// Check Former Employee by Name ---Test-7
function isFormerEmp(name, formerEmp){
  if (formerEmp.includes(name)){
      console.log(name + " is a former employee.");
  } else{
      console.log(name + " is not a former employee.");
  }
}

const formerEmp = ["Mohib", "Kadir", "Sala Uddin"];

isFormerEmp("Mohib", formerEmp);
