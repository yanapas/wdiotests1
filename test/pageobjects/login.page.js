import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }
    get errorToast () { return $('.ant-notification-notice-message'); }
    get loginValidationError () { return $$('//div[contains(@class, "ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]'); }

    open () {
        return super.open('/user/login');
    }

    async setLogin (email) {

        await (await this.inputUsername).setValue(email);
    }

    async setPassword (password) {
        await (await this.inputPassword).setValue(password);
    }

    async clickSubmitButton () {
        await (await this.buttonSubmit).click();
    }

    submitButtonIsDisabled() {
        expect(this.buttonSubmit).toBeDisabled();
    }

    errorToastAppeared() {
        expect(this.errorToast).toBeDisplayed();
    }

    async emptyLoginInput() {
        await (await this.clearInput)(await this.inputUsername);
    }

    loginRequiredError() {
        expect(this.loginValidationError).toBeDisplayed();
        expect(this.loginValidationError).toHaveText('Required');
    }
}

export default new LoginPage();
