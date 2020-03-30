import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Description from '../Description';

afterEach(cleanup)

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
    const { queryByTestId } = render(<Description/>)
    expect(queryByTestId('description')).not.toEqual(null);
})