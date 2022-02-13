import {fireEvent, render} from "@testing-library/react";
import ShoppingCartItem from "../shoppingCart/ShoppingCartItem";


let getByTestId

beforeEach( () => {
    const component = render(<ShoppingCartItem/>)
    getByTestId = component.getByTestId
})

test('correct input', () => {
    const inputElement = getByTestId('inputValue')

    fireEvent.change(inputElement, {
        target: {
            value: '8'
        }
    })
    expect(inputElement.value).toBe('8')
})