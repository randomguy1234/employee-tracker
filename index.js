const mysql= require('mysql2');
const inquirer= require('inquirer');

const askUser= () =>
{
    return inquirer.prompt([
        {
            type: 'list',
            name: 'start',
            message: 'What would you like to do?',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee']
        },
    ]);
};

askUser()
    .then(option => console.log(option));