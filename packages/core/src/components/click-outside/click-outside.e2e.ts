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

  const checkProperty = (selector, key, type, init, reflect) => {
    it(`"${key}" attribute should not exists in the initialize`, () => {
      cy.get(selector).should('not.have.attr', key);
    });
    it(`"${key}" property should be "${init}" in the initialize`, () => {
      cy.get(selector).invoke('prop', key).should('eq', init);
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

  // it('width should be equal to the own parent', () => {
  //   const width = Math.floor(Math.random() * 1000) + 'px';
  //   cy.get('@element').parent().invoke('attr', 'style', `width: ${width}`);
  //   cy.get('@element').should('have.css', 'width', width);
  // });

  // it('default slot should be works', () => {
  //   cy.get('@element').invoke('html', 'content').should('not.have.css', 'height', '0px');
  // });

  // checkProperty('@element', 'disabled', Boolean, undefined, true);

  // checkProperty('@element', 'once', Boolean, undefined, false);

  // it('event should be triggered when clicked on outside it', () => {
  //   trigger('parent').then((handler) => expect(handler).to.be.calledTwice);
  // });

  // it('event should not be triggered when clicked on it', () => {
  //   cy.get('@element').invoke('html', 'content');
  //   trigger('self').then((handler) => expect(handler).to.not.be.called);
  // });

  // it('event should not be triggered when clicked on inside it', () => {
  //   cy.get('@element').invoke('html', '<div>content</div>');
  //   trigger('child').then((handler) => expect(handler).to.not.be.called);
  // });

  // it('event should not be triggered when it has `disabled` attribute in the initialize', () => {
  //   cy.setContent(`<plus-click-outside disabled></plus-click-outside>&nbsp;`);
  //   trigger('parent').then((handler) => expect(handler).to.not.be.called);
  // });

  // it('event should not be triggered when `disabled` property equals `true`', () => {
  //   cy.get('@element').invoke('prop', 'disabled', true);
  //   trigger('parent').then((handler) => expect(handler).to.not.be.called);
  // });
});
