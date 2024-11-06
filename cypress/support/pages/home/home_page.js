const elements = require ('./elements').ELEMENTS

class Home {

    localizarLogoHome () {

        cy.get(elements.nameLogo).should('exist')

    }

    clicaBtnLogout () {

        cy.get(elements.btnLogout).click()

    }



}

export default new Home ();