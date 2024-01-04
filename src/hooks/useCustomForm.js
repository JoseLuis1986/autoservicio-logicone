import React, { useState } from 'react'

export const useCustomForm = ( initialState = {}) => {
    const [state, setState] = useState(initialState)
  
    const handleInputChange = (values) => {
        setState({
            ...state,
            ...values
        })
    }

    const reset = () => {
        setState(initialState);
    }

  
    console.log(state);
    return [state, handleInputChange, reset]
}
