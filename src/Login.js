import React from 'react';
import {InputBoxCell, TitleSection} from './functionLibrary';
import './App.css';

class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <div>
                    {TitleSection("Dev Challenge")}
                </div>
                <div style={{width: '100%', marginTop: '50px'}}>
                    <table style={{width: '100%'}}>
                        <tr>
                            {InputBoxCell('username', 'username', 'Username', 'text', 'right', 120, 0)}
                            {InputBoxCell('password', 'password', 'Password', 'password', 'left', 0, 120)}
                        </tr>
                    </table>
                </div>
                <div style={{width: '100%', height: '200px', position: 'absolute', bottom: '50px'}}>
                    <table style={{width: '100%', height: '100%'}}>
                        <tr>
                            <td style={{padding: '10px', textAlign: 'center', width: '100%', verticalAlign: 'bottom'}}>
                                <div style={{borderRadius: '50px', backgroundColor: '#fee55d', padding: '25px', width: '200px', display: 'inline-block', fontSize: '22px'}}>
                                    Login
                                </div>
                                <div style={{marginTop: '20px', fontSize: '26px', color: 'white'}}>
                                    New to the challenge? <a href="/register" style={{color: '#fee55d'}}>Sign Up</a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default LoginPage;