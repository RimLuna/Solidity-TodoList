# Deploy a Todolist Smart Contract

## setup
Solidity Compiler: ^0.8.9
Truffle v5.4.18 (core: 5.4.18)
```
$ truffle init
$ truffle migrate --reset
...
Replacing 'Todolist'
   --------------------
   > transaction hash:    0x59ab7898fe04135c6287ce0970b5c1567a9f88b36b9c91c654057075d530f126
   > Blocks: 0            Seconds: 0
   > contract address:    0x71e2855924502A9B9394400D695eED31cFEC2EC4
   > block number:        7
   > block timestamp:     1643605661
   > account:             0xa93dCF1c10766ad045B1accbb6ac4E4dEB888dD8
   > balance:             99.96262666
   > gas used:            629222 (0x999e6)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01258444 ETH
...
```

# interacting with the smart contract
```
$ truffle console
truffle(development)> todolist = await Todolist.deployed()
truffle(development)> todolist.address
'0x71e2855924502A9B9394400D695eED31cFEC2EC4'
truffle(development)> await todolist.createTask("Task #2")
{
  tx: '0x0c8b839f605ed7f925564c38fbeb5af000bf652a127b50f547793adf1e4b4959'
...
truffle(development)> task = await todolist.tasks(1)
```