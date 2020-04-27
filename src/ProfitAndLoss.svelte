<script>
  import { transactions } from './GlobalStore/GlobalStore.js'
  import { amountWithCommaAppend } from './utils/amountWithCommaAppend.js'
  let allTransactions = []
  const unsubscribe = transactions.subscribe(list => {allTransactions = list})
  $: amounts = allTransactions.map(transaction => transaction.amount)
  $: Profit = amounts.filter(amount => amount > 0).reduce((acc, item) => acc += item, 0).toFixed(2)
  $: Loss = amounts.filter(amount => amount < 0).reduce((acc, item) => acc += item, 0).toFixed(2)
</script>
<div style="background-color: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
            padding: 20px;
            display: flex;
            justify-content: space-between; margin: 20px 0;">
    <div style="flex: 1; text-align: center; border-right: 1px solid #dedede;">
        <h4 style="text-transform: uppercase; margin: 0px;">Income</h4>
        <p style="color: #2ecc71; display: flex; justify-content: center"><img src={'./icons8-rupee-green.png'} style="height: 16px; width: 16px;" alt="Rupee icon"/>{amountWithCommaAppend(Profit) || 0.00}</p>
    </div>
    <div style="flex: 1; textAlign: center;">
        <h4 style="text-transform: uppercase; margin: 0px;">Expense</h4>
        <p style="color: #c0392b; display: flex; justify-content: center"><img src={'./icons8-rupee-red.png'} style="height: 16px; width: 16px;" alt="Rupee icon"/>{amountWithCommaAppend(Math.abs(Loss)) || 0.00}</p>
    </div>  
</div>