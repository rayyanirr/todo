import { FaCheckCircle } from "react-icons/fa";

function TodoItem(props) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <FaCheckCircle style={{color: `${props.completed === true ? '#00FF00' : 'red'}`, fontSize: '25px'}}
        onClick={props.onCompleted}
        
        />
        <p>{props.text}</p>
        <button type="button" className="btn-close" aria-label="Close"  onClick={props.onDelete} ></button>
      </li>
    );
  }

  export { TodoItem }