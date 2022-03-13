import CreateUser from "../CreateUser";
import { render } from '@testing-library/react'

let getByTestId

beforeEach(() => {
    const component = render(<CreateUser/>)
    getByTestId = component.getByTestId
})

test('Check that h1 contains the words CreateUser', () => {
    expect(getByTestId('header').textContent).toBe('CreateUser')
})
