/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'
 
describe('My Second Test Suite', function() 
{
 
it('My SecondTest case',function() {
 
 //iframes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.frameLoaded('#courses-iframe')
cy.iframe().find("a[href='mentorship']").eq(0).click()
cy.wait(2000)
cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

//The [attribute*=value] selector matches every element whose attribute value containing a specified value.
})
})