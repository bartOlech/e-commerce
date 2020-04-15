import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeliveryText from '../DeliveryText';

afterEach(cleanup);

test('should have a static text', () => {
    const { getByText } = render(<DeliveryText></DeliveryText>)
    const textArr = [
        'Korzystamy z firmy kurierskiej InPost - wygodna dostawa do paczkomatów oraz dostawa kurierska.',
        'Paczkomaty - 8.99',
        'Paczkomaty pobranie - 12.99',
        'Kurier - 12.99',
        'Kurier pobranie - 14.99'
    ]
    expect(getByText(textArr[0]).innerHTML).toBe(textArr[0]);
    expect(getByText(textArr[1]).innerHTML).toBe(textArr[1]);
    expect(getByText(textArr[2]).innerHTML).toBe(textArr[2]);
    expect(getByText(textArr[3]).innerHTML).toBe(textArr[3]);
    expect(getByText(textArr[4]).innerHTML).toBe(textArr[4]);
})