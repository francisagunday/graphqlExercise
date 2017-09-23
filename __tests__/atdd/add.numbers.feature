Feature: Add Two Numbers
 
    Scenario Outline: Add Two Given Numbers
        Given User inputs an integer <digit1>
        When User adds a second integer <digit2>
        Then The sum should be equal to <sumOfNumbers>
 
        Examples:
            | digit1 | digit2 | sumOfNumbers |
            | 7      | 123    | 130          |
            | -7     | -123   | -130         |
            | 0      | 123    | 123          |
            | 0      | -123   | -123         |
