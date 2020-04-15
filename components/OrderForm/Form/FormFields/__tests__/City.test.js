import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import City from '../City';
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
    const utils = render(<Provider store={store}><City /></Provider>)
    const codeInput = utils.getByLabelText('Kod pocztowy')
    const cityInput = utils.getByLabelText('Miasto')
    return {
        codeInput,
        cityInput,
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

  test('should have red border if it is not validate', () => {
    const { cityInput } = setup()
    const { payButton } = setupPayButton()
    fireEvent.click(payButton);
    expect(cityInput).toHaveStyle('border: 1px solid #f5587b')
})