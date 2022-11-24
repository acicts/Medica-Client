import { describe, expect, test, afterEach, beforeAll, afterAll } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/svelte';
import Home from '../routes/Home.svelte';
import server from './utils/server';
import { districts } from '../data';
import fetch from 'node-fetch';

// @ts-ignore
global.fetch = fetch;

beforeAll(() => {
	server.listen({ onUnhandledRequest: 'error' });
});

afterAll(() => {
	server.close();
});

describe('Intergration:Home', () => {
	afterEach(() => {
		cleanup();
	});

	const tablerowFields = [
		'tablerow-name',
		'tablerow-chemicalname',
		'tablerow-mrp',
		'tablerow-availability',
	];

	test('should show nothing when nothing searched or selected', () => {
		render(Home);
		const inputElements = screen.getAllByTestId('search-input');
		const selectElement = screen.getByTestId('search-select');

		inputElements.forEach((inputElement: HTMLInputElement) => {
			fireEvent.input(inputElement, {
				target: {
					value: '',
				},
			});
		});

		fireEvent.select(selectElement, {
			target: {
				value: districts[0],
			},
		});
		tablerowFields.forEach((field) => {
			const DOMElements = screen.queryAllByTestId(field);
			expect(DOMElements.length).toBe(0);
		});
	});
});
