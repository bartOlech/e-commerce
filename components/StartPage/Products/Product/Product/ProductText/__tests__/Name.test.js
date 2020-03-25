import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Name from '../Name';

afterEach(cleanup)

test('Should provide props value', () => {
    const { getByText } = render(<Name name='name'/>)

    expect(getByText('name').innerHTML).toBe('name')
})

