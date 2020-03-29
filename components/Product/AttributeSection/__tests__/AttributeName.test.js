import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AttributeName from '../AttributeName';

test('Should have text from props', () => {
    const { getByText } = render(<AttributeName name='name'/>)
    expect(getByText('name').innerHTML).toBe('name')
})