package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import constants.ConfigFileReader;

public class Desktops extends ConfigFileReader{
	
	@FindBy (how = How.XPATH , using = "//a[text()='Desktops']")
    private WebElement desktops;
	
	@FindBy (how = How.XPATH , using = "//a[text()='PC (0)']")
    private WebElement PC;
	
	@FindBy (how = How.XPATH , using = "//a[text()='Mac (1)']")
    private WebElement mac;
	
	@FindBy (how = How.XPATH , using = "//a[text()='Show All Desktops']")
    private WebElement showAllDesktops;
	
	
}
