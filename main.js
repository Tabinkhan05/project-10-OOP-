import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new person();
const program = async (persons) => {
    do {
        console.log("welcome!");
        const answer = await inquirer.prompt([{
                name: "select",
                type: "list",
                message: "whom would you like to interact with? ",
                choices: ["staff", "student", "sign out"]
            }]);
        if (answer.select == "staff") {
            console.log("you approach the staff room.pllease feel free to ask anything");
        }
        else if (answer.select == "student") {
            const answer = await inquirer.prompt([{
                    name: "student",
                    type: " input",
                    message: "enter the student name you wish to engage with :"
                }]);
            const student = persons.students.find(value => value.name == answer.student);
            if (!student) {
                const name = new Student(answer.student);
                persons.addStudent(name);
                console.log(`hello this is ${name.name}. nice to meet you!`);
                console.log("new student added");
                console.log("current student list");
                console.log(persons.students);
            }
            else {
                console.log(`hello this is ${student.name}. nice to meet you again`);
                console.log("existing student list :");
                console.log(persons.students);
            }
        }
        else if (answer.select == "sign out") {
            console.log("signing out the program");
            process.exit();
        }
    } while (true);
};
program(persons);
