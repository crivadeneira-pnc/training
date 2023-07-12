/// <reference types="Cypress" />

describe('My first test suite', () => {
    it('My first test case', () => {
        //cy.request({method},{url},{body})
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',{
            "name":"Learn Appium Automation with Java",
            "isbn":"xwas",
            "aisle":"985",
            "author":"John ty"
             
        }).then(function(response){
            //these are assertions
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).to.eq(404)
        })
        
    })

})