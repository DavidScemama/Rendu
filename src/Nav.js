import './Nav.css'
import {Link} from 'react-router-dom'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import PersonIcon from '@material-ui/icons/Person';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

function Nav(){
return( 
<div className="Nav">
   <ul>
    <Link to= '/Virements' style={{textDecoration: 'none'}}>
        <CompareArrowsIcon className="missions"/> 
        <li style={{listStyle: 'none', paddingTop: 5}}>Virement</li>
    </Link>

    <Link to='/' style={{textDecoration: 'none'}}>
        <PersonIcon className="missions" /> 
        <li style={{listStyle: 'none', paddingTop: 5}}>Profil</li>
    </Link>

    <Link to= '/Missions' style={{textDecoration: 'none'}}>
        <AssignmentTurnedInIcon  className="missions"/> 
        <li style={{listStyle: 'none',paddingTop: 5 }}>Missions</li>
    </Link>

    <Link to= '/Carte' style={{textDecoration: 'none'}}>
        <CreditCardIcon className="carte" /> 
        <li style={{listStyle: 'none', paddingTop: 5}}>Carte</li>
    </Link>
</ul>
</div>
)
}

export default Nav;