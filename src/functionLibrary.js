import React from 'react';

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
export const InputBoxCell = (name, id, placeholder, type, float, marginRight, marginLeft, paddingTop) =>{
    return(
        <td style={{width: '50%', paddingTop: paddingTop}}>
                <div style={{float: float, marginLeft: marginLeft+"px", marginRight: marginRight +"px"}}>
                <input type={type} autocomplete="off" class="InputFieldLogin" name={name} id={id} placeholder={placeholder} ></input>
            </div>
        </td> 
    );
}

export const TitleSection = (Title) => {

    return(
        <div style={{width: '100%', height: '150px'}}>
            <table style={{width:'100%', height: '150px'}}>
                <tr>
                    <td style={{verticalAlign: 'bottom', textAlign: 'center'}}>
                        <div style={{fontSize: '64px', color: 'white'}}>
                            {Title}
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export const InputBoxCell2 = () =>{
    return(
        <div>

        </div>
    );
}

export default InputBoxCell;
