import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShipmentText from '../ShipmentText';

afterEach(cleanup);

test('Should have text from props', () => {
    const { getByText } = render(<ShipmentText shipment='shipment'/>);
    expect(getByText('shipment').innerHTML).toBe('shipment')
})