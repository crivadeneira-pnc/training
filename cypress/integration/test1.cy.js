/// <reference types="Cypress" />


describe('My first test suite', () => {
    it('My first test case', () => {
      //test step
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('input[type="search"]').type('ca')
      cy.wait(2000)
      cy.get('.product:visible').should('have.length',4)
      //parent child chaining
      cy.get('.products').as('productlocator')   //give an alias to reuse variable name
      cy.get('@productlocator').find('.product').should('have.length',4)
      cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
        console.log('This is a javascript console log shown on inspect code')
      })
      //metodo iterable
      cy.get('@productlocator').find('.product').each(function($el, index, $list){
      const vegetables = $el.find('h4.product-name').text()
      if(vegetables.includes('Cashews'))
      {
      cy.wrap($el).find('button').click()//we need to use wrap when we want to use click method
      }
      })
      //asserts if logo text is displayed correctly
      cy.get('.brand').should('have.text','GREENKART')
      //this is to prints in logs
      cy.get('.brand').then(function($logo){
        cy.log($logo.text())
      })

      

    })
  
    
  
  
  })