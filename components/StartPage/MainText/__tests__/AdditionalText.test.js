import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdditionalText from '../AdditionalText';

afterEach(cleanup)

test('should have a text', () => {
    const { getByText } = render(<AdditionalText text='Wybierz ramkę'/>)
    expect(getByText('Wybierz ramkę').innerHTML).toBe('Wybierz ramkę')
})
