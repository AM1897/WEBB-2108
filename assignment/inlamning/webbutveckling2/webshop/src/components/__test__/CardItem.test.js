import {render} from '@testing-library/react'
import CardItem from '../card/CardItem'

let getByTestId

beforeEach( () => {
    const component = render(<CardItem/>)
    getByTestId = component.getByTestId
})

test('Button with correct text', () => {
    expect(getByTestId('cardItemButton').textContent).toBe('Köp')
})