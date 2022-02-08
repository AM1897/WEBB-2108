import {fireEvent, render} from '@testing-library/react';
import Footer from "../footer/Footer";

let getByTestId

beforeEach(() => {
    const component = render(<Footer/>)
    getByTestId = component.getByTestId
})

test('header renders with correct text 4', () => {
    expect(getByTestId('footertext').textContent).toBe('Copyright © 2022 by Michaela Andreasson')
})