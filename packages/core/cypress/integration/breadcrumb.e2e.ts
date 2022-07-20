/// <reference types="cypress" />
import { property } from '../support/utils';

// expanderText?: string = 'Show path';
// offset?: number = 1;
// max?: number;
// separator?: string;

describe('plus-breadcrumb', () => {
  beforeEach(() => {
    cy.init(`
      <plus-breadcrumb>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </plus-breadcrumb>
    `);
  });
  it('TODO', () => {
    cy.get('@element').should('have.attr', 'aria-label', 'breadcrumb');
  });
});
