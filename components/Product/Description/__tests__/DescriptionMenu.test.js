import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DescriptionMenu from '../DescriptionMenu';
import Description from '../Description';

afterEach(cleanup);

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "",
            pathname: "",
            query: {id: 1},
            asPath: "",
        };
    },
}));

test('First child should have clicked styles', () => {
    const { getByText } = render(<DescriptionMenu/>);
    expect(getByText('Opis')).toHaveStyle('color: #3B475A')
    expect(getByText('Opis')).toHaveStyle('border-bottom: 1px solid #6F7982')
})

test('Other childs should have static styles', () => {
    const { getByText } = render(<DescriptionMenu/>);
    expect(getByText('Dostawa')).toHaveStyle('color: #9F9F9F')
    expect(getByText('Dostawa')).toHaveStyle('border-bottom: 1px solid #E4E7EB')

    expect(getByText('Zwrot')).toHaveStyle('color: #9F9F9F')
    expect(getByText('Zwrot')).toHaveStyle('border-bottom: 1px solid #E4E7EB')
})

test('Should change styles after clicked', () => {
    const { getByText } = render(<Description><DescriptionMenu/></Description>);
    expect(getByText('Dostawa')).toHaveStyle('color: #9F9F9F') // before click
    expect(getByText('Dostawa')).toHaveStyle('border-bottom: 1px solid #E4E7EB') // before click

    fireEvent.click(getByText('Dostawa'));

    expect(getByText('Dostawa')).toHaveStyle('color: #3B475A')
    expect(getByText('Dostawa')).toHaveStyle('border-bottom: 1px solid #6F7982') // before click

})