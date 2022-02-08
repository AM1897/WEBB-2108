import {render} from '@testing-library/react';
import CardItem from "../card/CardItem";

let getByTestId

beforeEach(() => {
    const component = render(<CardItem/>)
    getByTestId = component.getByTestId
})

test('correct name', () => {
    expect(getByTestId('name').textContent).toBe('Kr')
})

test('correct name', () => {
    expect(getByTestId('buy').textContent).toBe('Köp')
})