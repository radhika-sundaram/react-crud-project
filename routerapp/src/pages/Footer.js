import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "white",
        padding: "40px 0",
        marginTop: "60px",
      }}
    >
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-3 mb-4">
            <h5 style={{ color: "#ff9800", fontWeight: "bold",fontSize:"24px"}}>
              ABOUT
            </h5>
            <p style={{ fontSize: "20px",fontStyle:"Libre Baskerville",lineHeight: "1.6" }}>
              Fresh and natural juices served daily in 
              Ramamurthy Nagar, Bangalore.
            </p>

    {/* Social Icons */}
  <div style={{ marginTop: "15px" }}>
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{ marginRight: "15px", color: "#3b5998" }}
    >
      <i className="fa-brands fa-facebook fa-lg"></i>
    </a>

    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{ marginRight: "15px", color: "#e4405f" }}
    >
      <i className="fa-brands fa-instagram fa-lg"></i>
    </a>

    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{ marginRight: "15px", color: "#1da1f2" }}
    >
      <i className="fa-brands fa-twitter fa-lg"></i>
    </a>

    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#25d366" }}
    >
      <i className="fa-brands fa-whatsapp fa-lg"></i>
    </a>
  </div>

          </div>

          {/* Address */}
          <div className="col-md-3 mb-4">
            <h5 style={{ color: "#ff9800", fontWeight: "bold" }}>
              ADDRESS
            </h5>
            <p style={{ fontSize: "20px",fontStyle:"Libre Baskerville", lineHeight: "1.6" }}>
              Juice Corner 🥤 <br />
              Ramamurthy Nagar <br />
              Bangalore – 560016
            </p>
          </div>

          {/* Products */}
          <div className="col-md-3 mb-4">
            <h5 style={{ color: "#ff9800", fontWeight: "bold" }}>
              PRODUCTS
            </h5>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "20px",fontStyle:"Libre Baskerville", lineHeight: "1.8" }}>
              <li>🥭 Mango Delight</li>
              <li>🍓 Strawberry Shake</li>
              <li>🥝 Kiwi Fresh</li>
              <li>🍍 Pineapple Blast</li>
            </ul>
          </div>

          {/* Map */}
          <div className="col-md-3 mb-4">
            <h5 style={{ color: "#ff9800", fontWeight: "bold" }}>
              LOCATION
            </h5>
            <iframe
              title="map"
              src="https://www.google.com/maps?q=ramamurthy+nagar+bangalore&output=embed"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: "8px" }}
              loading="lazy"
            ></iframe>
          </div>

        </div>

        <hr style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />

        <p className="text-center mb-0" style={{ fontSize: "16px" }}>
          © 2026 Juice Corner | Bangalore | Fresh • Natural • Healthy
        </p>
      </div>
    </footer>
  );
}

export default Footer;
