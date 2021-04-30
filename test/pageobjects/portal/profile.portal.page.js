import PortalPage from "./portal.page";

class ProfilePage extends PortalPage {
  get iconUser () { return $('.ant-avatar-square'); }

  async isOpen () {
    expect(browser).toHaveUrlContaining('/profile/');
    expect(await(this.iconUser)).toBeDisplayed();
  }
}

export default new ProfilePage();