import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AttributePrice from '../AttributePrice';

afterEach(cleanup)

test('Should have text from props', () => {
    const { getByText } = render(<AttributePrice price='12'/>)
    expect(getByText('12 zł').innerHTML).toBe('12 zł')
})