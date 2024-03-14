# 0x04-TypeScript

## task_0/js/main.ts

- Write an interface named `Student` that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
- Create two students, and create an array named `studentsList` containing the two variables
- Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
- Each row should contain the first name of the student and the location

## task_1/js/main.ts

Build a `Teacher` class

- `firstName`(string) and `lastName`(string). These two attributes should only be modifiable when a Teacher is first initialized
- `fullTimeEmployee`(boolean) this attribute should always be defined
- `yearsOfExperience`(number) this attribute is optional
- `location`(string) this attribute should always be defined
- Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

Write an interface named Directors that extends Teacher. It requires an attribute named `numberOfReports`(number)

Write a function printTeacher:

- It accepts two arguments `firstName` and `lastName`
- It returns the first letter of the firstName and the full lastName
- Example: `printTeacher("John", "Doe")` -> J. Doe

Write an interface for the function named printTeacherFunction.

Write a Class named `StudentClass`:

- The constructor accepts `firstName`(string) and `lastName`(string) arguments
- The class has a method named `workOnHomework` that return the string `Currently working`
- The class has a method named `displayName`. It returns the `firstName` of the student

# task_2/js/main.ts

Create the DirectorInterface interface with the 3 expected methods:

- workFromHome() returning a string
- getCoffeeBreak() returning a string
- workDirectorTasks() returning a string

Create the TeacherInterface interface with the 3 expected methods:

- workFromHome() returning a string
- getCoffeeBreak() returning a string
- workTeacherTasks() returning a string

Create a class Director that will implement DirectorInterface

- workFromHome should return the string `Working from home`
- getToWork should return the string `Getting a coffee break`
- workDirectorTasks should return the string `Getting to director tasks`

Create a class Teacher that will implement TeacherInterface

- workFromHome should return the string `Cannot work from home`
- getCoffeeBreak should return the string `Cannot have a break`
- workTeacherTasks should return the string `Getting to work`

Create a function createEmployee with the following requirements:

- It can return either a Director or a Teacher instance
- It accepts 1 arguments:
  - salary(either number or string)
- if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director

Write a function isDirector:

- it accepts employee as an argument
- it will be used as a type predicate and if the employee is a director

Write a function executeWork:

- it accepts employee as an argument
- if the employee is a Director, it will call workDirectorTasks
- if the employee is a Teacher, it will call workTeacherTasks

Write a String literal type named `Subjects` allowing a variable to have the value `Math` or `History` only. Then write a function named `teachClass`:

- it takes `todayClass` as an argument
- it will return the string `Teaching Math` if todayClass is `Math`
- it will return the string `Teaching History` if todayClass is `History`
