package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import constants.ConfigFileReader;

public class Components extends ConfigFileReader {

	@FindBy (how = How.XPATH , using ="//a[text()='Components']")
    private WebElement components;
	
	@FindBy (how = How.XPATH , using ="//a[text()='Mice and Trackballs (0)']")
    private WebElement miceAndTrackballs;
	
	@FindBy (how = How.XPATH , using ="//a[text()='Monitors (2)']")
    private WebElement monitors;

	@FindBy (how = How.XPATH , using ="//a[text()='Printers (0)']")
    private WebElement printers;
	
	@FindBy (how = How.XPATH , using ="//a[text()='Scanners (0)']")
    private WebElement scanners;
	
	@FindBy (how = How.XPATH , using ="//a[text()='Web Cameras (0)']")
    private WebElement webCameras;
	
	@FindBy (how = How.XPATH , using ="//a[text()='Show All Components']")
    private WebElement showAllComponents;
	
}
