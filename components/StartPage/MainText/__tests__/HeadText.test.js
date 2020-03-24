import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeadText from '../HeadText';

afterEach(cleanup)

test('should have a text', () => {
    const { getByText } = render(<HeadText text='Stwórz swoją kartkę'/>)
    expect(getByText('Stwórz swoją kartkę').innerHTML).toBe('Stwórz swoją kartkę')
})


