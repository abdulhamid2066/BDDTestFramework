package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import constants.ConfigFileReader;

public class RegisterPage extends ConfigFileReader{

	public RegisterPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		}
		
	@FindBy (how = How.XPATH , using ="//input[@name='firstname']")
    private WebElement firstName;
	@FindBy (how = How.XPATH , using ="//input[@name='lastname']")
    private WebElement lastname;
	@FindBy (how = How.XPATH , using ="//input[@name='email']")
    private WebElement email;
	@FindBy (how = How.XPATH , using ="//input[@name='telephone']")
    private WebElement telephone;
	@FindBy (how = How.XPATH , using ="//input[@name='password']")
    private WebElement password;
	@FindBy (how = How.XPATH , using ="//input[@name='confirm']")
    private WebElement confirm;
	@FindBy (how = How.XPATH , using ="//input[@type='radio' and @value='1']")
    private WebElement subscribYes;
	@FindBy (how = How.XPATH , using ="//input[@type='radio' and @value='0']")
    private WebElement subscribNo;
	@FindBy (how = How.XPATH , using ="//input[@name='agree']")
    private WebElement agreetoPrivacy;
	@FindBy (how = How.XPATH , using ="//input[@value='Continue']")
    private WebElement continueButton;
	
}
