import MonCompte from './MonCompte'
import InstagramIcon from '@material-ui/icons/Instagram';



function Profil(){
    return(
        <div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: 10, flexDirection:'column', textAlign:'center'}} className="picbloc">
            <img style={{width: 250}} className="jules" alt="jules" src="/Images/jules.jpg"></img>
            <p style={{paddingTop: 3, fontWeight:'bold'}}>Jules Pagès</p>
        <div className="socialMedias">
           <InstagramIcon style={{color: '#581D74', width: 40}}/>
            <img style={{width: 25}} src="/Images/tiktok.svg" alt=""/>
        </div>
        </div>
            <MonCompte />
        </div>
    )
}
export default Profil;