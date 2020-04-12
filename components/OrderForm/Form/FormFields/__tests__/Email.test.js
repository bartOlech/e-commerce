import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Email from '../Email';

afterEach(cleanup);

const setup = () => {
    const utils = render(<Email />)
    const emailInput = utils.getByLabelText('Email')
    return {
        emailInput,
        ...utils,
    }
  }

  test('It should allow letters to be inputted', () => {
    const { emailInput } = setup()
    expect(emailInput.value).toBe('') // empty before
    fireEvent.change(emailInput, { target: { value: 'Good Day' } })
    expect(emailInput.value).toBe('Good Day')
  })
