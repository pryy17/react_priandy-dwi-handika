import React from 'react';
import {render, screen, fireEvent} from "@testing-library/react";
import {useInputValue} from "../components/useInputValue";
import { act, renderHook } from "@testing-library/react-hooks";

describe('when rendered', () => {
    it('returns current initial value', ()=> {
        const {result} = renderHook(
            () => useInputValue("gohome")
        );
        expect(result.current.value);
    })
})

