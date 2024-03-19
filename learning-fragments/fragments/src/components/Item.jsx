const item = ({foodItem}) => {
  const handleBuyButtonClicked = (e) =>{
    console.log(e);
    console.log(`${foodItem} being brought`);
  }

  return (
    <li className="list-group-item">
      {foodItem}
      <button type="button" class="btn btn-primary float-end"
      onClick={(e)=> handleBuyButtonClicked(e)}
      >Buy</button>
    </li>
  );
};
export default item;
