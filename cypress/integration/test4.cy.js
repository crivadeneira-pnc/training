/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My SecondTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//popups - cypress events
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()

//window alert
cy.on('window:alert',(str)=>{
    //mocha
    expect(str).to.equal("Hello , share this practice page and share your knowledge")
})

//window confirm
cy.on('window:confirm',(str)=>{
    //mocha
    expect(str).to.equal("Hello , Are you sure you want to confirm?")
})
//window confirm when you click on cancel
cy.on('window:confirm',()=> false)
    //mocha

//Is it possible to type inside the textbox displaying in a prompt in Cypress and click on ok button
//https://stackoverflow.com/questions/53824932/is-it-possible-to-type-inside-the-textbox-displaying-in-a-prompt-in-cypress-and

//open window in a new tab

cy.get('#opentab').invoke('removeAttr','target').click()   //invoke method let me use jquery methods such as removeAttr since cypress dont let open windows in a new tab so we delete target atribute

cy.url().should('include','rahulshettyacademy') //assertion to verify if we are in the current url

cy.go('back') //it let get back to the last browser
})
})