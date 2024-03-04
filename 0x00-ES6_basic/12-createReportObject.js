export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    // Count the number of keys
    getNumberOfDepartments(list) {
      return Object.keys(list).length;
    },
  };
}
