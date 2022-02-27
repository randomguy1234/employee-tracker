const mysql= require('mysql2');
require('console.table');

//function to show everything in role table
const showRoles= (db) =>
{
    const sql= `SELECT role.*, department.name AS department_name 
                FROM role 
                LEFT JOIN department ON department.id = department_id`;

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
module.exports= {showRoles};