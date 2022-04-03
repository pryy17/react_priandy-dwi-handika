import React from 'react';
import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from '../components/Search';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
jest.mock('axios');

describe('FormCoding', () => {
    test('fetches stories from api and display them', async () => {
        const stories = [
            {    
                objectID : '1',
                name : 'supriyadi'
            },
            {
                objectID : '2',
                name : 'jokowi'
            }
        ]

        axios.get.mockImplementationOnce(() => 
            Promise.resolve({
                data: {hits : stories}
            })
        );

        render(<Search />);
        await act(async () => {
            await userEvent.click(screen.getByRole('button'));
        });
        

        const items = await screen.findAllByRole('listitem')

        expect(items).toHaveLength(2);

    });

    test('fetches stories from api and fail', async () => {
        axios.get.mockImplementationOnce(() => 
            Promise.reject(new error())
        );

        render(<Search />);
        await act(async () => {
            await userEvent.click(screen.getByRole('button'));
        });
        

        const massage = await screen.findByText(/Ada yang error .../)

        expect(massage).toBeInTheDocument();

    })
})