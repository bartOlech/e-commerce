import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import SummaryOrder from '../SummaryOrder';
import {Provider} from 'react-redux';
import store from '../../../../../redux/store';

afterEach(cleanup);

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
test('should have childs', () => {
    const { getByTestId } = render(<Provider store={store}><SummaryOrder></SummaryOrder></Provider>)
    expect(getByTestId('summary-order-container')).not.toEqual(null);
})
