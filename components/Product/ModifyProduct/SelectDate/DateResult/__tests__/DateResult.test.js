import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateResult from '../DateResult';

afterEach(cleanup);

const setup = () => {
    const utils = render(<DateResult day='1' month='2' year='2020'></DateResult>);
    const textBox = utils.getAllByTestId('text-box');
    const date = utils.getAllByTestId('date');
    return {
        date,
        textBox,
        ...utils,
    }
}

test('should have a child', () => {
    const { textBox } = setup();
    expect(textBox).not.toEqual(null);
})

test('should give 0 number before day and month', () => {
    const { getByTestId } = render(<DateResult day='1' month='2' year='2020'></DateResult>);
    expect(getByTestId('date').innerHTML).toBe('01.02.2020');
})