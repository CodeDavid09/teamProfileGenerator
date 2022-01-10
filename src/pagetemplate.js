const generateTeam = team => {
    const generateManager = manager => {
        return `
        <div class="card">
    <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <h6 class="card-title">${manager.getRole()}</h6>
    <ul class="card-text list-group">
        <li class="list-group-item">Id: ${manager.getId()}</li>
        <li class="list-group-item">Email: ${manager.getEmail()}</li>
        <li class="list-group-item">Office Number: ${manager.getofficeNumber()}</li>
    </ul> 
    </div>
</div>
        ` 
    }
    const generateEngineer = engineer => {
        return `
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">${engineer.getName()}</h5>
        <h6 class="card-title">${engineer.getRole()}</h6>
        <ul class="card-text list-group">
            <li class="list-group-item">Id: ${engineer.getId()}</li>
            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
        </ul> 
        </div>
    </div>
        `
    }
    const generateIntern = intern => {
        return `
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <h6 class="card-title">${intern.getRole()}</h6>
        <ul class="card-text list-group">
            <li class="list-group-item">Id: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul> 
        </div>
    </div>
        `
    }




    const html = [];
    html.push(team
        // filters out all team members that are not manager
        .filter(employee => employee.getRole() === 'Manager')
        // calls fuction to generate mamager card html
        .map(manager => generateManager(manager))
        // for cases with multiple managers each would have their own card, .join brings them all together in one string
        .join("")
    )

    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join("")
    )

    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join("")
    )

    return html.join("")

}


module.exports = team => {
    return `

    ${generateTeam(team)} 
    `
}