import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import RefundText from '../RefundText';

afterEach(cleanup);

test('should have a static text', () => {
    const { getByText } = render(<RefundText></RefundText>)
    const textArr = [
        'Oferujemy bezproblemowe zwroty w terminie 14 dni od otrzymania towaru.',
        'Koszt zwrotu pokrywa kupujący, a produkt należy odesłać pod adres :',
        'Kartka z kalendarza',
        'Pocztowa 123 c',
        '33-122, Kraków'
    ]
    expect(getByText(textArr[0]).innerHTML).toBe(textArr[0]);
    expect(getByText(textArr[1]).innerHTML).toBe(textArr[1]);
    expect(getByText(textArr[2]).innerHTML).toBe(textArr[2]);
    expect(getByText(textArr[3]).innerHTML).toBe(textArr[3]);
    expect(getByText(textArr[4]).innerHTML).toBe(textArr[4]);
})