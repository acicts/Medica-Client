export const districts = [
	'All in Sri Lanka',
	'Ampara',
	'Anuradhapura',
	'Badulla',
	'Batticaloa',
	'Colombo',
	'Galle',
	'Gampaha',
	'Hambantota',
	'Jaffna',
	'Kalutara',
	'Kandy',
	'Kegalle',
	'Kilinochchi',
	'Kurunegala',
	'Mannar',
	'Matale',
	'Matara',
	'Moneragala',
	'Mullaitivu',
	'Nuwara Eliya',
	'Polonnaruwa',
	'Puttalam',
	'Ratnapura',
	'Trincomalee',
	'Vavuniya',
];

// For testing
const randomIntFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const pharmacies = [];

const medicines = [];

export const formattedPharmacies = pharmacies.map((pharmacy) => {
	return {
		...pharmacy,
		district:
			districts[
				((districts.length - 1) %
					randomIntFromInterval(1, districts.length - 1)) +
					1
			],
	};
});

export const formattedMedicines = medicines.map((medicine) => {
	return {
		...medicine,
		pharmacy:
			pharmacies[
				pharmacies.length % randomIntFromInterval(1, pharmacies.length)
			],
	};
});
