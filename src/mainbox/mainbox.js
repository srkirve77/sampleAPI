import './mainbox.css'
import GridComponent from '../grid-component/grid-component'

const Mainbox = (props) => {
    return (
            <div className = "createbox">
                    <h1 className = "title">{props.title}</h1>
                        <GridComponent/>
            </div>
        )
}
export default Mainbox
