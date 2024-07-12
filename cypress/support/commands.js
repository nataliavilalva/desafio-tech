Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });

  Cypress.Commands.add('navigateToMyInfoMenus', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');
  });

  Cypress.Commands.add('clickMenu', (menuName) => {
    cy.contains(menuName).click();
  });
  
  Cypress.Commands.add('checkMenuContent', (menuContent) => {
    cy.contains(menuContent).should('be.visible');
  });
  
  Cypress.Commands.add('updatePersonalDetails', (details) => {
    cy.get('input[name="firstName"]').clear().type(details.firstName);
    cy.get('input[name="middleName"]').clear().type(details.middleName);
    cy.get('input[name="lastName"]').clear().type(details.lastName);
    cy.get('button[type="submit"]').first().click();
  });
  
  Cypress.Commands.add('checkSuccessMessage', (message) => {
    cy.get('.oxd-toast.oxd-toast--success')
    .should('be.visible')
    .and('contain.text', message);
  });