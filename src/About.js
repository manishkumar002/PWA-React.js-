import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      {/* HERO SECTION */}
      <div
        className="text-white d-flex align-items-center justify-content-center"
        style={{
          height: "350px",
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1483985988355-763728e1935b') center/cover",
        }}
      >
        <div className="text-center">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead mt-3">
            Your trusted destination for online & offline shopping
          </p>
        </div>
      </div>

      {/* WHO WE ARE SECTION */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
              className="img-fluid rounded shadow"
              alt="About Shopping"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p className="text-muted">
              We are a modern shopping platform offering the best combination of
              **online convenience** and **offline trust**. Our mission is to
              bring the latest fashion, gadgets, lifestyle products, and more to
              your doorstep — with unbeatable prices and a smooth shopping
              experience.
            </p>
            <p className="text-muted">
              Whether you shop from our website or visit our offline stores, you
              will always get:
              <br />• Premium Quality Products
              <br />• Best Price Guarantee
              <br />• Safe & Fast Delivery
              <br />• Friendly Customer Support
            </p>
          </div>
        </div>
      </div>

      {/* ONLINE & OFFLINE SHOPPING SECTION */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">Online & Offline Shopping</h2>

        <div className="row g-4">
          {/* ONLINE */}
          <div className="col-md-6">
            <div
              className="p-4 text-white rounded shadow m-2"
              style={{
                background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              }}
            >
              <h3 className="fw-bold">Online Shopping</h3>
              <p className="mt-3">
                Shop from anywhere, anytime! Explore thousands of products
                across fashion, gadgets, home décor, accessories, and more.
                <br />
                <br />
                Enjoy features like:
                <br />✓ Cash on Delivery
                <br />✓ Secure Online Payment
                <br />✓ Easy Returns
                <br />✓ Fast Home Delivery
              </p>
            </div>
          </div>

          {/* OFFLINE */}
          <div className="col-md-6">
            <div
              className="p-4 text-white rounded shadow m-2"
              style={{
                background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
              }}
            >
              <h3 className="fw-bold">Offline Store Experience</h3>
              <p className="mt-3">
                Visit our offline stores for a premium physical shopping feel.
                Touch the products, try them, and take advice from our expert
                staff.
                <br />
                <br />
                Offline benefits:
                <br />✓ Try Before You Buy
                <br />✓ Instant Purchase
                <br />✓ Personalized Assistance
                <br />✓ Live Product Demo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OUR VALUES */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">Our Values</h2>

        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="m-2">
              <div className="card p-4 shadow-sm rounded">
                <h4 className="fw-bold">Quality First</h4>
                <p className="text-muted">
                  We deliver only genuine and high-quality products to our
                  customers.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="m-2">
              <div className="card p-4 shadow-sm rounded">
                <h4 className="fw-bold">Customer Satisfaction</h4>
                <p className="text-muted">
                  Your happiness is our priority — we ensure smooth support &
                  service.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="m-2">
              <div className="card p-4 shadow-sm rounded">
                <h4 className="fw-bold">Trust & Transparency</h4>
                <p className="text-muted">
                  Clear pricing, genuine products, and honest communication is
                  our promise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VISIT US */}
      <div className="container my-5 p-5 bg-white shadow rounded text-center">
        <h3 className="fw-bold">Visit Our Store</h3>
        <p className="text-muted w-75 mx-auto">
          You can shop online anytime, but we also welcome you to visit our
          offline store for a premium shopping experience. We are constantly
          expanding to bring our stores closer to you!
        </p>

        <button className="btn btn-primary btn-lg mt-3">Locate Store</button>
      </div>
    </div>
  );
}
