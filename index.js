const inquirer = require("inquirer");
const fs = require("fs");

const READmeQuestions = [
    {
    type: "input",
    name:"Title",
    message:"What is the Title?",
    },
    {
    type: "input",
    name:"Badge",
     message:"What is the badge?",
    }, 
    {
    type: "input",
    name:"Description",
    message:"Please give a description of the project",
    },
    {
    type: "input",
    name:"TableofContents",
    message:"What type of sections would you like it to include? Include a comma between each entry",
    },
    {
    type: "input",
    name:"Installation",
    message:"What are the steps required to install your project?",
    },
    {
    type: "input",
     name:"Usage",
    message:"Provide instructions and examples for use.",
    },
    {
    type: "input",
     name:"License",
    message:"What is the license?",
    },
    {
    type: "input",
    name:"Contributing",
    message:"List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
    },
    {
    type: "input",
    name:"Tests",
    message:"Run your tests here",
    },
    {
    type: "input",
    name:"Gitpic",
    message:"Please include a URL to your profile picture",
    },
    {
    type: "input",
    name:"Gitemail",
    message:"Please include your GitHub email",
    },

]

inquirer
    .prompt(READmeQuestions).then(Response => {

    fs.appendFileSync("README.md", ("# " + Response.Title) + '\n', function(err){
        if(err){

            return console.log(err);

        }
        console.log("Success")
                                                
    });
    fs.appendFileSync("README.md", ( '\n' + "![alt text](" + Response.Badge + ")") + '\n', function(err){
        if(err){

            return console.log(err);
        }
        console.log("Success")
    });
    fs.appendFileSync("README.md", ("## Description" + '\n' + Response.Description) + '\n', function(err){
        if(err){

            return console.log(err);
        }
        console.log("Success")
    });
    fs.appendFileSync("README.md", ("## Table of Contents" + '\n' + Response.TableofContents.split(",").join('\n' +"- ")) + '\n', function(err){
        if(err){

            return console.log(err);
        }
        console.log("Success")
    });
    fs.appendFileSync("README.md", ("## Installation" + '\n' + Response.Installation) + '\n', function(err){
        if(err){

            return console.log(err);
        }
        console.log("Success")
    });
    fs.appendFileSync("README.md", ("## Usage" + '\n' + Response.Usage) + '\n', function(err){
        if(err){

            return console.log(err);
        }
        console.log("Success")
    });
    fs.appendFileSync("README.md", ("## Contributors" + '\n' + Response.Contributing) + '\n', function(err){
        if(err){

            return console.log(err);
        }
        console.log("Success")
    });
    fs.appendFileSync("README.md", ("## License" + '\n' + Response.License) + '\n', function(err){
        if(err){

            return console.log(err);
        }
        console.log("Success")
    });
    fs.appendFileSync("README.md", ("## Tests" + '\n' + Response.Tests) + '\n', function(err){
        if(err){

            return console.log(err);
        }
        console.log("Success")
    });
    fs.appendFileSync("README.md", ("## Contact" + '\n' + "![alt text](" + Response.Gitpic + ")") + '\n', function(err){
        if(err){

            return console.log(err);
        }
        console.log("Success")
    });
    fs.appendFileSync("README.md", ('\n' + Response.Gitemail) + '\n', function(err){
        if(err){

            return console.log(err);
        }
        console.log("Success")
    });












    })
