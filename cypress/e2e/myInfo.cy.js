describe('Testes My Info', () => {
    beforeEach(() => {
      cy.login('Admin', 'admin123');
      cy.navigateToMyInfoMenus();
    });
  
    it('Deve navegar pelos menus da página My Info', () => {
      const menus = [
        'Personal Details',
        'Contact Details',
        'Emergency Contacts',
        'Dependents',
        'Immigration',
        'Job',
        'Salary',
        'Report-to',
        'Qualifications',
        'Memberships'
      ];
  
      menus.forEach(menu => {
        cy.clickMenu(menu);
        cy.checkMenuContent(menu);
      });
    });
  
    it('Deve atualizar os dados pessoais com sucesso', () => {
      cy.clickMenu('Personal Details');
      const newDetails = {
        firstName: 'Maria',
        middleName: 'José',
        lastName: 'Silva'
      };
      cy.updatePersonalDetails(newDetails);
      cy.checkSuccessMessage('Successfully Updated');
    });
  });
  