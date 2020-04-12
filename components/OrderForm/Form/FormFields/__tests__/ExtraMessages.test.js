import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExtraMessage from '../ExtraMessage';

afterEach(cleanup);

const setup = () => {
    const utils = render(<ExtraMessage />)
    const messageInput = utils.getByLabelText('Dodatkowe informacje')
    return {
        messageInput,
        ...utils,
    }
  }

  test('It should allow letters to be inputted', () => {
    const { messageInput } = setup()
    expect(messageInput.value).toBe('') // empty before
    fireEvent.change(messageInput, { target: { value: 'Good Day' } })
    expect(messageInput.value).toBe('Good Day')
  })
