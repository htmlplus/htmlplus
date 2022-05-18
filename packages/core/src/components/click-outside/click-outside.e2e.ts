/// <reference types="cypress" />

describe('plus-click-outside', () => {
  const trigger = (target: 'parent' | 'self' | 'child') => {
    return cy.get('@element').then(($element) => {
      const handler = cy.spy();
      $element.on('plusClickOutside', handler);
      const element = (() => {
        switch (target) {
          case 'parent':
            return cy.get('@element').parent();
          case 'self':
            return cy.get('@element');
          case 'child':
            return cy.get('@element').children().first();
        }
      })();
      element
        .click()
        .click()
        .then(() => handler);
    });
  };

  beforeEach(() => {
    cy.setContent(`<plus-click-outside></plus-click-outside>&nbsp;`);
  });

  // it('display should be block', () => {
  //   cy.get('@element').should('have.css', 'display', 'block');
  // });

  // it('height should be 0px', () => {
  //   cy.get('@element').should('have.css', 'height', '0px');
  // });

  // it('width should not be 0px', () => {
  //   cy.get('@element').should('not.have.css', 'width', '0px');
  // });

  // it('width should be equal with own parent', () => {
  //   const width = Math.floor(Math.random() * 1000) + 'px';
  //   cy.get('@element').parent().invoke('attr', 'style', `width: ${width}`);
  //   cy.get('@element').should('have.css', 'width', width);
  // });

  // it('default slot should be exists', () => {
  //   cy.get('@element').invoke('html', 'content').should('not.have.css', 'height', '0px');
  // });

  // it('`disabled` attribute should not exists in the initialize', () => {
  //   cy.get('@element').should('not.have.attr', 'disabled');
  // });

  // it('event should be trigger when clicked on outside it', () => {
  //   trigger('parent').then((handler) => expect(handler).to.be.calledTwice);
  // });

  // it('event should not be trigger when clicked on it', () => {
  //   cy.get('@element').invoke('html', 'content');
  //   trigger('self').then((handler) => expect(handler).to.not.be.called);
  // });

  // it('event should not be trigger when clicked on inside it', () => {
  //   cy.get('@element').invoke('html', '<div>content</div>');
  //   trigger('child').then((handler) => expect(handler).to.not.be.called);
  // });

  // it('event should not be trigger when it has `disabled` attribute in the initialize', () => {
  //   cy.setContent(`<plus-click-outside disabled></plus-click-outside>&nbsp;`);
  //   trigger('parent').then((handler) => expect(handler).to.not.be.called);
  // });

  // TODO
  // '`disabled` property should be inactive in the initial state'
  // '`disabled` property should be reflected on the attribute'
});
