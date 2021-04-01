import Progression from './component/Progression';
import SimpleTabs from './component/Filter';
import TodoApp from './component/Add'

function Missions(){
    return(
    <>
       <Progression />
       <SimpleTabs />
       <TodoApp />
    </>
    )
}

export default Missions;