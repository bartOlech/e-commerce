import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Name from '../Name';

afterEach(cleanup)

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "",
            pathname: "",
            query: {
                day: '4',
                month: '3',
                year: '2020',
                name: 'Ramka drewniana',
                size: '12 x 13 cm'
            },
            asPath: "",
        };
    },
}));

test('Should have text from query', () => {
    const { getByTestId } = render(<Name></Name>)
    expect(getByTestId('text-name').innerHTML).toBe('Ramka drewniana 12 x 13 cm (04.03.2020)');
})