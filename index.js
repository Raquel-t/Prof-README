// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [    
        {
            type: "input",
            message:"What is the title of your project?",
            name: "projectTitle",
        },
        {
            type:"input",
            message:"Enter a description of your project:",
            name:"description",

        },
        {
            type:"input",
            message:"What are the steps required to install your project?",
            name:"installation",

        },
        {
            type:"input",
            message:"Provide instructions and exmaples of use (Include Screenshots):",
            name:"usage",

        },
        {
            type:"input",
            message:"List your collaborators, any third-party assets (links to their primary web presence) or include links to tutorial.",
            name:"credits",

        },
        {
            type:"checkbox",
            message:"Please select a license to this project:",
            name:"license",
            choices:["None", "MIT", "Apache-2.0", "mpl-2.0", "BSD-2"]

        },
        {
            type:"input",
            message:"Please list any contributor. (GitHub username)",
            name:"contributors",

        },
        {
            type:"input",
            message:"Provide example on how to run the application.",
            name:"test",

        },
        {
            type:"input",
            message:"GitHub username.",
            name:"creator",

        },
        {
            type:"input",
            message:"Enter Full name",
            name:"name",

        },
        {
            type:"input",
            message:"Add a valid email (optional)",
            name:"email",

        },        
    ];


// TODO: Create a function to write README file
const writeToFile = () => {
    inquirer.prompt(questions).then((data) => {
        console.log(data)
        //this will send data to the generateMarkdown.js and create the README.md file
        const genRead = generateMarkdown(data);
        fs.writeFile("README.md", genRead, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Success! README.md file created.");
            }
        });
    });
};

writeToFile();
