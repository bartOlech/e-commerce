import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Address from '../Address';
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
    const utils = render(<Provider store={store}><Address /></Provider>)
    const streetInput = utils.getByLabelText('Ulica')
    const numberInput = utils.getByLabelText('Numer')
    return {
        streetInput,
        numberInput,
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

  test('should have red border if it is not validate', () => {
      const { streetInput,numberInput } = setup()
      const { payButton } = setupPayButton()
      fireEvent.click(payButton);
      expect(streetInput).toHaveStyle('border: 1px solid #f5587b')
      expect(numberInput).toHaveStyle('border: 1px solid #f5587b')
  })

