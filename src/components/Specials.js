import img1 from '../images/img1.webp';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
function Specials() {
  return (
    <div className="specials-box">
      <p id="head">This Week’s Specials</p>
      <div className="box">
      <div id="box1">
        <div id="box1img">
          <img src={img1} id="img1"/>
        </div>
        <strong style={{paddingLeft:"10px",fontSize:"20px"}}>Greek Salad</strong> <p style={{paddingLeft:"10px",paddingTop:"10px"}}> A refreshing medley of crisp romaine lettuce, sun-ripened tomatoes, and cucumbers.
Topped with creamy feta cheese, Kalamata olives, and a sprinkle of dried oregano.
Finished with our signature house-made lemon and extra virgin olive oil dressing.</p>
        </div>
      <div id="box2">
        <div id="box2img">
          <img src={img2} id="img2"/>
        </div>
        <strong style={{paddingLeft:"10px",fontSize:"20px"}}>Bruschetta</strong> <p style={{paddingLeft:"10px",paddingTop:"10px"}}>Hand-carved sourdough bread grilled over an open flame for a perfect smoky crunch.
Rubbed with fresh garlic and topped with a vibrant mix of diced tomatoes and basil.
Drizzled with high-quality balsamic glaze and a pinch of flaky sea salt.</p></div>
      <div id="box3">
        <div id="box3img">
          <img src={img3} id="img3"/>
        </div>
        <strong style={{paddingLeft:"10px",fontSize:"20px"}}>Lemon Dessert</strong><p style={{paddingLeft:"10px",paddingTop:"10px"}}>An authentic, centuries-old family recipe passed down through generations.
Features a light, zesty lemon curd layered over a buttery, melt-in-your-mouth crust.
Garnished with fresh mint and a dusting of powdered sugar for a perfect finish.

</p> </div>
      </div>
    </div>
  );
}

export default Specials;
