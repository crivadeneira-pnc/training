class ProductPage{

    getCheckout(){
        return cy.get('a.nav-link.btn.btn-primary')
    }

    getbought(){
        return cy.get('button.btn.btn-success')
    }

    getfillCountry(){
        return cy.get('#country')
    }

}

export default ProductPage