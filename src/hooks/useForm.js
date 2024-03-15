import { useState, useEffect } from "react"

export const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            setValues((values) => ({
                ...values,
                email,
                rememberme: true
            }))
        }
        
    }, []);
    
    const reset = () => {
        setValues(initialState);
    }

    const toggleCheck = () => {
        setValues({
            ...values,
            rememberme: !values.rememberme
        })
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const handleInputImage = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.files[0]
        })
    }

    return [values, setValues, handleInputChange, handleInputImage, toggleCheck, reset];
}