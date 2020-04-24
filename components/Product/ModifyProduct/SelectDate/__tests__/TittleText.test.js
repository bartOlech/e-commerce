import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TittleText from '../TittleText';

test('should have text from props', () => {
    const { getByText } = render(<TittleText text='text'></TittleText>)
    expect(getByText('text').innerHTML).toBe('text');
})