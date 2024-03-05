export default function* createIteratorObject(report) {
  // An object of the form {dept-name: [employee1, employee2, ...], ...}
  const allEmployees = report['allEmployees'];

  // We are looping through the arrays containing names of employees from
  // each department and returning the name of each employee in each iteration.
  for (const arr of Object.values(allEmployees)) {
    for (const employee of arr) {
      yield employee;
    }
  }
}
