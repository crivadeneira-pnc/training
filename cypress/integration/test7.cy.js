/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My SecondTest case',function() {
 
 //Switch Tab Example grabbing the href with jquery prop method
cy.visit(Cypress.env('url')+'/AutomationPractice/')
cy.get('#opentab').invoke('prop','href').then(function(link){
    let hrefurl = link
    cy.log(hrefurl)
    cy.visit(hrefurl)
})



})
})