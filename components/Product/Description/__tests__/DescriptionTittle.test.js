import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import DescriptionTittle from '../DescriptionTittle';

afterEach(cleanup);

test('Should have const text', () => {
    const { getByText } = render(<DescriptionTittle/>);
    expect(getByText('Opis').innerHTML).toBe('Opis')
})