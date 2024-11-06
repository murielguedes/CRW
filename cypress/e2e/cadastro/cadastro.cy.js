import { generateUserData } from '../../support/helpers/dataGenerator';
import { accountData } from '../../support/helpers/dataGenerator';
import cadastro_page from '../../support/pages/cadastro/cadastro_page';
import login_page from '../../support/pages/login/login_page';


describe('Testes funcionais de cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000/signin'); 
               
          });
    afterEach(() => {
            cy.screenshot(); 
          });

    it('Cadastro de um novo usuário com dados válidos', () => {

            const userData = generateUserData ();
            login_page.clicaBtnSiginUp()
            cadastro_page.cadastraNovoUsuario(userData)
            login_page.validaBtnSignInVisible()
        }) 

    it('Tentativa de cadastro com um Username previamente cadastrado', () => {
         
            const usernameData = accountData ();
            login_page.clicaBtnSiginUp()
            cadastro_page.utilizaUsernameEstatico(usernameData)
            login_page.clicaBtnSiginUp()
            cadastro_page.verificaUsernameJaCadastrado(usernameData)
        });           
            
   
    it('Tentativa de cadastro de novo usuário sem informar First Name', () => {

            const userData = generateUserData ()
            login_page.clicaBtnSiginUp()
            cadastro_page.cadastraNovoUsuarioSemFirstName(userData)
        
        }) 

    it('Tentativa de cadastro de novo usuário sem informar Last Name', () => {

            const userData = generateUserData ()
            login_page.clicaBtnSiginUp()
            cadastro_page.cadastraNovoUsuarioSemLastName(userData)
        
        }) 

    it('Tentativa de cadastro de novo usuário sem informar Username', () => {

            const userData = generateUserData ()
            login_page.clicaBtnSiginUp()
            cadastro_page.cadastraNovoUsuarioSemUserName(userData)
        
        }) 
    it('Tentativa de cadastro de novo usuário sem informar Password', () => {

            const userData = generateUserData ()
            login_page.clicaBtnSiginUp()
            cadastro_page.cadastraNovoUsuarioSemPassword(userData)
        
        }) 
        it('Tentativa de cadastro de novo usuário sem informar Confirm Password', () => {

            const userData = generateUserData ()
            login_page.clicaBtnSiginUp()
            cadastro_page.cadastraNovoUsuarioSemConfirmPassword(userData)
        
        });


    });