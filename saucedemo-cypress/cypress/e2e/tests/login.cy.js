import LoginPage from '../../pages/LoginPage'

const loginPage = new LoginPage()

describe('Login Tests', () => {

  beforeEach(() => {
    loginPage.visit()
  })

  it('Should show error on invalid login', () => {
    loginPage.enterUsername('wrong_user')
    loginPage.enterPassword('wrong_pass')
    loginPage.clickLogin()

    cy.get(loginPage.errorMsg)
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

})
it('Should login successfully and land on homepage', () => {
  cy.login('standard_user', 'secret_sauce')

  cy.url().should('include', '/inventory')
  cy.get('.inventory_list').should('be.visible')
})

import ProductPage from '../../pages/ProductPage'
const productPage = new ProductPage()

it('Should open product and validate details', () => {
  cy.login('standard_user', 'secret_sauce')

  productPage.openFirstProduct()

  cy.get('.inventory_details_name')
    .should('be.visible')
})