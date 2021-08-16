import React from "react";
import MutationObserver from 'mutationobserver-shim';
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";
import { render, screen } from "@testing-library/react";



// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
    const checkoutForm = screen.getByTestId(/checkout form/i)
    expect(checkoutForm).toBeInTheDocument()
    expect(checkoutForm).toHaveTextContent()
    expect(checkoutForm).toBeTruthy()
});

test("shows success message on submit with form details", () => {
    const checkoutForm = screen.getByTestId(/checkout form/i)

	const firstName = screen.getByLabelText(/First Name:/i)
	const lastName = screen.getByLabelText(/Last Name:/i)
	const addy = screen.getByLabelText(/Address:/i)
	const city = screen.getByLabelText(/City:/i)
	const state = screen.getByLabelText(/State/i)
	const zipCode = screen.getByLabelText(/Zip:/i)
	const submit = screen.queryByRole('button')

    userEvent.type(firstName, 'Justin')
    userEvent.type(lastName, 'Bain')
    userEvent.type(addy, 'Wall Street')
    userEvent.type(city, 'New York')
    userEvent.type(state, 'New York')
    userEvent.type(zipCode, '66669')
    userEvent.type(submit, 'submit')

    const successMessage = screen.getAllByTestId("successMessage")

    expect(checkoutForm).toBeInTheDocument()
	expect(successMessage).toBeInTheDocument()
	expect(successMessage).toHaveTextContent()
});
