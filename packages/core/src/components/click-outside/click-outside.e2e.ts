/// <reference types="cypress" />

describe('plus-click-outside', () => {
  let element: Cypress.Chainable<JQuery<HTMLElement>> = null;

  beforeEach(() => {
    cy.setContent(`<plus-click-outside></plus-click-outside>`);
    element = cy.get('plus-click-outside');
  });

  it('display should be block', () => {
    element.should('have.css', 'display', 'block');
  });

  it('height should be 0px', () => {
    element.should('have.css', 'height', '0px');
  });

  it('width should not be 0px', () => {
    element.should('not.have.css', 'width', '0px');
  });

  it('width should be match with parent', () => {
    element.parent().invoke('attr', 'style', 'width: 200px');
    element.should('have.css', 'width', '200px');
  });
});
