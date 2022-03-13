import GetSingelDataByName from "../GetSingelDataByName";
import {render} from "@testing-library/react";

let getByTestId

beforeEach(() => {
    const component = render(<GetSingelDataByName/>)
    getByTestId = component.getByTestId
})

test('Check that h1 contains the words Get Single Data By Name', () => {
    expect(getByTestId('header').textContent).toBe('Get Single Data By Name')
})