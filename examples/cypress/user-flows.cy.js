describe("User flows", () => {
    /*
    These steps can be done prior to test case
        1. Launch browser
        2. Navigate to url 'http://automationexercise.com'
        3. Verify that home page is visible successfully
    */
    before(() => {
      cy.viewport(1920, 1080)
        cy.visit("/")
    })
  
    it("Can register a new user and delete it after", () => {
        // 4. Click on 'Signup / Login' button
        cy.contains("Signup / Login").click()
  
        // 5. Verify 'New User Signup!' is visible
        cy.contains("New User Signup!")
  
        // 6. Enter name and email address
        cy.get("input[data-qa=signup-name]").type("Test User")
        cy.get("input[data-qa=signup-email]").type("somerandomemail11@example.com")
  
        // 7. Click 'Signup' button
        cy.contains("button", "Signup").click()
        
        // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
        cy.contains(/Enter account information/i)
        
        // 9. Fill details: Title, Name, Email, Password, Date of birth
        // (Name and email are already filled)
        cy.get('input[value=Mr]').check()
        cy.get('input[type=password]').type("password123")
        
        cy.get('select[name="days"]').select('1')
        cy.get('select[name="months"]').select('January')
        cy.get('select[name="years"]').select('1993')
        
        // 10. Select checkbox 'Sign up for our newsletter!'
        cy.get('input[name=newsletter]').check()
  
        // 11. Select checkbox 'Receive special offers from our partners!'
        cy.get('input[name=optin]').check()
        
        // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        cy.get('input[data-qa=first_name]').type("Test")
        cy.get('input[data-qa=last_name]').type("User")
        
        cy.get('input[data-qa=company]').type("Miracle Workers Inc.")
  
        cy.get('input[data-qa=address]').type("1234 Some Street")
        cy.get('input[data-qa=address2]').type("1234 Some Street 2")
        
        cy.get('select[name="country"]').select('Canada')
        cy.get('input[data-qa=state]').type("British Columbia")
        cy.get('input[data-qa=city]').type("Calgary")
        cy.get('input[data-qa=zipcode]').type("12345")
  
        cy.get('input[data-qa=mobile_number]').type("1234567890")
  
        // 13. Click 'Create Account button'
        cy.contains("button", "Create Account").click()
        
        // 14. Verify that 'ACCOUNT CREATED!' is visible
        cy.contains(/Account created/i)
  
        // 15. Click 'Continue' button
        cy.contains("a", "Continue").click()
        
        // 16. Verify that 'Logged in as username' is visible
        cy.contains(/Logged in as Test User/i)
        
        // 17. Click 'Delete Account' button
        cy.contains("a", "Delete Account").click()
        
        // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        cy.contains(/Account Deleted/i)
        cy.contains("a", "Continue").click()
      })
      
})