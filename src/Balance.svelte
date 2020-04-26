<script>
  import { transactions } from './GlobalStore/GlobalStore.js'
  import { amountWithCommaAppend } from './utils/amountWithCommaAppend.js'
  let allTransactions = []
  const unsubscribe = transactions.subscribe(list => allTransactions = list)
  $: amounts = allTransactions.map(transaction => transaction.amount)
  $: Balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
</script>
<style>
  h4 {
      text-align: 'center';
  }
</style>
<div>
    <h4 style="text-transform: uppercase; margin: 0px;">Your Balance</h4>
    <h1 style="letter-spacing: 1px; margin: 0px; display: flex; justify-content: center"><img src={'/icons8-rupee-96.png'} style="height: 32px; width: 32px;" alt="Rupee icon"/>{amountWithCommaAppend(Balance)}</h1>
</div>