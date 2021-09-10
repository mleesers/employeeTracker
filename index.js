const inquirer = require('inquirer');
const queries = require('./lib/queries.js')


const QuestionPrompts = {
    main: 'Choose a table to interact with',
    departments: [
        'What to do involving the Department Table',
        'Enter the name of the new Department',
    ],
    roles: [
        'View roles',
    ],
    employees: [
        'View employees',
    ]
}

const ListChoices = {
    main: [
        'all departments',
        'view all roles',
        'view all employees',
        'Quit',
    ],
    departments: [
        'view departments',
        'add a department',
    ],
    roles: [
        'view roles',
        'add a role',
    ],
    employees: [
        'view employees',
        'add an employees',
        'update a employee role',
    ]
}

function init() {
    main();
}

function main() {
    console.log('\n\n')
    inquirer.prompt([
    {
        type: 'list',
        message: QuestionPrompts.main,
        name: 'choice',
        choices: ListChoices.main
    }
    ]).then((value) => {
        switch(value.choice){
            case ListChoices.main[0]:
                departments();
                break;
            case ListChoices.main[1]:
                roles();
                break;
            case ListChoices.main[2]:
                employees();
                break;
            case ListChoices.main[2]:
                process.abort();
                break;
            default:
                console.log("error in switch case index.js", value.name);
        }
    })
}

function departments() {
    inquirer.prompt([
    {
        type: 'list',
        message: QuestionPrompts.departments[0],
        name: 'choice',
        choices: ListChoices.departments
    }
    ]).then((value) => {
        switch(value.choice){
            case ListChoices.departments[0]:
                queries.selectDepartmentTable();
                main();
                break;
            case ListChoices.departments[1]:
                departmentAdd();
                break;
            default:
                console.log("error in switch case departments index.js", value.name);
        }
    })
}

function departmentAdd() {
    inquirer.prompt({
        type: 'input',
        message: QuestionPrompts.departments[1],
        name: 'choice',
    }).then((value) => {
        queries.insertDepartmentsTable(value.choice);
        main();
    })
}

function roles() {
    inquirer.prompt([
    {
        type: 'list',
        message: 'What to do involving the Roles Table',
        name: 'choice',
        choices: ListChoices.roles
    }
    ]).then((value) => {
        switch(value.choice){
            case ListChoices.roles[0]:
                queries.selectRolesTable();
                main();
                break;
            case ListChoices.roles[1]:
                roleAdd();
                break;
            case ListChoices.roles[2]:
                roleUpdate();
                break;
            default:
                console.log("error in switch case index.js", value.name);
        }
    })
}

function roleAdd() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter role title',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter role salary',
            name: 'salary',
        },
        {
            type: 'input',
            message: 'Enter role department id',
            name: 'department_id',
        },
    ]).then((value) => {
        queries.insertRolesTable(value.title, value.salary, value.department_id);
        main();
    })
}

function employees() {
    inquirer.prompt([
    {
        type: 'list',
        message: 'What to do involving the Employees Table',
        name: 'choice',
        choices: ListChoices.employees
    }
    ]).then((value) => {
        switch(value.choice){
            case ListChoices.employees[0]:
                queries.selectEmployeesTable();
                main();
                break;
            case ListChoices.employees[1]:
                employeeAdd();
                break;
            case ListChoices.employees[1]:
                employeeUpdate();
                break;
            default:
                console.log("error in switch case index.js", value.name);
        }
    })
}

function employeeAdd() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter employee title',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter employee salary',
            name: 'salary',
        },
        {
            type: 'input',
            message: 'Enter employee department id',
            name: 'department_id',
        },
        {
            type: 'input',
            message: 'Enter manager id',
            name: 'manager_id',
        },
    ]).then((value) => {
        queries.insertEmployeeTable(value.title, value.salary, value.department_id, value.manager_id);
        main();
    })
}


function employeeUpdate() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter employee ID to update',
            name: 'employee_id',
        },
        {
            type: 'input',
            message: 'Enter the new role',
            name: 'role',
        },
    ]).then((value) => {
        queries.updateEmployeeTable(value.employee_id, value.role);
        main();
    })
}

init()