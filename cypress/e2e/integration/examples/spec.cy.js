describe('My first test suite', () => {
  it('My first test case', () => {
    //test step
    cy.visit('https://example.cypress.io')
  })

  it('My second test case', () => {
    cy.visit('https://www.youtube.com') //me permite visitar una url
  })


})