<script>
  import Transaction from './Transaction.svelte'
  import { transactions } from './GlobalStore/GlobalStore.js'
  let allTransactions = []
  const unsubscribe = transactions.subscribe(list => {allTransactions = list})
</script>
<div>
    <h3 style="border-bottom: 1px solid #bbb; padding-bottom: 10px; margin: 40px 0 10px;">
      History
    </h3>
    <ul style="list-style-type: none; padding: 0; margin-bottom: 40px; height: 150px; z-index: 2; overflow-y: auto">
        {#if allTransactions.length === 0}<div>No Transactions Yet</div>{/if}
        {#each allTransactions as transaction}<Transaction  transaction={transaction} />{/each}
    </ul>
</div>