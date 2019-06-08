@TekSchoolTest 
Feature: Tek School Test 

Background: 
	Given User go to Tek School page 
	When User click on test environment 
	
	
@loginTest @smoketest @test 
Scenario: Login to test environment 
	When User see test environment page 
	Then User verify test environment title 
	
	
@loginPage @test 
Scenario: Login to My Account 
	When User click on My Account 
	And User select login from dropdown 
	Then User should see login page 
	
	
	
@test001 
Scenario Outline: Testing login with different user and pass 
	When User click on My Account 
	And User select login from dropdown 
	Then User should see login page 
	When User enter username <userName> 
	And User enter password <password> 
	And User click continue button 
	Then User should be logged in successfully 
	
	
	Examples: 
		|userName|password|
		|test0001@test.com|test0001|
		|test0002@test.com|test0002|
		|test0003@test.com|test0003|
		
	
			
			
			
			
			
