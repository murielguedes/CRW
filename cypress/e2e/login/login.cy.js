import { generateUserData } from '../../support/helpers/dataGenerator';
import cadastro_page from '../../support/pages/cadastro/cadastro_page';
import login_page from '../../support/pages/login/login_page';
import home_page from '../../support/pages/home/home_page';

describe('Testes funcionais de login', () => {
    
    const user = {
        username: 'Anaflor01',
        password: '@naflor01'

    };    
    
    beforeEach(() => {
        cy.visit('http://localhost:3000/signin'); 
        
      });
    it('Login com dados válidos', () => {
        login_page.loginComSucesso(user)
        home_page.localizarLogoHome()
    });

    it('Tentativa de login com o campo Username vazio', () => {
        login_page.loginCampoUsernameVazio ()
    });

    it('Tentativa de login com o campo Password vazio', () => {
        login_page.loginCampoPasswordVazio()
    });

    
    it('Login utilizando Remember me', () => {
        login_page.loginSelecionadoRememberMe()
        home_page.clicaBtnLogout()
        login_page.campoUserNameJaPreenchido()
       
        
        

    });


});