import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Address from '../Address';

afterEach(cleanup);

const setup = () => {
    const utils = render(<Address />)
    const streetInput = utils.getByLabelText('Ulica')
    const numberInput = utils.getByLabelText('Numer')
    return {
        streetInput,
        numberInput,
        ...utils,
    }
  }

  test('It should allow letters to be inputted (streetInput)', () => {
    const { streetInput } = setup()
    expect(streetInput.value).toBe('') // empty before
    fireEvent.change(streetInput, { target: { value: 'Good Day' } })
    expect(streetInput.value).toBe('Good Day')
  })

  test('It should allow letters to be inputted (numberInput)', () => {
    const { numberInput } = setup()
    expect(numberInput.value).toBe('') // empty before
    fireEvent.change(numberInput, { target: { value: 'Good Day' } })
    expect(numberInput.value).toBe('Good Day')
  })