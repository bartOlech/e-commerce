import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrderCost from '../OrderCost';

afterEach(cleanup);

test('should have static text', () => {
    const { getByText } = render(<OrderCost ordersAmount='' orderPrice=''></OrderCost>)
    expect(getByText('Koszt zamówienia')).toHaveTextContent('Koszt zamówienia');
})

test('should have a text value from props', () => {
    const { getByText } = render(<OrderCost ordersAmount='1' orderPrice='12'></OrderCost>)
    expect(getByText('1').innerHTML).toBe('1 ');
    expect(getByText('12 zł').innerHTML).toBe('12 zł');
})
