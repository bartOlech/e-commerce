import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductImage from '../ProductImage';

afterEach(cleanup)

test('should provide an image to style', () => {
    const { getByTestId } = render(<ProductImage image='imageURL'/>)

    expect(getByTestId('productImage')).toHaveStyle('background-image: url(imageURL)')
})

