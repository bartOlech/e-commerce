import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Delivery from '../Delivery';
import {Provider} from 'react-redux';
import store from '../../../../../redux/store';

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

  test('It should change the selected value', () => {
    const { deliveryInput } = setup()
    expect(deliveryInput.value).toBe('Paczkomat inPost - 14zł') 
    fireEvent.change(deliveryInput, { target: { value: 'Kurier DPD - 15zł' } })
    expect(deliveryInput.value).toBe('Kurier DPD - 15zł')
  })
