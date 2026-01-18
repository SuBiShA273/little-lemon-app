function CustomersSay() {
  return (
    <div className="customerbox">
      <p style={{fontSize:"35px",fontWeight:"bold",textAlign:"center",color:"white"}}>What Our Customers Say</p>
      <div className="box">
      <div id="box1">
        <p>⭐⭐⭐⭐⭐ <br/><br/><br/> “Amazing food and great service!” <br/><br/>– Alex</p>
      </div>
      <div id="box2">
        <p>⭐⭐⭐⭐<br/><br/><br/>  “Lovely atmosphere and delicious meals.” <br/><br/>– Maria</p>
      </div>
      <div id="box3">
        <p>⭐⭐⭐⭐⭐ <br/><br/><br/> “Best dining experience I've had in a while!” <br/><br/>– John</p>
      </div>
      </div>
    </div>
  );
}

export default CustomersSay;
