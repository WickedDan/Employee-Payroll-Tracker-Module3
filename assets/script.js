// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// TODO: Get user input to create and return an array of employee objects
const collectEmployees = function() {

  const employeesArray = []
  let enteringData = true;
  while (enteringData) {
    const firstName = prompt("Please Enter Employee's First Name : ");
    const lastName = prompt("Please Enter Employee's Last Name : ");
    const salary = prompt("Please Enter Employee's Salary : "); 
  
  
    if (isNaN(`${salary}`)){ 
      alert("Please use a vaild sum when entering salary, try again")
    }
    
   const employ = {
    firstName: firstName,
    lastName: lastName,
    salary: Number(salary)}
  employeesArray.push(employ);
  enteringData = confirm("Press OK to add another employee, press Cancel to Finish");
  }

  
  return employeesArray;
  
 }




// Display the average salary
const displayAverageSalary = function(employeesArray) {
  
    let sum = 0;
    for (let i = 0; i < employeesArray.length; i++) {
    console.log(typeof employeesArray[i].salary);
    
      sum += employeesArray[i].salary;
    }
    let average = sum / employeesArray.length;
    console.log(average);
    return average;
  }


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomMath = Math.floor(Math.random() * employeesArray.length);
  let randomWinner = (employeesArray[randomMath]);
  console.log (randomWinner.firstName + " " + randomWinner.lastName)
  return; 
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees); 
  
  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
