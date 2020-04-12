import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import SummaryOrder from '../SummaryOrder';
import {Provider} from 'react-redux';
import store from '../../../../../redux/store';

afterEach(cleanup);

test('should have childs', () => {
    const { getByTestId } = render(<Provider store={store}><SummaryOrder></SummaryOrder></Provider>)
    expect(getByTestId('summary-order-container')).not.toEqual(null);
})
