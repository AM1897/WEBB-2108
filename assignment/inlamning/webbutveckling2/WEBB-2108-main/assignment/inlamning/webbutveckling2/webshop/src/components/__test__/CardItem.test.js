import {render} from '@testing-library/react'
import CardItem from '../card/CardItem'

let getByTestId

beforeEach( () => {
    const component = render(<CardItem/>)
    getByTestId = component.getByTestId
})

test('header renders with correct test 2', () => {
    expect(getByTestId('cartItem').textContent).toBe('props.name')
})