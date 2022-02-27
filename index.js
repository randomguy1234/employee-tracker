const mysql= require('mysql2');
const inquirer= require('inquirer');
require('dotenv').config();
const {showDepartment}= require('./lib/Department');
const {showRoles}= require('./lib/Roles');
const {showEmployees}= require('./lib/Employee'); 

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PWORD,
        database: process.env.DB_NAME
    },

    console.log('Connected to company database.')
);



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
    .then(option => 
        {
            if (option.start === 'view all departments')
            {
                
                showDepartment(db);
            }

            else if (option.start === 'view all roles')
            {
                showRoles(db);
            }

            else if (option.start === 'view all employees')
            {
                showEmployees(db);
            }

        });