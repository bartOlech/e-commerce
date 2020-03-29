import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AttributeSize from '../AttributeSize';

test('Should have text from props', () => {
    const { getByText } = render(<AttributeSize size='12 x 31 cm'/>)
    expect(getByText('12 x 31 cm').innerHTML).toBe('12 x 31 cm')
})