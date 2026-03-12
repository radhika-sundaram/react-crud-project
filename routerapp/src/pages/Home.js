import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import R1 from './Router-Images/R1.jpeg';
import R2 from './Router-Images/R2.jpeg';
import R3 from './Router-Images/R3.jpeg';
import R5 from './Router-Images/R5.jpeg';


import b1 from './Router-Images/b1.jpeg';
import b2 from './Router-Images/b2.jpeg';
import b3 from './Router-Images/b3.jpeg';
import b4 from './Router-Images/b4.jpeg';
import b5 from './Router-Images/b5.jpeg';
import b6 from './Router-Images/b6.jpeg';
import b7 from './Router-Images/b7.jpeg';
import b8 from './Router-Images/b8.jpeg';
import b9 from './Router-Images/b9.jpeg';
import b10 from './Router-Images/b10.jpeg';
import b11 from './Router-Images/b11.jpeg';
import b12 from './Router-Images/b12.jpeg';
import b13 from './Router-Images/b13.jpeg';

const Home = () => {

  const carouselImages = [R1, R2, R3, b13,R5];

  //  Add ANY number of images 
  const cardImages = [b1, b2, b3, b4,b5,b6,b7,b8,b9,b10,b11,b12,];

  // 👇 ADD THIS HERE
  const juiceNames = [
    "Apple Juice",
    "Mango Delight",
    "Mango Milk Shake",
    "Watermelon Fresh",
    "Mixed Fresh",
    "Pineapple Boost",
    "Avacado Splash",
    "Orange Fusion",
    "Mango Mint Cooler",
    "Avacado Lazzy",
    "Apple Chinnamon Mix",
    "Coconut Detox"
  ];

  return (
    <div className="container-fluid mt-4">

      {/* Bootstrap Carousel */}
      <div 
        id="homeCarousel" 
        className="carousel slide mb-5" 
        data-bs-ride="carousel"
        style={{ backgroundColor: "#222" }}
      >
        <div className="carousel-inner">
          {carouselImages.map((img, idx) => (
            <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <img 
                src={img} 
                className="d-block w-100" 
                alt={`Slide ${idx + 1}`}
                style={{ height: "600px", objectFit: "cover",backgroundPosition:"cover" }}
              />
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </div>


     {/* Card Section */}
<center><h4 style={{color:"red",fontSize:"35px"}}>Types Of Juices</h4></center>

<div className="row text-center">
  {cardImages.map((img, index) => (
    <div className="col-md-3 mb-4" key={index}>
      
      {/*  Hover added here */}
      <div className="card"style={{ width: "100%", transition: "0.3s",cursor: "pointer", }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >

        {/* Card Image */}
        <img 
          src={img} 
          className="card-img-top" 
          alt={`Card ${index + 1}`}
          style={{ height: "300px", objectFit: "cover" }} 
        />

        <div className="card-body">
        {/*<h5 className="card-title">Card {index + 1}</h5>*/} 
        <h5 className="card-title"  style={{ fontFamily: "Georgia",fontSize: "20px",fontWeight: "bold"}}>
                      {juiceNames[index]}</h5>

         {/* <p className="card-text">
            Sample content for card {index + 1}.
          </p>

          <a href="#" className="btn btn-primary"><i class="fa-solid fa-eye fa-beat"></i>View Details</a>*/}
         <button className="btn btn-primary" onClick={() => alert("Showing juice details...")}>
            <i className="fa-solid fa-eye fa-beat"></i> View Details </button>

        </div>

      </div>

    </div>
  ))}
</div>
    </div>
  );
};

export default Home;
