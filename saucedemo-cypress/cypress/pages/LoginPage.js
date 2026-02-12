class LoginPage {
  username = '#user-name'
  password = '#password'
  loginBtn = '#login-button'
  errorMsg = '[data-test="error"]'

  visit() {
    cy.visit('/')
  }

  enterUsername(username) {
    cy.get(this.username).type(username)
  }

  enterPassword(password) {
    cy.get(this.password).type(password)
  }

  clickLogin() {
    cy.get(this.loginBtn).click()
  }
}

export default LoginPage