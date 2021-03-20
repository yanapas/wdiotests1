import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('xonol63306@gameqo.com');
        LoginPage.setPassword('Qwerty!23');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});


