/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('My SecondTest case', function () {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Web Table Example
        cy.get('table[name="courses"] tr td:nth-child(2)').each(function ($e1, index, $list) {
            const text = $e1.text()
            if (text.includes("Python")) {
                cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then(function (price) {
                    const pricetext = price.text()
                    expect(pricetext).to.equal('25')
                })
            }
        })



    })
})


