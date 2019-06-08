$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolTest.feature");
formatter.feature({
  "line": 2,
  "name": "Tek School Test",
  "description": "",
  "id": "tek-school-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User click on My Account",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User enter username \u003cuserName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 35,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;1"
    },
    {
      "cells": [
        "test0001@test.com",
        "test0001"
      ],
      "line": 36,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;2"
    },
    {
      "cells": [
        "test0002@test.com",
        "test0002"
      ],
      "line": 37,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;3"
    },
    {
      "cells": [
        "test0003@test.com",
        "test0003"
      ],
      "line": 38,
      "id": "tek-school-test;testing-login-with-different-user-and-pass;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5156771100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 7525895500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1774467800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 23,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User click on My Account",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User enter username test0001@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User enter password test0001",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_click_on_My_Account()"
});
formatter.result({
  "duration": 89818100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 1177363100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_see_login_page()"
});
formatter.result({
  "duration": 422933400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test0001@test.com",
      "offset": 20
    }
  ],
  "location": "stepDefinitions.user_enter_username_username(String)"
});
formatter.result({
  "duration": 2132303800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test0001",
      "offset": 20
    }
  ],
  "location": "stepDefinitions.user_enter_password_test(String)"
});
formatter.result({
  "duration": 2143507000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_click_continue_button()"
});
formatter.result({
  "duration": 2872572600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 2393520700,
  "status": "passed"
});
formatter.after({
  "duration": 712573600,
  "status": "passed"
});
formatter.before({
  "duration": 3331803000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4538937400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1212732600,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 23,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User click on My Account",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User enter username test0002@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User enter password test0002",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_click_on_My_Account()"
});
formatter.result({
  "duration": 264076100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 413850200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_see_login_page()"
});
formatter.result({
  "duration": 387542500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test0002@test.com",
      "offset": 20
    }
  ],
  "location": "stepDefinitions.user_enter_username_username(String)"
});
formatter.result({
  "duration": 2095827500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test0002",
      "offset": 20
    }
  ],
  "location": "stepDefinitions.user_enter_password_test(String)"
});
formatter.result({
  "duration": 2076145300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_click_continue_button()"
});
formatter.result({
  "duration": 2637475800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 2340985200,
  "status": "passed"
});
formatter.after({
  "duration": 698210000,
  "status": "passed"
});
formatter.before({
  "duration": 3356165400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4508145100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1155008700,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Testing login with different user and pass",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-user-and-pass;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 23,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User click on My Account",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User enter username test0003@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User enter password test0003",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.user_click_on_My_Account()"
});
formatter.result({
  "duration": 146749800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 495940900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_see_login_page()"
});
formatter.result({
  "duration": 408412900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test0003@test.com",
      "offset": 20
    }
  ],
  "location": "stepDefinitions.user_enter_username_username(String)"
});
formatter.result({
  "duration": 2112926900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test0003",
      "offset": 20
    }
  ],
  "location": "stepDefinitions.user_enter_password_test(String)"
});
formatter.result({
  "duration": 2065787800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_click_continue_button()"
});
formatter.result({
  "duration": 2709355800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 2429911000,
  "status": "passed"
});
formatter.after({
  "duration": 706027500,
  "status": "passed"
});
});