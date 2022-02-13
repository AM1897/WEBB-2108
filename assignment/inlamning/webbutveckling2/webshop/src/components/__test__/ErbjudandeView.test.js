import {render} from "@testing-library/react";
import ErbjudandeView from "../../views/erbjudandeView/ErbjudandeView";

let getByTestId

beforeEach( () => {
    const component = render(<ErbjudandeView/>)
    getByTestId = component.getByTestId
})

test('erbjudandeView with correct text', () => {
    expect(getByTestId('erbjudandeh1').textContent).toBe('Erbjudande')
})