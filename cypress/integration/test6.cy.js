/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My SecondTest case',function() {
 
 //Mouse Hover Example menu
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('.mouse-hover-content').invoke('show') //invoke jquery method show() SHOW METHOD SHOULD BE APPLIED ON INMMEDIATE PARENT OF HIDDEN ELEMENT
cy.contains('Top').click()
 //cy.contains('Top').click({force: true})   //with click force even if the element is invisible it will click 
cy.url().should('include','top')


})
})