describe('Testes da página de Login', () => {
    it('Deve fazer login com sucesso com credenciais válidas', () => {
      cy.login('Admin', 'admin123');
/*Caso seja um cenário de login padrão com dados de usuário válidos e  
esses dados são usados em vários testes de login em diferentes partes 
da aplicação, é recomendável armazená-los na fixtures para promover a 
reutilização e a manutenção centralizada.*/
      cy.url().should('include', 'dashboard/index');
    });
  
    it('Deve mostrar mensagem de erro com credenciais inválidas', () => {
      cy.login('Administrador', 'admin1234');
      cy.contains('Invalid credentials').should('be.visible');
    });
  
    it('Deve mostrar mensagens de erro para campos obrigatórios', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('button[type="submit"]').click();
      cy.contains('Required').should('be.visible');
      cy.contains('Required').should('be.visible');
    });
  });
  