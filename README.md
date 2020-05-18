# react-cypress

### ⚔️ Create Reac app

```
npx create-react-app react-cypress
cd react-cypress
```

### ⚔️ Install cypress

```
yarn add -D cypress@3.5.0
```

### ⚔️ Add a new script to `package.json`

```
"cy": "./node_modules/.bin/cypress open"
```

### ⚔️ Check if cypress works

```
yarn cy
```

This opens Cypress Test Runner.

![Cypress Test Runner](https://user-images.githubusercontent.com/13145406/82206048-a060e600-995b-11ea-9790-890556166c6a.png)

### ⚔️ Create a new test

Add a file named `sample.spec.js` in `cypress/integration` directory

```
describe('Cypress', () => {
    it('is working', () => {
        expect(true).to.equal(true);
    });
});
```

### ⚔️ Restart cypress (`yarn cy`)

Click `sample.spec.js` (this runs the test)
(or `yarn cypress run -spec ./cypress/integration/sample.spec.js`)
You should be happy now 😃

### ⚔️ Edit `App.js` to make it counter app

```js
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className='App' style={{ textAlign: 'center' }}>
      <span>count: </span>
      <span className='counter'>{count}</span>
      <div>
        <button className='increment' onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
```

Check if it works with `yarn start`
![counter](https://user-images.githubusercontent.com/13145406/82203207-1878dd00-9957-11ea-8d53-564def6aef51.png)

### ⚔️ Edit `cypress.json` to add url

```jon
{
    "baseUrl": "http://localhost:3000/",
    "video": false
}
```

### ⚔️ Add `counter.spec.js` in `cypress/integration` direactory

```js
// counter.spec.js

describe('Counter Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully loads3434343', () => {
    cy.get('.increment').click();
    cy.contains('.counter', 1);
    // cy.get('.counter').should('have.text', '1');
  });
});
```

### ⚔️ Run test

```
yarn cy
```

Click `counter.spec.js` in Cypress Test Runner

![Cypress Test Runner](https://user-images.githubusercontent.com/13145406/82203931-20854c80-9958-11ea-9b8d-65ccb95cf46e.png)

### 🏴‍☠️Error with Cypress 4.5...

I encountered an error with Cypress 4.5. hmmm... 🤔 🤔 🤔

![error on Cypress 4.5](https://user-images.githubusercontent.com/13145406/82203791-e1ef9200-9957-11ea-9dc9-633c2b18481f.png)

### 🔮 Ref

https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements
