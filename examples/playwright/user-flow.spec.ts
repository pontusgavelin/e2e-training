// Ignore import errors. Cy is a global variable, playwright is not.
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
    await page.click("text=Signup / Login")

    // 5. Verify 'New User Signup!' is visible
    await expect(page.locator("text=New User Signup!")).toBeVisible()

    // 6. Enter name and email address
    await page.fill("input[data-qa=signup-name]", "Test User")
    await page.fill(
      "input[data-qa=signup-email]",
      "somerandomemail11@example.com"
    )

    // 7. Click 'Signup' button
    await page.click('button:has-text("Signup")')

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    await expect(page.locator("text=Enter account information")).toBeVisible()

    // 9. Fill details: Title, Name, Email, Password, Date of birth
    // (Name and email are already filled)
    await page.check("input[value=Mr]")
    await page.fill("input[type=password]", "password123")
    await page.selectOption('select[name="days"]', "1")
    await page.selectOption('select[name="months"]', "January")
    await page.selectOption('select[name="years"]', "1993")

    // 10. Select checkbox 'Sign up for our newsletter!'
    await page.check("input[name=newsletter]")

    // 11. Select checkbox 'Receive special offers from our partners!'
    await page.check("input[name=optin]")

    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await page.fill("input[data-qa=first_name]", "Test")
    await page.fill("input[data-qa=last_name]", "User")
    await page.fill("input[data-qa=company]", "Miracle Workers Inc.")
    await page.fill("input[data-qa=address]", "1234 Some Street")
    await page.fill("input[data-qa=address2]", "1234 Some Street 2")
    await page.selectOption('select[name="country"]', "Canada")
    await page.fill("input[data-qa=state]", "British Columbia")
    await page.fill("input[data-qa=city]", "Calgary")
    await page.fill("input[data-qa=zipcode]", "12345")
    await page.fill("input[data-qa=mobile_number]", "1234567890")

    // 13. Click 'Create Account button'
    await page.click('button:has-text("Create Account")')

    // 14. Verify that 'ACCOUNT CREATED!' is visible
    await expect(page.locator("text=Account created")).toBeVisible()

    // 15. Click 'Continue' button
    await page.click('a:has-text("Continue")')

    // 16. Verify that 'Logged in as username' is visible
    await expect(page.locator("text=Logged in as Test User")).toBeVisible()

    // 17. Click 'Delete Account' button
    await page.click('a:has-text("Delete Account")')

    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.locator("text=Account Deleted")).toBeVisible()
    await page.click('a:has-text("Continue")')
  })
})
