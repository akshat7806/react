import TodoItem from "./TodoItem";
function TodoItems({TodoItems}){
  return ( 
  <div className="items-container">
    {TodoItems.map((item)=>  (<TodoItem name={item.name}  date={item.date}/>))}
  </div>
  );
};
export default TodoItems;