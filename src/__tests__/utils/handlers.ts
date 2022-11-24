import { rest } from 'msw';
import {
	districts,
	formattedMedicines as medicines,
	formattedPharmacies as pharmacies,
} from '../..//data';

export const handlers = [
	rest.get(
		`${process.env.VITE_API_ENDPOINT}/user/medicine`,
		(req, res, ctx) => {
			const med = req.url.searchParams.get('med');
			const district = req.url.searchParams.get('district');
			return res(
				ctx.json({
					success: true,
					medicines: medicines
						.filter((i) => i.name.includes(med))
						.filter((i) =>
							district ? i.pharmacy.district === district : true
						),
				})
			);
		}
	),
];
