import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tittle from '../Tittle';

afterEach(cleanup);

test('should have a static text', () => {
    const { getByText } = render(<Tittle></Tittle>)
    expect(getByText('Podsumowanie')).toHaveTextContent('Podsumowanie');
})
