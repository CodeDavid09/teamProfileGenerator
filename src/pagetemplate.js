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
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <!-- /* Font Awesome */ -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
        <!-- Google Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
        <!-- Bootstrap core CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
        <!-- Material Design Bootstrap -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet">
    
        <link rel="stylesheet" type="css" href="">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
    <div class="row noborder justify-content-center" id="team-cards">
    ${generateTeam(team)} 
    </body>

    </html>
    `
}