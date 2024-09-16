const elements = require ('./elements').ELEMENTS



class Cadastro {

    
    escreverFirstName (firstName) {
        cy.get(elements.inputFirstName).type(firstName)

    }
    escreverLastName (lastName) {
        cy.get(elements.inputLastName).type(lastName)

    }

    escreverUsername (userName) {
        cy.get(elements.inputUserName).type(userName)

    }


    escreverPassword (password) {
        cy.get(elements.inputPassword).type(password)

    }
    escreverConfirmPassword (password) {
        cy.get(elements.inputConfirmPassword).type(password)

    }
    finalizaCadastro () {
        cy.get(elements.btnSignUpSubimit).click()
    }
    finalizaCadastroBtnDesabilitado () {
        cy.get(elements.btnSignUpSubimit).should('be.disabled')

    }

    escreverUsernameJaCadastrado() {

        cy.get(elements.inputUserName).type('@naflor01')


    }
    
    cadastraNovoUsuario(userData) {
        this.escreverFirstName(userData.firstName)
        this.escreverLastName(userData.lastName)
        this.escreverUsername(userData.userName)
        this.escreverPassword(userData.password)
        this.escreverConfirmPassword(userData.password)
        this.finalizaCadastro()
        
    }
    utilizaUsernameEstatico(usernameData) {
        this.escreverFirstName(usernameData.firstName)
        this.escreverLastName(usernameData.lastName)
        this.escreverUsername(usernameData.userName)
        this.escreverPassword(usernameData.password)
        this.escreverConfirmPassword(usernameData.password)
        this.finalizaCadastro()
        
    }

    verificaUsernameJaCadastrado(usernameData) {
        this.escreverFirstName(usernameData.firstName)
        this.escreverLastName(usernameData.lastName)
        this.escreverUsername(usernameData.userName)
        this.escreverPassword(usernameData.password)
        this.escreverConfirmPassword(usernameData.password)
        this.finalizaCadastroBtnDesabilitado ()
        
    }

    cadastraNovoUsuarioSemFirstName(userData) {
        this.escreverLastName(userData.lastName)
        this.escreverUsername(userData.userName)
        this.escreverPassword(userData.password)
        this.escreverConfirmPassword(userData.password)
        this.finalizaCadastroBtnDesabilitado ()
        
    }

    cadastraNovoUsuarioSemLastName(userData) {
        this.escreverFirstName(userData.firstName)
        this.escreverUsername(userData.userName)
        this.escreverPassword(userData.password)
        this.escreverConfirmPassword(userData.password)
        this.finalizaCadastroBtnDesabilitado ()
        
    }

    cadastraNovoUsuarioSemUserName(userData) {
        this.escreverFirstName(userData.firstName)
        this.escreverLastName(userData.lastName)
        this.escreverPassword(userData.password)
        this.escreverConfirmPassword(userData.password)
        this.finalizaCadastroBtnDesabilitado ()
        

    }
    cadastraNovoUsuarioSemPassword(userData) {
        this.escreverFirstName(userData.firstName)
        this.escreverLastName(userData.lastName)
        this.escreverUsername(userData.userName)
        this.escreverConfirmPassword(userData.password)
        this.finalizaCadastroBtnDesabilitado ()
        
    }

    cadastraNovoUsuarioSemConfirmPassword(userData) {
        this.escreverFirstName(userData.firstName)
        this.escreverLastName(userData.lastName)
        this.escreverUsername(userData.userName)
        this.escreverPassword(userData.password)
        this.finalizaCadastroBtnDesabilitado ()
        
    }
    
}

export default new Cadastro ();