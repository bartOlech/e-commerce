import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import City from '../City';

afterEach(cleanup);

const setup = () => {
    const utils = render(<City />)
    const codeInput = utils.getByLabelText('Kod pocztowy')
    const cityInput = utils.getByLabelText('Miasto')
    return {
        codeInput,
        cityInput,
        ...utils,
    }
  }

  // test('It should allow letters to be inputted (codeInput)', () => {
  //   const { codeInput } = setup()
  //   expect(codeInput.value).toBe('') // empty before
  //   fireEvent.change(codeInput, { target: { value: '22-463' } })
  //   expect(codeInput.value).toBe('22-463')
  // })

  test('It should allow letters to be inputted (cityInput)', () => {
    const { cityInput } = setup()
    expect(cityInput.value).toBe('') // empty before
    fireEvent.change(cityInput, { target: { value: 'Good Day' } })
    expect(cityInput.value).toBe('Good Day')
  })