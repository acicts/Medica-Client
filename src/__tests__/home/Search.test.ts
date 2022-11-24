import { describe, expect, test, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/svelte';
import SearchBar from '../../lib/home/Search.svelte';
import { districts } from '../../data';
describe('Unit:Home/Search', () => {
	let searchValue = '';
	let selectValue = '';
	afterEach(() => {
		cleanup();
	});

	test('should change value according to change event', async () => {
		render(SearchBar, { searchValue, selectValue });

		const inputText = 'Test search';
		const inputElements = screen.getAllByTestId('search-input');

		inputElements.forEach(async (inputElement) => {
			await fireEvent.input(inputElement, {
				target: {
					value: inputText,
				},
			});

			expect((inputElement as HTMLInputElement).value).toBe(inputText);
		});
	});

	test('should change select value upon change', () => {
		render(SearchBar, { searchValue, selectValue });

		const selectElement = screen.getByTestId('search-select');
		districts.forEach((district) => {
			fireEvent.select(selectElement, {
				target: {
					value: district,
				},
			});
			expect((selectElement as HTMLSelectElement).value).toBe(district);
		});
	});

	test('snapshot test', () => {
		render(SearchBar, { searchValue, selectValue });

		expect(screen).toMatchSnapshot();
	});
});
