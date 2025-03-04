import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import articleService from './../services/articleServices'
jest.mock('./../services/articleServices');

test("renders zero articles without errors", async () => {
    articleService.mockResolvedValue({
        data :[
           ]
        })
    render(<View/>)
});

test("renders three articles without errors", async ()=> {
    articleService.mockResolvedValue({
        data :[
            {
              id: 1,
              headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
              author:"Bobby",
              image: 134,
              summary: "Triple-digit temperatures led to a spike in demand across the region.",
              body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
          },
          {
              id: 2,
              headline: "Community College of Philadelphia to require vaccines, the first public college in the region to do so.",
              author: "Susan Snyder",
              image: 175,
              summary: "The requirement, which will allow exemptions for medical and religious reasons, won’t be in place for the start of the semester.",
              body: "The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either."
          },
          {
              headline: "A tropical depression could form in the next few days, forecasters say",
              id: 3,
              author: "Alex Harris",
              image: 171,
              summary: "Forecasters said the system will likely turn into a tropical depression late this weekend or early next week as it moves west-northwest.",
              body: "Forecasters continue to monitor a disturbance in the far eastern Atlantic that has a high chance of turning into a tropical depression in the next few days. They’re also watching another system that’s quickly moving across the Atlantic, though its formation chances remain fairly low."
          }]
        })
    
    render(<View/>)
    const author1 = await screen.findByText(/Bobby/i);
    expect(author1).toBeTruthy();
    const author2 = screen.queryByText(/Susan Snyder/i);
    expect(author2).toBeTruthy();
    const author3 = screen.queryByText(/Alex Harris/i);
    expect(author3).toBeTruthy();
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.