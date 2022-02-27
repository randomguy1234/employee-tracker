const mysql= require('mysql2');
require('console.table');

//function to show everything in employee table
const showEmployees= (db) =>
{
    const sql= `SELECT employee.*, role.title AS role_title
                 FROM employee
                LEFT JOIN role ON role.id = role_id`;

    db.query(sql, (err, rows) => 
    {
        if (err)
        {
            console.log(err);
        }

        console.table(rows);
    });


}


//export function to be used in index.js
module.exports= {showEmployees};