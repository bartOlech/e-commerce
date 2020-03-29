import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BackButton from '../BackButton';

test('The button should be rotated 180deg', () => {
    const { getByTestId } = render(<BackButton></BackButton>)
    expect(getByTestId('back-button')).toHaveStyle('transform: rotate(180deg)');
})