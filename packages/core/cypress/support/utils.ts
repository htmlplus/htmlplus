export const checkProperty = (selector, key, type, init, reflect) => {
  it(`"${key}" property should be "${init}" in the initialize`, () => {
    cy.get(selector).invoke('prop', key).should('eq', init);
  });
  it(`"${key}" attribute should not exists in the initialize`, () => {
    cy.get(selector).should('not.have.attr', key);
  });
  it(`"${key}" attribute should be updates "${key}" property`, () => {
    cy.get(selector).invoke('attr', key, true).invoke('prop', key).should('eq', true);
  });
  if (reflect) {
    it(`"${key}" property should be reflected on the attribute`, () => {
      cy.get('@element').invoke('prop', key, true);
      cy.get('@element').should('have.attr', key);
    });
  } else {
    it(`"${key}" property should not be reflected on the attribute`, () => {
      cy.get('@element').invoke('prop', key, true);
      cy.get('@element').should('not.have.attr', key);
    });
  }
};
