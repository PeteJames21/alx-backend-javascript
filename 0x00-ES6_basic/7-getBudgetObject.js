// The Object property value shorthand syntax applies when both a variable/parameter
// has the same name as an object property. In the code below, in stead of writing
// 'income: income', you only write the property name.
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
