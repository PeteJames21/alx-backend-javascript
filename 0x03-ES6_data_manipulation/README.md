# 0x03 ES6 Data Manipulation

## 0-get_list_students.js

Create a function named `getListStudents` that returns an array of objects.

## 1-get_list_student_ids.js

Create a function `getListStudentIds` that returns an array of ids from a list of object. This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from `0-get_list_students.js`.

## 2-get_students_by_loc.js

Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city. It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.

## 3-get_ids_sum.js

Create a function `getStudentIdsSum` that returns the sum of all the student ids.

## 4-update_grade_by_city.js

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade

It should accept a list of students (from `getListStudents`), a city (String), and `newGrades` (Array of “grade” objects) as parameters.

newGrades is an array of objects with this format:

```
{
  studentId: 31,
  grade: 78,
}
```

## 5-typed_arrays.js

Create a function named `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position. It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number). If adding the value is not possible the error `Position outside range` should be thrown.

## 6-set.js

Create a function named `setFromArray` that returns a `Set` from an array. It accepts an argument (Array, of any kind of element).

## 7-has_array_values.js

Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

It accepts two arguments: a set (Set) and an array (Array).

## 8-clean_set.js

Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (`startString`).

It accepts two arguments: a `set` (Set) and a `startString` (String).

When a value starts with `startString` you only append the rest of the string. The string contains all the values of the set separated by -.
