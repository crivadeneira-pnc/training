/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My SecondTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//check boxes practices
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') //to select one checkbox
cy.get('#checkBoxOption1').uncheck().should('not.be.checked') //to uncheck a checkbox
cy.get('input[type="checkbox"]').check(['option2','option3']) //to select more than one checkbox

//dropdown menu (static)
cy.get('select').select('option2').should('have.value','option2')
//dropdown menu (dinamic)
cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(function($el, index, $list){

    if($el.text()==='India'){
        cy.wrap($el).click()
    }
})

cy.get('#autocomplete').should('have.value','India')




//visible and invisible
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')


//radio button
cy.get('input[value="radio2"]').check().should('be.checked')


})
})