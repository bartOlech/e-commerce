import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logo from '../Logo';

test('The Text element should return a text', () => {
    const { getByText } = render(<Logo></Logo>)
    expect(getByText('Kartka z kalendarza').innerHTML).toBe('Kartka z kalendarza');
})