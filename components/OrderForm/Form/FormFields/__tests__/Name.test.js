import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Name from '../Name';

afterEach(cleanup);

const setup = () => {
    const utils = render(<Name />)
    const nameInput = utils.getByLabelText('Imię i Nazwisko')
    return {
        nameInput,
        ...utils,
    }
  }

  test('It should allow letters to be inputted', () => {
    const { nameInput } = setup()
    expect(nameInput.value).toBe('') // empty before
    fireEvent.change(nameInput, { target: { value: 'Good Day' } })
    expect(nameInput.value).toBe('Good Day')
  })
