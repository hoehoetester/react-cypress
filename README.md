# react-cypress

## References

- https://microcms.io/blog/cypress-react-e2e/

1. install cypress

   ```
   yarn add -D cypress
   ```

1) add a new script to `package.json`

   ```
   "cy": "./node_modules/.bin/cypress open"
   ```

1) check if cypress works

   ```
   yarn cy
   ```

   This opens a new window.

1) create a new test
   add a file named `sample.spec.js` in `cypress/integration` directory
   ```
   describe('Cypress', () => {
       it('is working', () => {
           expect(true).to.equal(true);
       });
   });
   ```
1) restart cypress (`yarn cy`)
   click `sample.spec.js` (this runs the test)
   (or `yarn cypress run -spec ./cypress/integration/sample.spec.js`)
   You should be happy now 😃
