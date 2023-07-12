/// <reference types="Cypress" />


describe('My first test suite', () => {
    it('My first test case', () => {
         //mocking the response,changing the body of the api    
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        //cy.intercept({requestObject},{responseObject})
        cy.intercept({
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
                    },
 
        {
         statusCode : 200,
         body : [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"    }]
          
        }).as('bookretrievals') //asi se asigna una variable
        cy.get("button[class='btn btn-primary']").click()
    
        cy.wait("@bookretrievals").should(({request,response})=>{
             //length of the response array = rows of the table
            cy.get("tr").should('have.length',response.body.length+1)
        })
        cy.get('p').should("have.text","Oops only 1 Book available")


    })

})