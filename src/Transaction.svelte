<script>
  import { transactions } from './GlobalStore/GlobalStore.js'
  import { amountWithCommaAppend } from './utils/amountWithCommaAppend.js'
  export let transaction;
  let hoverToDelete = false
  const plus = "border-right: 5px solid #2ecc71;background-color: #fff;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);color: #333;display: flex;justify-content: space-between;position: relative;padding: 10px;margin: 10px 0; width: 280px; float: right;"
  const minus = "border-right: 5px solid #c0392b;background-color: #fff;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);color: #333;display: flex;justify-content: space-between;position: relative;padding: 10px;margin: 10px 0; width: 280px; float: right;"

  function deleteTransaction(id) {
      transactions.update(list => list.filter(transaction => id !== transaction.id))
  }
  $: profit = transaction.amount > 0
</script>
<style>
    li:hover .delete-btn {
        opacity: 1;
    }
     
    .delete-btn {
        cursor: pointer;
        background-color: #e74c3c;
        border: 0;
        color: #fff;
        font-size: 20px;
        line-height: 20px;
        padding: 2px 5px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-100%, -50%);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

</style>
<div>
    <li style={profit ? plus : minus}>
        {transaction.text} <span style="display: flex; justify-content: center"><img src={profit ? '/icons8-rupee-green.png' : '/icons8-rupee-red.png'} style="height: 16px; width: 16px;" alt="Rupee icon"/>{amountWithCommaAppend(Math.abs(transaction.amount))}</span><button  on:click={() => deleteTransaction(transaction.id) } class="delete-btn">x</button>
    </li>
</div>