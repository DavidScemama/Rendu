function Sitem(){
    return(
        <div>
            <div style={{display: 'flex'}}>
                <img style={{width:50}} src='/Images/velib.png' alt=""></img>
                <p style={{fontWeight:'bold', marginLeft: 50, fontSize: 15, textAlign: 'center' }}>Organiser une collecte de vêtements</p>
            </div>
            <div className="border" style={{display:'flex'}}>
                <img src="/Images/bio.png" alt='' style={{width:50, marginTop: 20}}></img>
                <p style={{fontWeight:'bold', marginLeft: 50, fontSize: 15, textAlign: 'center', marginTop: 40 }}>Déposer ses vêtements et objets non utilisés</p>
            </div>
        </div>
    )
}

export default Sitem;