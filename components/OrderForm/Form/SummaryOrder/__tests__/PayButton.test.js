import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import PayButton from '../../PayButton';
import { Provider } from 'react-redux';
import store from '../../../../../redux/store';

afterEach(cleanup)

test('Should have static text', () => {
    const { getByText } = render(<Provider store={store}><PayButton/></Provider>)
    expect(getByText('Przejdź do płatności').innerHTML).toBe('Przejdź do płatności');
})