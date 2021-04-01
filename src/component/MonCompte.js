import './MonCompte.css'
import React from 'react';
import SousBloc from './SousBloc';
//import { BottomNavigation } from '@material-ui/core';
//import Toggle from './Toggle'
import Form from './Form'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Accordeon() {
    return (
        <>
      <div className="MonCompte">
        <Accordion>
          <AccordionSummary
            expandIcon ={<ExpandMoreIcon style={{color:'#581D74', fontSize: 'xxx-large'}}  />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography >
                <p>Mon Compte</p>
                <p style={{fontSize: 20, fontWeight:'bold'}}>100,10€</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{padding:0, display:'block'}}>
            <Typography>
              <SousBloc />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Form />
      </>
    );
  }

export default Accordeon;
        
        
        
        
        
        
        
        

       
    



