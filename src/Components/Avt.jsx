function Avt(props) {
  console.log(props); // const props =

  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Id: {props.id}</h2>
    </div>
  );
}

export default Avt;