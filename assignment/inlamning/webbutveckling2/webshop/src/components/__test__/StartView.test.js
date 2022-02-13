import {render} from "@testing-library/react";
import StartsidaView from "../../views/startsidaView/StartsidaView";

let getByTestId

beforeEach( () => {
    const component = render(<StartsidaView/>)
    getByTestId = component.getByTestId
})

test('Erbjudande with correct text', () => {
    expect(getByTestId('startstidaViewh1').textContent).toBe('Home')
})