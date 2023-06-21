// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license && typeof license === "string") {
    return `For more information about the license, click [here](https://choosealicense.com/licenses/${license.toLowerCase()}/).`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This application is covered under the ${license}.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  
  ${renderLicenseLink(data.license)}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  \`\`\`
  ${data.description}
  \`\`\`

  ## Acceptance Criteria
  \`\`\`
  GIVEN a command-line application that accepts user input
  WHEN I am prompted for information about my application repository
  THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  WHEN I enter my project title
  THEN this is displayed as the title of the README
  WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  WHEN I choose a license for my application from a list of options
  THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
  WHEN I enter my GitHub username
  THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
  WHEN I enter my email address
  THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
  WHEN I click on the links in the Table of Contents
  THEN I am taken to the corresponding section of the README
  \`\`\`


  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)

  ## Installation
  The following necessary dependencies must be installed: ${data.installation}

  ## Usage

  ${data.usage}

  ![terminal screenshot](./assets/img/Screenshot%2006.20.23%20-%2009%20project.jpg)


  ${renderLicenseSection(data.license)}


  ## Badges

  * ${renderLicenseBadge(data.license)}
  * ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  * ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
  * ![Windows Terminal](https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white)
  * ![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white)


  ## Contributors

  ${data.contributors}

  ## Tests
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  For any questions, please contact me at the following links:
  * **Creator** - 🎨 ${data.name}
  * [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${data.email})
  * [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${data.creator})

  ## Credits

  ${data.credits}
  * [GitHub Docs - Basic Writing and formating syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
  * [Ileriayo's Markdown-badges](https://ileriayo.github.io/markdown-badges/)
  * [Ikatyang's emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)
  * [Github Docs Licensing a Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
  * [Lukas-h Markdown license badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
  * [Professional README Guide Blog](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
  * [SBoudrias NPM Inquirer.js](https://www.npmjs.com/package/inquirer/v/8.2.4)
  * [Choosing Project License](https://choosealicense.com/)
  * [dopecello's readme-generator tutorial](https://youtu.be/9YivEQFpmHQ)
`;
}

module.exports = generateMarkdown;
