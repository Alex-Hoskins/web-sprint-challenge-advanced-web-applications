import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
const moment = require("moment")

import Article from './Article';
const art={
        headline: "A tropical depression could form in the next few days, forecasters say",
        author: "Alex Harris"
    };
const art2={
        headline: "A tropical depression could form in the next few days, forecasters say",
    };

test('renders component without errors', ()=> {
    render(<Article article={art}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={art}/>);
    const headline = screen.queryByText(/A tropical depression could form in the next few days, forecasters say/i);
    const author = screen.queryByText(/Alex Harris/i);
    expect(headline).toBeTruthy();
    expect(author).toBeTruthy();

});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={art2}/>);
    const author = screen.queryByText(/Associated Press/i);
    expect(author).toBeTruthy();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const fakeDelete = jest.fn();
    render(<Article article={art} handleDelete={fakeDelete}/>);
    const button = screen.queryByTestId("deleteButton");
    expect(button).toBeTruthy();
    userEvent.click(button);
    expect(fakeDelete).toHaveBeenCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.