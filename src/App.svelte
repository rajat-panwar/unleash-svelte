<script>
	import Header from './Header.svelte';
	import Balance from './Balance.svelte'
	import ProfitAndLoss from './ProfitAndLoss.svelte'
	import TransactionList from './TransactionList.svelte'
	import AddTransaction from './AddTransaction.svelte'
	
	
	export let Title;
</script>

<main>
    <Header Title={Title}/>
	<div style="margin: 30px auto; width: 350px;">
        <Balance />
        <ProfitAndLoss />
        <TransactionList />
        <AddTransaction />
    </div>
</main>


<style>
	main {
		text-align: center;
		display: contents;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	body {
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    font-family: 'Lato', sans-serif;
  }


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>