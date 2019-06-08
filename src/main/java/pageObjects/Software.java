package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import constants.ConfigFileReader;

public class Software extends ConfigFileReader{

	@FindBy (how = How.XPATH , using ="//a[text() = 'Software']")
    private WebElement software;
}
