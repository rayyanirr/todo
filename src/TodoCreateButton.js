import { FaPlus } from "react-icons/fa";

function TodoCreateButton() {
    return (
      <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
      <button class="btn btn-default me-md-2" type="button"><FaPlus style={{color: 'blue', fontSize: '30px'}}/></button>
    </div>
    );
  }

  export { TodoCreateButton }