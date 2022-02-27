const mysql= require('mysql2');
require('console.table');

//function to show everything in department table
const showDepartment= (db) =>
{
    const sql= `SELECT * FROM department`;

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
module.exports= {showDepartment};