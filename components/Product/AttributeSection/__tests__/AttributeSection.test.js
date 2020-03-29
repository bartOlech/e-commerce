import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AttributeSection from '../AttributeSection';


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
    const { queryByTestId } = render(<AttributeSection/>)
    expect(queryByTestId('attribute-section')).not.toEqual(null);
})