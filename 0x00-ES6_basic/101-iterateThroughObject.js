export default function iterateThroughObject(reportWithIterator) {
  let result = reportWithIterator.next().value;
  for (const name of reportWithIterator) {
    result = result + ' | ' + name;
  }
  return result;
}
