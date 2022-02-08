import {fireEvent, render} from '@testing-library/react';
import ShoppingCartItem from "../shoppingCart/ShoppingCartItem";

let getByTestId

beforeEach(() => {
    const component = render(<ShoppingCartItem/>)
    getByTestId = component.getByTestId
})

test('change input', () => {
    //Arrange
    const inputElement = getByTestId('input')

    //Act
    fireEvent.change(inputElement, {
        target: {
            value: '5'
        }
    })

//Assert
    expect(inputElement.value).toBe('5')
})