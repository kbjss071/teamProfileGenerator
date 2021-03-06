
function generateHTML(team){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/8c7053bc22.js" crossorigin="anonymous"></script>
    <title>My Team Member </title>
</head>
<body>
    <header class="text-center fw-bolder text-light bg-danger bg-opacity-75 p-4"><h1>My Team</h1></header>
    <main class="container row justify-content-md-center col-12">
    ${generateTeam(team)}
    </main>
    
</body>
</html>
    `
}

function generateTeam(team){
    let html = [];

    for (let i = 0; i < team.length; i++){
        if (team[i].getRole() == 'Manager'){
            html.push(ManagerHTML(team[i]));
        } else if (team[i].getRole() == 'Engineer'){
            html.push(EngineerHTML(team[i]));
        } else if (team[i].getRole() == 'Intern'){
            html.push(InternHTML(team[i]));
        }
    }
    return html.join(" ");

}

function ManagerHTML(manager){
    return managerHTML = `
    <div class="card border-5 m-3 px-0 shadow" style="width: 18rem;">
            <div class="card-title bg-primary text-light p-3 m-0">
                <h4>${manager.name}</h4>
                <h5><i class="fas fa-mug-hot"></i> Manager</h5>
            </div>            
            <div class="card-header bg-secondary bg-opacity-25 pb-2">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office Number: ${manager.office}</li>
                </ul>
            </div>            
        </div>
    `;

}



function EngineerHTML(engineer){
    return engineerHTML = `
    <div class="card border-5 m-3 px-0 shadow" style="width: 18rem;">
            <div class="card-title bg-primary text-light p-3 m-0">
                <h4>${engineer.name}</h4>
                <h5><i class="fa-solid fa-glasses"></i> Engineer</h5>
            </div>            
            <div class="card-header bg-secondary bg-opacity-25 pb-2">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.username}" target="_blank">${engineer.username}</a></li>
                </ul>
            </div>            
        </div>
    `;
}

function InternHTML(intern){
    return internHTML = `
    <div class="card border-5 m-3 px-0 shadow" style="width: 18rem;">
            <div class="card-title bg-primary text-light p-3 m-0">
                <h4>${intern.name}</h4>
                <h5><i class="fa-solid fa-graduation-cap"></i> Intern</h5>
            </div>            
            <div class="card-header bg-secondary bg-opacity-25 pb-2">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>            
        </div>
    `;
}

module.exports = generateHTML;