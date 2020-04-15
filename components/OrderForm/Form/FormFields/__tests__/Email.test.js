import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Email from '../Email';
import {Provider} from 'react-redux';
import store from '../../../../../redux/store';
import PayButton from '../../PayButton';
import OrderForm from '../../../OrderForm'

afterEach(cleanup);

jest.mock("next/router", () => ({
  useRouter() {
      return {
          route: "",
          pathname: "",
          query: {
              day: '4',
              month: '3',
              year: '2020',
              name: 'Ramka drewniana',
              size: '12 x 13 cm'
          },
          asPath: "",
      };
  },
}));

const setup = () => {
    const utils = render(<Provider store={store}><Email /></Provider>)
    const emailInput = utils.getByLabelText('Email')
    return {
        emailInput,
        ...utils,
    }
  }

const setupPayButton = () => {
  const utils = render(<Provider store={store}><OrderForm><PayButton></PayButton></OrderForm></Provider>)
  const payButton = utils.getByText('Przejdź do płatności')
  return {
      payButton,
      ...utils,
  }
}

  test('It should allow letters to be inputted', () => {
    const { emailInput } = setup()
    expect(emailInput.value).toBe('') // empty before
    fireEvent.change(emailInput, { target: { value: 'Good Day' } })
    expect(emailInput.value).toBe('Good Day')
  })

  test('should have red border if it is not validate', () => {
    const { emailInput } = setup()
    const { payButton } = setupPayButton()
    fireEvent.click(payButton);
    expect(emailInput).toHaveStyle('border: 1px solid #f5587b')
})
