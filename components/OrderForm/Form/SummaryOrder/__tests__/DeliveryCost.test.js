import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeliveryCost from '../DeliveryCost';
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

  test('it should have empty cost delivery for the first rendering', () => {
    const { getByTestId } = render(<Provider store={store}><DeliveryCost></DeliveryCost></Provider>)
    expect(getByTestId('price').innerHTML).toBe(' zł')
})

test('it should add a new value from store', () => {
    const { deliveryInput } = setup()
    const { getByTestId } = render(<Provider store={store}><DeliveryCost></DeliveryCost></Provider>)
    fireEvent.change(deliveryInput, { target: { value: 'Kurier DPD - 15zł' } })
    expect(getByTestId('price').innerHTML).toBe('15 zł')
})