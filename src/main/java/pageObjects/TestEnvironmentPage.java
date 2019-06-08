package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import constants.ConfigFileReader;

public class TestEnvironmentPage extends ConfigFileReader {

	public TestEnvironmentPage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (how = How.XPATH , using ="//span[text()='My Account']")
    private WebElement myAccount;
	
	@FindBy (how = How.XPATH , using ="//a[text()='Register']")
    private WebElement register;
	
	@FindBy (how = How.XPATH , using ="//a[text()='Login']")
    private WebElement login;
	
	@FindBy(how = How.XPATH, using = "//input[@name= 'email']")
	private WebElement myAccountLoginEmail;
	@FindBy(how = How.XPATH, using = "//input[@name= 'password']")
	private WebElement myAccountLoginPassword;
	@FindBy(how = How.XPATH, using = "//input[@type = 'submit']")
	private WebElement myAccountLoginButton;
	
	public void clickOnMyAccount () {
		myAccount.click();
	}
	
	public void clickOnRegister () {
		register.click();
	}
	
	public void clickOnLogin() {
		login.click();
	}
	
	
	public String getPageURL() {
		String actualURL = driver.getCurrentUrl();
		String expectedURL = "https://www.tekschoolofamerica.com/test-environment/";
		return actualURL;
		
		//We use JUnit assertions to pass or fail the verification
	
	}
	
	public String getPageTitle() {
		
		String pageTitle = driver.getTitle();
		return pageTitle;
	}
	/**
	 * This method send email address to email field
	 * @return
	 */
	public void enterMyAccountLoginEmail(String myAccountEmail) {
		myAccountLoginEmail.sendKeys(myAccountEmail);
	}
	
	/**
	 * This method send password to password field
	 * @return
	 */
	public void enterMyAccountLoginPassword(String myAccountPassword) {
		myAccountLoginPassword.sendKeys(myAccountPassword);
	}
	
	/**
	 * This method clicks on my account login button.
	 * @return
	 */
	public void clickOnMyAccountLoginButton() {
		myAccountLoginButton.click();
	}
	
	
}
