import React, {useState} from 'react';
import UserFormDetails from "./UserFormDetails";
import UserPersonalDetails from "./UserPersonalDetails";

const UserForm = () => {
    const [values , setValues] = useState({
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    });
    const [step, setStep] = useState(1);

    // Proceed to next step
    const nextStep = (e) => {
        setStep(prevState => (prevState + 1));
    }

    // For previous step
    const prevStep = (e) =>{
        setStep(prevState => (prevState - 1));
    }

    //handle change
    const handleChange = (input) => (e) => {
        e.preventDefault();
        setValues(prevState => ({
            ...prevState,
            [input] : e.target.value
        }))
    }

    switch (step){
        case 1:
            return <UserFormDetails values = {values} handleChange = {handleChange} next = {nextStep} />
        case 2:
            return <UserPersonalDetails values={values} handleChange = {handleChange} next = {nextStep} prev = {prevStep} />
    }


}
export default UserForm;
