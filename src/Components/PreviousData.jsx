const PreviousData = (props) => {
  return (
    <div>
      <h1>History</h1>
      {props.prevData.map((obj, i) => {
        if (obj.media_type === "video") {
          return (
            <div>
              <iframe width="320" height="240" src={obj.url}></iframe>
              <p>{obj.title}</p>
            </div>
          );
        } else {
          return (
            <div>
              <img width="320" height="240" src={obj.url} alt="img" />
              <p>{obj.title}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default PreviousData;
