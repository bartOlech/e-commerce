import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExtraMessage from '../ExtraMessage';
import {Provider} from 'react-redux';
import store from '../../../../../redux/store';

afterEach(cleanup);

const setup = () => {
    const utils = render(<Provider store={store}><ExtraMessage /></Provider>)
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
