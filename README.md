# Feature Requests Top List

Demo link - https://olegpixel.github.io/featureRequest/

 Feature Request Management app using smart contracts and Near Blockchain. 
 Could be used for collecting users feedback and sponsor new product features.
 A user can send his request for a new feature or vote for an existing item.

![app screen shot](app/public/app-screenshot.png)

# Front-end
Tech stack:
- React
- Tailwind CSS
- near-api-js

Functionalities:
- Connect wallet
- Add a new requset
- Vote for an existing requset
- Check the list of recent transaction (votes)

How to run the app locally:
- you need Node.js ≥ 14 installed (https://nodejs.org)
- install the dependencies by running it locally:
    ```
    cd app
    npm i
    npm start
    ```

# Contract
Tech stack:
- AssemblyScript
- Near SDK (near-sdk-as)

Data storage:
- List of feature requests stored in a `PersistentUnorderedMap` object
- List of transactions (votes) stored in a `PersistentVector` object

Methods:
- `getItems` - get a sorted list of feature requests
- `getItem` - get a particular item from the list by item id
- `createItem` - create a new feature request
- `upVote` - vote for an existing feature with NEAR amount
- `getVotes` - get last 10 transations (votes)

How to build and deploy the contract:
```
cd contract
yarn asb
near deploy --accountId=${CONTRACT_ACCOUNT_ID} --wasmFile=build/release/${APP_NAME}.wasm
```
