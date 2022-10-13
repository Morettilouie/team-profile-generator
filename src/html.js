// Manager card template
const manager = managerData => {
    return `
    <div>
      <div>
        <h2>${managerData.getName()}</h2>
        <h3>Role: ${managerData.getRole()}</h3>
      </div> 
      <div>
        <ul>
          <li>ID: ${managerData.getId()}</li>
          <li>Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
          <li>Office Number: ${managerData.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  `
  }
  // Engineer card template
  const engineer = engineerData => {
    return `
    <div>
      <div>
        <h2>${engineerData.getName()}</h2>
        <h3>Role: ${engineerData.getRole()}</h3>
      </div> 
      <div>
        <ul>
          <li>ID: ${engineerData.getId()}</li>
          <li>Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
          
          <li>Github:
          <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a>
          </li>
        </ul>
      </div>
    </div>
  `
  }
  // Intern card template
  const intern = internData => {
    return `
    <div>
      <div>
        <h2>${internData.getName()}</h2>
        <h3>Role: ${internData.getRole()}</h3>
      </div> 
      <div>
        <ul>
          <li>ID: ${internData.getId()}</li>
          <li>Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
          <li>School: ${internData.getSchool()}</li>
        </ul>
      </div>
    </div>
  `
  }
  // iterates through answers array, creates cards for each team member, then combines all cards together
  const employeesDiv = employeesArr => {
    let employeeHtml = ''
  
    for ( i = 0; i < employeesArr.length; i++ ) {
      if (employeesArr[i].getRole() === "Manager"){
        employeeHtml = employeeHtml + manager(employeesArr[i])
      }
      if (employeesArr[i].getRole() === "Engineer"){
        employeeHtml = employeeHtml + engineer(employeesArr[i])
      }
      if (employeesArr[i].getRole() === "Intern"){
        employeeHtml = employeeHtml + intern(employeesArr[i])
      }
    } return employeeHtml
  }
  // html page template
  const template = data => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Team Profile</title>
      </head>
      <body>
        <header>
          <div>
            <h1> My Team </h1>
          </div>
        </header>
        <main>
        ${employeesDiv(data)}
        </main>
      </body>
    </html>
  `
  }
  
  module.exports = template;