/// <reference types="cypress" />

describe('plus-click-outside', () => {
  beforeEach(() => {
    cy.setContent(`<plus-click-outside></plus-click-outside>`);
  });

  it('display should be block', () => {
    cy.get('@element').should('have.css', 'display', 'block');
  });

  it('height should be 0px', () => {
    cy.get('@element').should('have.css', 'height', '0px');
  });

  it('width should not be 0px', () => {
    cy.get('@element').should('not.have.css', 'width', '0px');
  });

  it('width should be match with own parent', () => {
    cy.get('@parent').invoke('attr', 'style', 'width: 200px');
    cy.get('@element').should('have.css', 'width', '200px');
  });

  it('element should not have a disabled attribute', () => {
    cy.get('@element').should('not.have.attr', 'disabled');
  });

  it('disabled property should be inactive in the initial state', () => {});

  it('disabled property should be reflected on the attribute', () => {});
});
