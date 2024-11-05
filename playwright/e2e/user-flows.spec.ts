import { test, expect } from "@playwright/test"

test.describe("User flows", () => {
  // These steps can be done prior to the test case
  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  // 3. Verify that home page is visible successfully
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto("/")
    // Consent to cookies
    await page.click('button:has-text("Consent")')
  })

  test("Can register a new user and delete it after", async ({ page }) => {
    // 4. Click on 'Signup / Login' button
    // 5. Verify 'New User Signup!' is visible
    // 6. Enter name and email address
    // 7. Click 'Signup' button
    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    // 9. Fill details: Title, Name, Email, Password, Date of birth
    // (Name and email are already filled)
    // 10. Select checkbox 'Sign up for our newsletter!'
    // 11. Select checkbox 'Receive special offers from our partners!'
    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    // 13. Click 'Create Account button'
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    // 15. Click 'Continue' button
    // 16. Verify that 'Logged in as username' is visible
    // 17. Click 'Delete Account' button
    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  })
})
