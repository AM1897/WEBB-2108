import {render} from '@testing-library/react';
import CardItem from "../card/CardItem";
import ShoppingCartList from "../shoppingCart/ShoppingCartList";

let getByTestId

beforeEach(() => {
    const component = render(<ShoppingCartList/>)
    getByTestId = component.getByTestId
})

test('correct name', () => {
    expect(getByTestId('pay').textContent).toBe('Betala')
})

test('correct name', () => {
    expect(getByTestId('products').textContent).toBe('Dina produkter')
})
