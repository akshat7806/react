function TodoItem({name,date}) {
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
