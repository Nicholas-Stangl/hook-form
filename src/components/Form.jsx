import React from 'react';

const Form = (props) =>{
        
        const {inputs, setInputs} = props;
    
        const onChange = (e) => {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            });
        }
    return(
        <form>
            <br></br>
            <br></br>
            <label htmlFor="firstName">First Name: </label>
            <input onChange={onChange} type="text" name="firstName"/>
            <br></br><br></br>

            <label htmlFor="lastName">Last Name: </label>
            <input onChange={onChange} type="text" name="lastName"/>
            <br></br><br></br>

            <label htmlFor="email">Email: </label>
            <input onChange={onChange} type="text" name="email"/>
            <br></br><br></br>

            <label htmlFor="password">Password: </label>
            <input onChange={onChange} type="password" name="password"/>
            <br></br><br></br>

            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input onChange={onChange} type="password" name="confirmPassword"/>
            <br></br><br></br>
            
        </form>
    )
}
export default Form;