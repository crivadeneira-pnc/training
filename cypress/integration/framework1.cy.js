/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>

import 'cypress-iframe'
import HomePage from '../../cypress/support/Pageobjects/HomePage'
import ProductPage from '../../cypress/support/Pageobjects/ProductPage'

 
describe('My Second Test Suite', function() 
{
        //we use fixtures to export data from external to our test project
        //fixtures/example.json is our external file where we store variables
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })

    })
 
it('My SecondTest case',function() {
    const homePage = new HomePage()
    const productPage = new ProductPage()
    
    cy.visit(Cypress.env('url')+'/angularpractice/')
    homePage.getEditbox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    //assertions and validations
    homePage.getDataBinding().should('have.value',this.data.name)
    homePage.getEditbox().should('have.attr','minlength','2')
    homePage.getEntrepeneur().should('be.disabled')
    homePage.getShopTab().click()
    //customize cypress commands created in support/commands.js
   //cy.pause()
   // cy.debug()
    cy.selectProduct('Blackberry') //useless
    cy.selectProduct('Nokia Edge') //useless
    cy.selectProduct('iphone X') //useless

    //parameterizing data with fixture and commands
    this.data.Productname.forEach(function(element){
        cy.selectProduct(element) //this is a command declaration
    })

    productPage.getCheckout().click()

    //implementing the sum of products functionality 
    var sum =0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=>{
        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum=Number(sum)+Number(res)
        
    }).then(function(){
        cy.log(sum)
    })

    //we are gonna to compare if the sum equals to the total
    cy.get('h3 strong').then(function(element){
        const total = element.text()
        var res = total.split(" ")
        res = res[1].trim()
        expect(Number(res)).to.equal(sum)
    })
    


    productPage.getbought().click()

    productPage.getfillCountry().type('ind')
    Cypress.config('defaultCommandTimeout',8000) //you give specific timeout only to this test case
    cy.get('div.suggestions ul li a').each(function($el, index, $list){

    if($el.text()==='India'){
        cy.wrap($el).click()
    }

    cy.get('input#checkbox2').check({force:true}).should('be.checked')
    cy.get('.btn.btn-success.btn-lg').click()
    //cy.get('div.alert.alert-success').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('div.alert').then(function(element){
        var tex = element.text()
        expect(tex.includes("Success")).to.be.true  //expect assertion
    })

    
})


     



})
})