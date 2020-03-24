import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Products from '../Products';

afterEach(cleanup)

test('should change the style of fonts color if button has been clicked', () => {
    const { getByText } = render(<Products/>)

    expect(getByText('Wszystkie')).toHaveStyle('color: #fff')
    expect(getByText('Mała')).toHaveStyle('color: #808080')
    fireEvent.click(getByText('Mała'))
    expect(getByText('Wszystkie')).toHaveStyle('color: #808080')
    expect(getByText('Mała')).toHaveStyle('color: #fff')
})

test('should change the style of background color if button has been clicked', () => {
    const { getByText } = render(<Products/>)

    expect(getByText('Wszystkie')).toHaveStyle('background-color: #FB5C43')
    expect(getByText('Mała')).toHaveStyle('background-color: #F7F7F7')
    fireEvent.click(getByText('Mała'))
    expect(getByText('Wszystkie')).toHaveStyle('background-color: #F7F7F7')
    expect(getByText('Mała')).toHaveStyle('background-color: #FB5C43')
})

