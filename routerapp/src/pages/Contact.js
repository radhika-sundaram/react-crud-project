import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import bgImage from './Router-Images/c1.jpeg';

const Contact = () => {

  const [success, setSuccess] = useState(false);

  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '60px 0'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div style={bgStyle}>
      <div className="container">

        {/* CONTACT FORM CARD */}
        <div className="row justify-content-center">
          <div className="col-md-6">

            <div
              className="card p-4 shadow-lg"
              style={{
                borderRadius: "12px",
                backgroundColor: 'rgba(200, 206, 121, 0.95)',
              }}
            >
              <h3 className="text-center mb-3 fw-bold" style={{ color: "maroon" }}>
                Contact Us 🥤
              </h3>

              <p className="text-center">
                Have questions about our fresh juices? 🍓🥭  
                We'd love to hear from you!
              </p>

              {success && (
                <div className="alert alert-success text-center">
                  Thank you! We will reach you soon 💚
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label fw-bold">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                <div className="d-grid mt-3">
                  <button
                    type="submit"
                    className="btn btn-dark fw-bold"
                  >
                    Send Message
                  </button>
                </div>

              </form>

            </div>
          </div>
        </div>

        {/* SPACE BETWEEN SECTIONS */}
        <div className="my-5"></div>

        {/* CONTACT DETAILS CARD */}
        <div className="row justify-content-center">
          <div className="col-md-6">

            <div
              className="card p-4 shadow-lg"
              style={{
                borderRadius: "30px",
                backgroundColor: 'rgba(237, 227, 227, 0.95)',
              }}
            >
              <h4 className="fw-bold text-center mb-4">
                Visit Juice Corner 🍹
              </h4>

              <div className="row">

                {/* LEFT SIDE */}
                <div className="col-md-6">
                  <p>
                    <strong>📍 Address:</strong><br />
                    Ramamurthy Nagar, Bangalore
                  </p>

                  <p>
                    <strong>📞 Phone:</strong><br />
                    +91 9877 665151
                  </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="col-md-6">
                  <p>
                    <strong>📧 Email:</strong><br />
                    juicecorner@gmail.com
                  </p>

                  <p>
                    <strong>🕒 Opening Hours:</strong><br />
                    Mon - Fri: 10:00 AM - 9:00 PM <br />
                    Sat - Sun: 11:00 AM - 10:00 PM
                  </p>
                </div>

              </div>

              <div className="text-center mt-3">
                <i className="fa-brands fa-facebook fa-lg me-3"></i>
                <i className="fa-brands fa-instagram fa-lg me-3"></i>
                <i className="fa-brands fa-whatsapp fa-lg"></i>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;