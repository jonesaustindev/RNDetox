describe('Authentication flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should load auth screen', async () => {
    await expect(element(by.id('authHeader'))).toBeVisible();
    await expect(element(by.id('authSignInForm'))).toBeVisible();
  });

  it('sign in user and see home screen', async () => {
    await element(by.id('signInEmailInput')).typeText('test@test.com');
    await element(by.id('signInPasswordInput')).typeText('Airship123!');
    await element(by.id('signInSubmitButton')).tap();

    await expect(element(by.id('homeDataView'))).toBeVisible();
  });

  it('sign out user', async () => {
    await element(by.id('tab-settings')).tap();
    await element(by.id('settingsSignOutButton')).tap();

    await expect(element(by.id('authHeader'))).toBeVisible();
    await expect(element(by.id('authSignInForm'))).toBeVisible();
  });
});
