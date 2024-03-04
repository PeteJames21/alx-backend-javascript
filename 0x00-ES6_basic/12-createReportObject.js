export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(list) {
      return Object.values(list)[0].length;
    },
  };
}
