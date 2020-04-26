<script>
  import { transactions } from './GlobalStore/GlobalStore.js'
  let text = '';
  let amount = '';
  const texfield = "border: 1px solid #dedede;border-radius: 2px;display: block;font-size: 16px;padding: 10px;width: 100%;"
  const btn = "cursor: pointer;background-color: #000000;box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);color: #fff;border: 0;display: block;fontSize: 16px;margin: 10px 0 30px;padding: 10px;width: 100%;"
  function addTransaction(e) {
      e.preventDefault()
      const newTransaction = {
         amount: +amount, 
        text,
        id: Math.floor(Math.random()*100000)
      }
      transactions.update(list =>[newTransaction, ...list])
      amount = ''
      text = ''
  }
</script>
<div>
    <h3 style="border-bottom: 1px solid #bbb; padding-bottom: 10px; margin: 40px 0 10px;">Add new transaction</h3>
    <form on:submit={addTransaction}>
        <div>
            <label style="display: inline-block; margin: 10px 0px;" htmlFor="text">Description</label>
            <input type="text" style={texfield} value={text} on:change={(e) => text=(e.target.value)} placeholder="Enter description..." />
        </div>
        <div className="form-control">
            <label style="display: inline-block; margin: 10px 0px;" htmlFor="amount">Amount <br />
                (negative - expense, positive - income)</label>
            <input type="number" style={texfield} value={amount} on:change={(e) => amount=(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button style={btn}>Add transaction</button>
    </form>
</div>