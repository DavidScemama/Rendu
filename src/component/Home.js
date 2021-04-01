import {useHistory} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Clock from './Tick'

function Home (){
    let history = useHistory();
    return(
        <div style={{ display: 'flex', justifyContent:'space-around'}}>
            <HomeIcon onClick={() => history.push ('/')} style={{fontSize: 40, cursor:'pointer', color: '#581D74', marginTop:10}} />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Clock />
        </div>
    )
}

export default Home;

