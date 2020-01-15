import React from 'react';
import TitleSection from './TitleSection';
import './App.css';
//import InputBoxCell from './Login';

/**
 * Function which will display the Registration Page. Called from App.js presuming route is
 * /register.
 */
function RegisterUser(){

    return(
        <div>
            <div>
                <TitleSection />
            </div>
            <div style={{width: '100%', marginTop: '50px'}}>
                <table style={{width: '100%'}}>
                    <tr>
                        {InputBoxCell('username', 'username', 'Username', 'text', 'right', 120, 0, 0)}
                        {InputBoxCell('email', 'email', 'Email', 'text', 'left', 0, 120, 0)}
                    </tr>
                    <tr style={{paddingTop: '100px'}}>
                        {InputBoxCell('password', 'password', 'Password', 'password', 'right', 120, 0, 100)}
                        {InputBoxCell('password2', 'password2', 'Confirm Password', 'password', 'left', 0, 120, 100)}
                    </tr>
                </table>
            </div>
            <div style={{width: '100%', height: '400px', textAlign: 'center'}}>
                <div class="UploadImageContainer" style={{display: 'inline-block', width: '430px', height: '400px',  cursor: 'pointer'}}>
                    <div style={{color: 'white', marginTop: '170px', fontSize: '30px'}}>Add Picture</div>
                </div>
            </div>
            <div style={{width: '100%', height: '200px', position: 'absolute', bottom: '50px'}}>
                <table style={{width: '100%', height: '100%'}}>
                    <tr>
                        <td style={{padding: '10px', textAlign: 'center', width: '100%'}}>
                            <div style={{borderRadius: '50px', backgroundColor: '#fee55d', padding: '17px', width: '330px', display: 'inline-block', fontSize: '22px', cursor: 'pointer', marginBottom: '100px'}}>
                                Register
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

/**
 * 
 * @param {String} name Name of the input field
 * @param {String} id Id of the input field
 * @param {Stringt} placeholder Placeholder text of the field
 * @param {String} type Type of the input field
 * @param {String} float Float of the outer div
 * @param {Integer} marginRight Margin right value of outer div
 * @param {Integer} marginLeft Margin Left value fo outer div
 * @param {Integer} paddingTop Top padding of the cell
 */
function InputBoxCell(name, id, placeholder, type, float, marginRight, marginLeft, paddingTop){
    return(
        <td style={{width: '50%', paddingTop: paddingTop}}>
                <div style={{float: float, marginLeft: marginLeft+"px", marginRight: marginRight +"px"}}>
                <input type={type} class="InputFieldLogin" name={name} id={id} placeholder={placeholder} ></input>
            </div>
        </td> 
    );
}

export default RegisterUser;