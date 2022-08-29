<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
	import { medicine as medStore } from './data';
	import { onMount } from 'svelte';

	onMount(() => {
		const fetchData = async () => {
			const pharmacyURL =
				'https://raw.githubusercontent.com/madurapa/pharmacy-list/master/data.json';
			const medicineURL =
				'https://raw.githubusercontent.com/dariusk/corpora/master/data/medicine/drugs.json';
			const pharmacyResponse = await fetch(pharmacyURL);
			const medicineResponse = await fetch(medicineURL);
			let pharmacies = await pharmacyResponse.json();
			let medicine = await medicineResponse.json();

			medicine = medicine.drugs;
			let newMed = medicine.map((med, index) => {
				let data = {
					name: med,
					id: index,
					sciName: med,
					stocks: [],
				};
				let totalStock = 0;
				let totalMrp = 0;
				for (let i = 0; i < 10; i++) {
					const index = Math.round(Math.random() * 1000) % 1863;
					const stock = Math.round(Math.random() * 100);
					const mrp = Math.round(Math.random() * 100);
					data['stocks'].push({
						...pharmacies[index],
						stock: Math.round(Math.random() * 100),
						price: mrp,
					});
					totalStock += stock;
					totalMrp += mrp;
				}
				data['totalStock'] = totalStock;
				data['mrp'] = Math.round(totalMrp / 10) + '.00';
				return data;
			});
			console.log(newMed);
			medStore.set(newMed);
		};
		fetchData();
	});
</script>

<Router {routes} />
