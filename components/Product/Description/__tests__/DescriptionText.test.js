import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import DescriptionText from '../DescriptionText';

afterEach(cleanup);

test('Should have text from props', () => {
    const { getByText } = render(<DescriptionText description='description'/>);
    expect(getByText('description').innerHTML).toBe('description')
})