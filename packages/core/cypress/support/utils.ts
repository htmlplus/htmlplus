// TODO: problem with 'disabled' key
// cy.get(selector).should('have.attr', key, `${init}`);

// TODO
// it(`"${key}" attribute should be updates "${key}" property`, () => {
//   cy.get(selector).invoke('attr', key, true).invoke('prop', key).should('eq', true);
// });
// if (!reflect) {
//   it(`"${key}" property should not be reflected on the attribute`, () => {
//     cy.get('@element').invoke('prop', key, true);
//     cy.get('@element').should('not.have.attr', key);
//   });
// }

export const property = (selector, key, type, init, reflect) => {
  const hasReflection = reflect && typeof init != 'undefined';

  const values = [
    /**
     * For example
     * [main, property, attribute]
     */
  ];

  switch (type) {
    case Boolean:
      values.push([true, true, null]);
      // values.push([false, false, false]);
      break;
    // TODO
    // case Number:
    //   values.push([1, 1, '1']);
    //   break;
    // case String:
    //   values.push(['', '', '']);
    //   values.push(['Test', 'Test', 'Test']);
    //   break;
  }

  it(`"${key}" property should be "${init}" in the initialize`, () => {
    cy.get(selector).invoke('prop', key).should('eq', init);
  });

  if (hasReflection) {
    it(`"${key}" attribute should exist in the initialize`, () => {
      cy.get(selector).should('have.attr', key);
    });
    it(`"${key}" attribute should be equal "${init}" in the initialize`, () => {
      cy.get(selector)
        .then(($elements) => $elements[0].getAttribute(key))
        .should('eq', `${init}`);
    });
  }

  if (!hasReflection) {
    it(`"${key}" attribute should not exist in the initialize`, () => {
      cy.get(selector).should('not.have.attr', key);
    });
  }

  if (reflect) {
    it(`"${key}" property should be reflected on the attribute`, () => {
      cy.wrap(values).each(([main, property, attribute]) => {
        cy.get(selector)
          .invoke('prop', key, main)
          .then(($elements) => $elements[0].getAttribute(key))
          .should('eq', attribute);
      });
    });
  }
};
