package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import constants.ConfigFileReader;

public class PhoneAndPADs extends ConfigFileReader{
	@FindBy (how = How.XPATH , using ="//a[text() = 'Phones & PDAs']")
    private WebElement phonesAndPDAs;
}
