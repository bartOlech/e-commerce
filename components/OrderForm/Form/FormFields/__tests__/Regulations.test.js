import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Regulations from '../Regulations';
import {Provider} from 'react-redux';
import store from '../../../../../redux/store';

afterEach(cleanup);

  test('It should called checkbox', () => {
    const { getByLabelText } = render(<Provider store={store}><Regulations/></Provider>)
    const checkbox = getByLabelText('ZaakceptujRegulaminsklepu')

    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked(true)
  })
