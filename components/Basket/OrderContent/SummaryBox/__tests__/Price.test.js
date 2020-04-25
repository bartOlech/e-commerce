import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Price from '../Price';
import { Provider } from 'react-redux';
import store from '../../../../../redux/store';

test('should return text from props', () => {
    const { getByText } = render(<Provider store={store}><Price price='32'></Price></Provider>)
    expect(getByText('32 zł').innerHTML).toBe('32 zł')
})