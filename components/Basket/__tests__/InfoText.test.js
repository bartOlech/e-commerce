import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InfoText from '../InfoText';

afterAll(cleanup);

const basket_1 = [
    {
        price: 11
    },
    {
        price: 24
    },
    {
        price: 24
    }
]

const basket_2 = [
    {
        price: 11
    },
]

test('should return appropriate text depending on the price', () => {
    const { getByTestId } = render(<InfoText products={basket_1}></InfoText>)
    expect(getByTestId('free-delivery').innerHTML).toBe('Na twoje zamówienie obowiązuje darmowa dostawa')
})

test('should return text WITHOUT free delivery', () => {
    const { getByTestId } = render(<InfoText products={basket_2}></InfoText>)
    const snipText = expect(getByTestId('not-free-delivery').innerHTML);

    snipText.toBe('39')
})