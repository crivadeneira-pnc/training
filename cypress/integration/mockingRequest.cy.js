/// <reference types="Cypress" />


describe('My first test suite', () => {
    it('My first test case', () => {
          //mocking the request  
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        //cy.intercept({requestObject},{responseObject})
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
        {
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName="
 
        req.continue((res)=>
    {
        //assertions
        expect(res.statusCode).to.equal(200)
    })
 }
 ).as('dummyUrl')
 
 cy.get("button[class='btn btn-primary']").click()
 cy.wait('@dummyUrl')


    })

})