
//function to generate markdown for readMe
function generateMarkdown(data) {
    return `
    # ${data.title}
    

    ## Github Username
    ${data.github}
    
    ## Project Name
    ${data.projectName}

    ## Project Description
    ${data.projectDescription}

    ## Usage
    ${data.usage}

    ## Installation
    ${data.install}

    ## Collaborators
    ${data.collaborators}

    ## License
    ${data.license}
`;
}

module.exports = generateMarkdown;