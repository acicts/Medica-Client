import { describe, expect, test, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/svelte';
import TableRow from '../../lib/home/TableRow.svelte';

describe('Unit:Home/TableRow', () => {
	let data = {
		id: '_1',
		name: 'Test Medicine',
		chemicalName: 'Test Medicine Chemical Name',
		mrp: 50.0,
		totalStock: 10,
		index: 0,
	};
	afterEach(() => {
		 cleanup()
	})
	test('should render parsed data', () => {
		render(TableRow, data);

		Object.keys(data).forEach((key) => {
			if (key !== 'id' && key != 'totalStock' && key !== 'index')
				expect(screen.getByText(data[key])).toBeTruthy();
		});
	});
	
	test('should show Out of stock when totalStock == 0', () => {
		data['totalStock'] = 0;
		render(TableRow, data);

		expect(screen.getByTestId('availability').innerHTML).toBe('Out of stock');
	})

	test('should show Limited Stocks when totalStock < 100', () => {
                data['totalStock'] = 80;
                render(TableRow, data);

		expect(screen.getByTestId('availability').innerHTML).toBe('Limited Stocks');
        })

	test('should show Available when totalStock >= 100', () => {
                data['totalStock'] = 110;
                render(TableRow, data);

                expect(screen.getByTestId('availability').innerHTML).toBe('Available');
        })

	test('snapshot test', () => {
		render(TableRow, data);

		expect(screen).toMatchSnapshot();
	})

});
