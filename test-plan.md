# day-counter-test-plan

Day-counter
Version: v2.0
Fecha : 02/03/2026
Tester : Nicolas Girotti


# Test plan:
The objective of this plan is to verify that:

- 1) The application correctly calculates:
    * Days remaining until a future date

- 2) Edge cases are handled correctly:
    * Same-day calculation
    * Invalid date formats (only dd-mm-yyyy)
    * Leap years

- 3) The UI correctly displays:
    * Results
    * Error messages
- 4) The application behaves consistenly across the browsers.



# Scope

- Business logic (DayCounter.js, app.js)
- Date calculations
- Input validations
- UI result rendering
- Error handling

# NOT in Scope

- User authentication
- Database integration
- Performance under heavy load
- Backend services


# Modules to be tested:
- DayCounter.js
- app.js
- Input form
- Date parsing logic
- Result rendering component

# Test strategy
- We will use multiple levels of testing:

# Unit testing
- Tool : Vitest

- Tests:
    * Difference between two dates (in days)
    * Same day result (0 days)
    * Invalid input handling


# Example test cases:
ID : TC-01
Description: Future date
Input : 12-03-2026
Expected results : 10 days

ID : TC-02
Description: Same date
Input : 02-03-2026
Expected results : 0 days


ID : TC-03
Description: Invalid date
Input : "aaa"
Expected results : Error thrown


# Integration testing
 - Verify UI calls DayCounter correctly
 - Verify correct message rendering
 - Verify error message rendering

 # Manual testing
 - Select date using calendar picker
 - Enter invalid format manually
 - Try empty input
 - Refresh page after calculation

 # Test environment
    - OS : Linux (Debian 13)
    - Browser: 
        * Chrome
        * Firefox
        * Brave
    - Vitest