interface Student {
firstName: string,
lastName: string,
age: number,
location: string
}

const john: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 35,
  location: 'Netherlands'
};

const mary: Student = {
  firstName: 'Mary',
  lastName: 'Lee',
  age: 35,
  location: 'Denmark'
};

const studentsList = [john, mary];

// Render a table using vanilla JavaScript
let table = document.createElement('table');
let tbody = document.createElement('tbody');

studentsList.forEach(student => {
    let row = document.createElement('tr');
    let firstNameCell = document.createElement('td');
    let locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

