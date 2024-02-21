to run a code on opera you must go to the terminal and enter >npm run dev


Create an interactive glossary application. The page should be split into two panels.
 The left panel will have a list of programming concepts (e.g. variables).
The right panel will contain a header, paragraph and photo that describe a selected programming concept. 
When you click a concept name on the left, it will be detailed on the right. 
You must use atleast two components, 
you must also represent programming concepts using an object. Consider how we represented a question in the quiz app last week.
Extension :Include a quiz question and text input for each concept. 
Indicate to the user if they got a question right or not. 
Include the logic for this in the concept class. 
Write atleast two unit tests for this logic. 
These quizes can be extended with multiple choices and questions if you like. 
You can submit project code here, or add a file with a link to the projects GitHub repo. 
You only need to upload the src folder.


<!-- Constructor: Everything is going to start up instructions for a given object by default
class Employee{
    constructor (name,id,salary) //only exist inside the constructor
   // by placing them here labels them
    this.name = name
    this.id = id
    this.salary = salary
    }
    get ChristamasBonus(){
        let monthly = this.salary/12
        return monthly*1.1

    }
}

let employee1 = new Employee("John Smith", "1", "30000")
let employee2 = new Employee("Jane Smith", "2", "40000")

let employees = [employee1,employee2,employee3,employee4]
// for every
employees.map((employee) => {
    console.log('Name : ${employee.name} Index : ${index}')
})
// access something 
App.js

<header className= "App header">
    {employeeList.map((employee, index) => {
        return(
            <div>
            <>
        )
    })} -->