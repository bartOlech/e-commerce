import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Size from '../Size';

afterEach(cleanup)

test('Should provide props value', () => {
    const { getByText } = render(<Size size='size'/>)

    expect(getByText('size').innerHTML).toBe('size')
})

