import GetAllUsers from "../GetAllUsers";
import {render} from "@testing-library/react";

let getByTestId

beforeEach(() => {
    const component = render(<GetAllUsers/>)
    getByTestId = component.getByTestId
})

test('Check that h1 contains the word GetAllUsers', () => {
    expect(getByTestId('header').textContent).toBe('GetAllUsers')
})