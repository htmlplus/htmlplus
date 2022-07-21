// TODO: problem with 'disabled' key
// cy.get(selector).should('have.attr', key, `${init}`);
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

  it(`"${key}" property should be exist`, () => {
    cy.get(selector)
      .then(($elements) => key in $elements[0])
      .should('eq', true);
  });

  it(`"${key}" should has getter and setter`, () => {
    const values = [undefined, 'undefined', null, 'null', false, 'false', true, 'true', -1, '-1', 0, '0', 1, '1'];
    cy.wrap(values).each((value) => {
      cy.get(selector)
        .then(($elements) => {
          $elements[0][key] = value;
          return {
            value: $elements[0][key]
          };
        })
        .its('value')
        .should('eq', value);
    });
  });

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
      const values = (() => {
        switch (type) {
          case Boolean:
            return [
              [true, true, null],
              [false, false, false]
            ];
          // TODO
          // case Number:
          //   return [[1, 1, '1']];
          // case String:
          //   return [
          //     ['', '', ''],
          //     ['Test', 'Test', 'Test']
          //   ];
        }
      })();
      cy.wrap(values).each(([main, property, attribute]) => {
        cy.get(selector)
          .invoke('prop', key, main)
          .then(($elements) => $elements[0].getAttribute(key))
          .should('eq', attribute);
      });
    });
  }
};
