
const elementos = require('./elements').ELEMENTOS



class Login {

clicaBtnSiginUp () {
        cy.get(elementos.btnSingUp).click()
    }
escreveCampoUsername() {
    cy.get(elementos.inputUsername).type ('anaflor01')
}


escreveCampoPassword() {
    cy.get(elementos.inputPassword).type ('@naflor01')
}

ClicaSignIn() {
    cy.get(elementos.btnSignIn).click()

}

validaBtnSignInVisible() {
    cy.get(elementos.btnSignIn).should ('be.visible')

}
validaBtnSignInNotVisible() {
    cy.get(elementos.btnSignIn).should ('be.invisible')

}

}

export default new Login ()
