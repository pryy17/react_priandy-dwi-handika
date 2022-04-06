import React from 'react';
import {render, screen, fireEvent} from "@testing-library/react";
import FormCoding from "../components/FormCoding"
import '@testing-library/jest-dom'


describe('FormCoding', () => {

    test('renders FormCoding component', () => {
        render(<FormCoding />)
        // screen.debug()
        expect(screen.getByText(/Pendaftaran Peserta Coding Bootcamp/)).toBeInTheDocument();
        expect(screen.getByText(/Nama Lengkap:/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toBeInTheDocument();
        // expect(screen.getByDisplayValue("reactjs")).toBeInTheDocument();

    });

    test('FormCoding component input test', () => {
        render(<FormCoding />)
        // screen.debug()
        
        fireEvent.input(
            screen.getByRole('textbox', {name : /nama/i}),
            {target : {value : "Priandy Dwi Handika"}}
        )
        fireEvent.input(
            screen.getByRole('textbox', {name : /email/i}),
            {target : {value : "priandy@gmail.com"}}
        )
        expect(screen.getByLabelText(/Email:/)).toHaveValue("priandy@gmail.com");
        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Priandy Dwi Handika");
    });

    test('FormCoding component error input test', () => {
        render(<FormCoding />);
        // screen.debug()
        
        fireEvent.input(
            screen.getByRole('textbox', {name : /nama/i}),
            {target : {value : "Priandy Dwi Handika122"}}
        )
        expect(screen.getByText(/Nama Lengkap Harus Berupa Huruf/)).toBeInTheDocument();;
    });

});