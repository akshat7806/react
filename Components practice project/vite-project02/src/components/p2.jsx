function P2(){
  let time =  new Date();
  return <p>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}
export default P2;