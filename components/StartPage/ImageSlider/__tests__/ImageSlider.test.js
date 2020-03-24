import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageSlider from '../ImageSlider';

afterEach(cleanup)

test('should have empty text', () => {
    const { getByTestId } = render(<ImageSlider/>)
    expect(getByTestId('slide').innerHTML).toBe('')
})

test('should display corretly', () => {
    const { getByTestId } = render(<ImageSlider counter={0}/>)
    expect(getByTestId('slide')).toHaveStyle('display: flex')
})
