import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import PayButton from '../../PayButton';

afterEach(cleanup)

test('Should have static text', () => {
    const { getByText } = render(<PayButton></PayButton>)
    expect(getByText('Przejdź do płatności').innerHTML).toBe('Przejdź do płatności');
})