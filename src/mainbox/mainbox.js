import './mainbox.css'
import ListOfUsers from '../grid/listOfUsers'

const Mainbox = (props) => {
    return (
            <div className = "createbox">
                    <h1 className = "title">{props.title}</h1>
                    {/* <ListOfUsers>heald </ListOfUsers> */}
            </div>
        )
}
export default Mainbox
