import { FaCheckCircle } from "react-icons/fa";

function TodoItem(props) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <FaCheckCircle style={{color: `${props.completed === true ? '#00FF00' : 'red'}`, fontSize: '25px'}}
        

        />
        <p>{props.text}</p>
        <button type="button" className="btn-close" aria-label="Close"
          onClick={() => {
          props.setDeleteValue(props.id);
         }}
        ></button>
      </li>
    );
  }

  export { TodoItem }