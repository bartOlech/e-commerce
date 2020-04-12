import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TotalCost from '../TotalCost';
import {Provider} from 'react-redux';
import store from '../../../../../redux/store';
import Delivery from '../../FormFields/Delivery';

afterEach(cleanup);

const staticDeliveryData = {
  13: 'Paczkomat inPost - 14zł',
  18: 'Paczkomat inPost, Kurier - 18zł',
  15: 'Kurier DPD - 15zł',
  20: 'Kurier DPD pobranie - 20zł',
}

const setup = () => {
    const utils = render(<Provider store={store}><Delivery deliveryData={staticDeliveryData}/></Provider>)
    const deliveryInput = utils.getByLabelText('Metoda dostawy')
    return {
        deliveryInput,
        ...utils,
    }
  }

test('it should return total cost of order', () => {
    const { deliveryInput } = setup()
    const { getByTestId } = render(<Provider store={store}><TotalCost orderPrice='20'></TotalCost></Provider>)
    fireEvent.change(deliveryInput, { target: { value: 'Kurier DPD - 15zł' } })
    expect(getByTestId('total-price').innerHTML).toBe('35 zł') //empty from the begining
})
