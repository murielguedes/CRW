
const elementos = require('./elements').ELEMENTOS



class Login {

clicaBtnSiginUp () {
        cy.get(elementos.btnSingUp).click()
    }

BtnSiginUpDesabilitado (){

    cy.get(elementos.btnSignIn).should('be.disabled')
}

clicaCampoUserName () {
        cy.get(elementos.inputUsername).click()
    }

 clicaCampoPassword () {
        cy.get(elementos.inputPassword).click()
    }

escrevePasswordEstatico () {
        cy.get(elementos.inputPassword).type('@naflor01')
    }

escreveCampoUsername() {
    cy.get(elementos.inputUsername).type ('anaflor01')
}


escreveCampoPassword(password) {
    cy.get(elementos.inputPassword).type (password)
}

ClicaBtnSignIn() {
    cy.get(elementos.btnSignIn).click()

}

validaBtnSignInVisible() {
    cy.get(elementos.btnSignIn).should ('be.visible')

}
validaBtnSignInNotVisible() {
    cy.get(elementos.btnSignIn).should ('be.invisible')

}

clicaToggleRememberMe() {
    cy.get(elementos.toggleRememberMe).click ()


}
campoUserNameJaPreenchido() {
        cy.get(elementos.username).should('have.value', 'anaflor01')
    
}

loginComSucesso(user) {
    this.escreveCampoUsername(user.username)
    this.escreveCampoPassword(user.password)
    this.ClicaBtnSignIn()

}

loginCampoUsernameVazio (){
    this.clicaCampoUserName()
    this.escrevePasswordEstatico()
    this.BtnSiginUpDesabilitado()



}

loginCampoPasswordVazio (){
    this.escreveCampoUsername()
    this.clicaCampoPassword()
    this.BtnSiginUpDesabilitado()

}

loginSelecionadoRememberMe(){
    this.escreveCampoUsername()
    this.escrevePasswordEstatico()
    this.clicaToggleRememberMe()
    this.ClicaBtnSignIn()

}


}

export default new Login ()
