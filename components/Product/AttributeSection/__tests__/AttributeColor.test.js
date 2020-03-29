import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AttributeColor from '../AttributeColor';

test('Should have text from props', () => {
    const { getByText } = render(<AttributeColor color='black'/>)
    expect(getByText('black').innerHTML).toBe('black')
})