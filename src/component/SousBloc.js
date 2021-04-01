import React from 'react'
import './SousBloc.css'
//import Toggle from './Toggle'


function SousBloc(props){
    return(
        <div className="détail" style={{marginBottom:10, borderBottomLeftRadius:8, borderBottomRightRadius:8}}>
            <div className="Left" style={{marginLeft:10, padding: 5}}>
                <p style={{fontSize: 15, marginTop: 10, color: 'rgba(0,0,0,0.60)', marginBottom: 5}}>Aujourd'hui</p>         
                <p style={{fontSize: 13, }}>-7,00€ &emsp; Franprix</p>
                <p style={{fontSize: 13, }}>-2,50€  &emsp; Boulangerie</p>
                <p style={{fontSize: 15, color: 'rgba(0,0,0,0.60)', }}>1er Mars 2021</p>
                <p style={{fontSize: 13, marginBottom: 15,}}>+30,00€ &emsp; Argent de poche mensuel</p>
                <p style={{fontSize: 15, color: 'rgba(0,0,0,0.60)'}}>25 février 2021</p>
                <p style={{fontSize: 13, marginBottom: 15}}>-10,00€ &emsp; Playstation Store</p>
            </div>
        </div>
    )
}

export default SousBloc;