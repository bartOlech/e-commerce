import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AttributeImage from '../AttributeImage';


jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "",
            pathname: "",
            query: {id: 1},
            asPath: "",
        };
    },
}));


test('should have a child', () => {
    const { queryByTestId } = render(<AttributeImage images={['Image1', 'Image2', 'Image3']}/>)
    expect(queryByTestId('small-images-box')).not.toEqual(null);
})