package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import constants.ConfigFileReader;

public class MP3Players extends ConfigFileReader{

	@FindBy (how = How.XPATH , using ="//a[text()='MP3 Players']")
    private WebElement MP3Players;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 11 (0)']")
    private WebElement test11;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 12 (0)']")
    private WebElement test12;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 15 (0)']")
    private WebElement test15;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 16 (0)']")
    private WebElement test16;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 17 (0)']")
    private WebElement test17;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 18 (0)']")
    private WebElement test18;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 19 (0)']")
    private WebElement test19;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 20 (0)']")
    private WebElement test20;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 21 (0)']")
    private WebElement test21;

	@FindBy (how = How.XPATH , using ="//a[text()='test 22 (0)']")
    private WebElement test22;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 23 (0)']")
    private WebElement test23;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 24 (0)']")
    private WebElement test24;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 4 (0)']")
    private WebElement test4;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 5 (0)']")
    private WebElement test5;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 6 (0)']")
    private WebElement test6;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 7 (0)']")
    private WebElement test7;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 8 (0)']")
    private WebElement test8;
	
	@FindBy (how = How.XPATH , using ="//a[text()='test 9 (0)']")
    private WebElement test9;
	
	@FindBy (how = How.XPATH , using ="//a[text()='Show All MP3 Players']")
    private WebElement showAllMP3Players;
	
}
