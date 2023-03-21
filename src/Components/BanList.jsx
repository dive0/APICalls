const BanList = (props) => {
  return (
    <div>
      <h1>Ban List</h1>
      <h2>Select an attribute in your listing to ban it</h2>
      {props.banList.map((value, i) => {
        return <button className="banAttr" key={i}>{value}</button>;
      })}
    </div>
  );
};

export default BanList;
