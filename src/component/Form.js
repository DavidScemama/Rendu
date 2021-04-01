import React from 'react';
import './Form.css'
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';


function Form(){

    let history = useHistory();

return(
<div className="All">
    <p style={{color: '#581D74', fontWeight:'bold', marginLeft:20}}>Valider ma mission</p>
    <form className="label" noValidate autoComplete="off">
      <TextField  className="text" label="Entrer le code de validation" variant="outlined" />
      <input className="check" onClick={() => history.push ('/Missions')} type="submit" value="Envoyer" />
    </form>
</div>
)

}
export default Form;