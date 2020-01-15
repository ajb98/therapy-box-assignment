import React from 'react';
import './App.css';

function TitleSection(){

    return(
        <div style={{width: '100%', height: '150px'}}>
            <table style={{width:'100%', height: '150px'}}>
                <tr>
                    <td style={{verticalAlign: 'bottom', textAlign: 'center'}}>
                        <div style={{fontSize: '64px', color: 'white'}}>
                            Dev Challenge
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default TitleSection;