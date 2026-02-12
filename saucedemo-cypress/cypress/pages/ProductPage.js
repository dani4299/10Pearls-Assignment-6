class ProductPage {
  firstProduct = '.inventory_item:first-child'
  productTitle = '.inventory_item_name'
  addToCartBtn = 'button.btn_primary'

  openFirstProduct() {
    cy.get(this.productTitle).first().click()
  }
}

export default ProductPage