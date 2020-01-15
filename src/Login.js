import React from 'react';
import TitleSection from './TitleSection';
import './App.css';
function LoginPage(){

    return(
        <div>
            <div>
                <TitleSection />
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


//  <div style={{borderRadius: '20px', width: '231px', backgroundColor: 'yellow', marginLeft: '-150px', paddingTop: '15px', paddingBottom: '15px'}}>Login</div>
function InputBoxCell(name, id, placeholder, type, float, marginRight, marginLeft){
    return(
        <td style={{width: '50%'}}>
                <div style={{float: float, marginLeft: marginLeft+"px", marginRight: marginRight +"px"}}>
                <input type={type} name={name} id={id} placeholder={placeholder} autoComplete="off" style={{fontSize: '20px', border: 'none', borderBottom: '2px solid white', padding: '0px 5px 3px 5px', backgroundColor: 'transparent', color:  'white'}}></input>
            </div>
        </td> 
    );
}



export default LoginPage;