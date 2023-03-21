const CurrQuery = ({ currData, handleBanList }) => {
  const updateBanList = (val) => {
    handleBanList(val);
  }

  return (
    <div>
      <h3>{currData.title}</h3>
      {currData.media_type === "video" ? (
        <iframe width="320" height="240" src={currData.url}>
        </iframe>
      ) : (
        <img width="320" height="240" src={currData.url} alt="img" className="currImage"/>
      )}
      <br></br>

      <button className="attributes" onClick={() => updateBanList(currData.date)}>{currData.date}</button>
      <button className="attributes" onClick={() => updateBanList(currData.media_type)}>{currData.media_type}</button>
      {currData.copyright ? (
        <button className="attributes" onClick={() => updateBanList(currData.copyright)}>{currData.copyright}</button>
      ) : (
        <div> </div>
      )}
    </div>
  )
}

export default CurrQuery