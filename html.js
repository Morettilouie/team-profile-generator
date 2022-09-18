// create manager
function managerSection(manager) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <header>
        <h1>My Team</h1>
    </header>
    <body>
        <div class='employees'>
            <div class='manager'>
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
                <div>
                    <div>
                        <p>ID:${manager.id}</p>
                        <a href="mailto:${manager.email}">Email:${manager.email}</a>
                        <p>Office number:${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>`;
}

module.exports = managerSection;