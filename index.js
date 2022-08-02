var inquirer = require("inquirer");
var fs = require("fs");
console.log("running");
inquirer
  .prompt([
    /* Pass your questions in here */
    { message: "What is your project title?", type: "input", name: "title" },

    {
      message: "What is your project description?",
      type: "input",
      name: "description",
    },
    {
      message: "What are installation instructions?",
      type: "input",
      name: "instructions",
    },
    {
      message: "What is your usage information?",
      type: "input",
      name: "usage",
    },
    {
      message: "What are your contribution guidelines?",
      type: "input",
      name: "contributing",
    },
    {
      message: "What are your test instructions?",
      type: "input",
      name: "tests",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    let template = `# ${answers.title}

## Description

${answers.description}

## Usage

${answers.usage}

## Instructions

${answers.instructions}

## Contributing

${answers.contributing}

## tests

${answers.tests}

    `;
    fs.writeFile("readme.md", template, "utf8", (err) => {
      console.log(err);
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
