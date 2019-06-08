package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import constants.ConfigFileReader;

public class TestEnvironmentObjects extends ConfigFileReader{

	public TestEnvironmentObjects(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	@FindBy(how = How.XPATH, using = "(//span[text() = 'My Account']")
	private WebElement myAccount;
	@FindBy(how = How.XPATH, using = "//a[text() = 'Register']")
	private WebElement myAccountRegister;
	@FindBy(how = How.XPATH, using = "//a[text() = 'Login']")
	private WebElement myAccountLogin;
	@FindBy(how = How.XPATH, using = "//input[@name= 'email']")
	private WebElement myAccountLoginEmail;
	@FindBy(how = How.XPATH, using = "//input[@name= 'password']")
	private WebElement myAccountLoginPassword;
	@FindBy(how = How.XPATH, using = "//input[@type = 'submit']")
	private WebElement myAccountLoginButton;

	public void clickOnLogin() {
		myAccount.click();
	}
	public void clickOnMyAccountRegister() {
		myAccountRegister.click();
	}
	public void clickOnMyAccountLogin() {
		myAccountLogin.click();
	}
	public void entermyAccountLoginEmail() {
		myAccountLoginEmail.sendKeys();
	}
	public void entermyAccountLoginPassword() {
		myAccountLoginPassword.sendKeys();
	}
	public void clickOnMyAccountLoginButton() {
		myAccountLoginButton.click();
	}

}
