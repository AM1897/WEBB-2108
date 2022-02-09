import {render} from '@testing-library/react'
import Header from '../header/Header'

let getByTestId

beforeEach( () => {
    const component = render(<Header/>)
    getByTestId = component.getByTestId
})

test('header renders with correct test 1', () => {
    expect(getByTestId('header').textContent).toBe('MAXDAN')
})