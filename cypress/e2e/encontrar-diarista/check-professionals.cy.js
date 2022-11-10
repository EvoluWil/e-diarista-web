context('Find professionals by cep', () => {
  beforeEach(() => {
    cy.visit('/encontrar-diarista');
  });

  describe('Invalid Form', () => {
    it('CEP invalid length', () => {
      cy.get('.MuiOutlinedInput-input').type('123456');
      cy.get('.css-1w4zc7u > .MuiButtonBase-root').click();
      cy.get('.MuiFormHelperText-root').contains('Cep deve conter "8" números');
    });

    it('CEP invalid characters', () => {
      cy.get('.MuiOutlinedInput-input').type('123456rt');
      cy.get('.css-1w4zc7u > .MuiButtonBase-root').click();
      cy.get('.MuiFormHelperText-root').contains('Cep deve conter "8" números');
    });
  });

  describe('Valid Form', () => {
    it('CEP invalid', () => {
      cy.get('.MuiOutlinedInput-input').type('12345678');
      cy.get('.css-1w4zc7u > .MuiButtonBase-root').click();
      cy.get('.MuiFormHelperText-root').contains('The given data was invalid.');
    });

    it('CEP valid and no professionals available', () => {
      cy.get('.MuiOutlinedInput-input').type('01001000');
      cy.get('.css-1w4zc7u > .MuiButtonBase-root').click();
      cy.get('.MuiAlert-message > .MuiTypography-root').contains(
        'Ainda não temos nenhum(a) diarista disponível em sua região'
      );
    });

    // it('CEP valid and professionals available', () => {
    //   cy.get('.MuiOutlinedInput-input').type('01001000');
    //   cy.get('.css-1w4zc7u > .MuiButtonBase-root').click();
    //   cy.get('.MuiFormHelperText-root').contains('The given data was invalid.');
    // });

    // it('CEP valid and more professionals available', () => {
    //   cy.get('.MuiOutlinedInput-input').type('01001000');
    //   cy.get('.css-1w4zc7u > .MuiButtonBase-root').click();
    //   cy.get('.MuiFormHelperText-root').contains('The given data was invalid.');
    // });
  });
});
