var john = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
    location: 'Netherlands'
};
var mary = {
    firstName: 'Mary',
    lastName: 'Lee',
    age: 35,
    location: 'Denmark'
};
var studentsList = [john, mary];
// Render a table using vanilla JavaScript
var table = document.createElement('table');
var tbody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
