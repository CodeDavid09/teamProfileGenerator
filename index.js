const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const OUTPUTDIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUTDIR, "team.html")
const renderer = require("./src/pagetemplate.js")

let idArray = [];
let teamArray = [];

function initialPrompt() {
    inquirer.prompt([
        {
            message: "To begin creating a new team, please enter a team name:",
            name: "team name"
        }
    ])
        .then(function (data) {
            const teamName = data.teamName
            teamArray.push(teamName)
            addManager();
        })

}

function addManager() {
    inquirer.prompt([
        {
            message: "What is your Manager's Name?",
            name: "name"
        },
        {
            message: "What is your Manager's Email?",
            name: "email"
        },
        {
            message: "What is your Manager's office number?",
            name: "officeNumber"
        },
        {
            message: "What is this Managers id?",
            name: "managerid"
        }
    ])

        .then(function (data) {
            const name = data.name
            const email = data.email
            const officeNumber = data.officeNumber
            const id = data.managerid
            const teamMember = new Manager(name, email, officeNumber)
            teamArray.push(teamMember)
            idArray.push(id)
            addteamMember();
        });
}

function addteamMember() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Add Team Members?',
            choices: ["Add an Engineer", "Add an intern", "No, team is complete"],
            name: "addMemberData"
        }
    ])
        //The objective of a switch statement is to give an expression to evaluate and several different statements to execute based on the value of the expression. The interpreter checks 
        //each case against the value of the expression until a match is found. If nothing matches, a default condition will be used.
        .then(function (data) {
            switch (data.addMemberData) {
                case "Add an Engineer":
                    addEngineer();
                    break;
                case "Add an Intern":
                    addIntern();
                    break;
                case "No, team is complete":
                    compileTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "Enter Engineer's name",
            name: "name"
        },
        {
            message: "What is the engineer's email address?",
            name: "email"
        },
        {
            message: "What is this engineer's Github?",
            name: "github"
        },
        {
            message: "What is this Engineers id?",
            name: "engineerid"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = data.engineerid
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            teamArray.push(teamMember)
            idArray.push(id)
            addteamMember()
        });

};

function addIntern() {
    inquirer.prompt([
        {
            message: "Enter intern name.",
            name: "name"
        },
        {
            message: "What is the intern's email address?",
            name: "email"
        },
        {
            message: "what is the intern's school?",
            name: "school"
        },
        {
            message: "What is this Interns id?",
            name: "internid"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = data.internid
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            teamArray.push(teamMember)
            idArray.push(id)
            addteamMember()
        });

};



function compileTeam() {
    if (!fs.existsSync(OUTPUTDIR)) {
        fs.mkdirSync(OUTPUTDIR)
    }
    fs.writeFileSync(outputPath, render (teamArray), 'utf8')
    console.log("Team is compiled!")
}

initialPrompt()