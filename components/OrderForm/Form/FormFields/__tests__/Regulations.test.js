import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Regulations from '../Regulations';

afterEach(cleanup);

  test('It should called checkbox', () => {
    const { getByLabelText } = render(<Regulations/>)
    const checkbox = getByLabelText('ZaakceptujRegulaminsklepu')

    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked(true)
  })
