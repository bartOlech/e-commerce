import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasketIco from '../BasketIco';
import Basket from '../../Basket/Basket';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

afterEach(cleanup);

const setup = () => {
    const utilsBasketButton = render(<Provider store={store}><BasketIco /></Provider>)
    const utilsBasket = render(<Provider store={store}><Basket /></Provider>)

    const basketButton = utilsBasketButton.getByTestId('basket-ico')
    const basket = utilsBasket.getByTestId('basket-container')
    return {
        basketButton,
        basket,
        ...utilsBasketButton,
        ...utilsBasket,
    }
  }

test('should show and hide basket container', () => {
    const { basketButton, basket } = setup()

    expect(basket).toHaveStyle('display: none');
    fireEvent.click(basketButton);
    expect(basket).toHaveStyle('display: inline');
})