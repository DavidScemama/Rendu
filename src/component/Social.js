function Fitem(){
    return(
    <>
        <div>
            <div style={{display: 'flex'}}>
                <img style={{width:80}} src='/Images/rdc.png' alt=""></img>
                <p style={{fontWeight:'bold', marginLeft: 50, fontSize: 15, textAlign: 'center' }}>Organiser une collecte de vêtements</p>
            </div>
            <div className="border" style={{marginTop: 10, display:'flex'}}>
                <img src="/Images/emmaus.png" alt='' style={{width:80}}></img>
                <p style={{fontWeight:'bold', marginLeft: 50, fontSize: 15, textAlign: 'center' }}>Déposer ses vêtements et objets non utilisés</p>
            </div>
        </div>
    </>
    )
}


export default Fitem;

