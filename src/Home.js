import React from "react";
export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container-fluid p-0">
        <div
          className="text-white d-flex align-items-center"
          style={{
            height: "500px",
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1503342217505-b0a15ec3261c') center/cover",
          }}
        >
          <div className="container">
            <h1 className="display-3 fw-bold mb-3">
              Mega Fashion & Gadget Sale
            </h1>
            <p className="lead mb-4">
              Exclusive deals you can’t miss – Up to 70% OFF
            </p>
            <button className="btn btn-warning btn-lg me-3 px-4">
              Shop Now
            </button>
            <button className="btn btn-outline-light btn-lg px-4">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* CATEGORY GRID */}
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Browse Top Categories</h2>

        <div className="row g-4">
          {[
            {
              name: "Men",
              img: "https://i.pinimg.com/736x/71/c5/c6/71c5c656c4e04e24b8c40fdbd72b401b.jpg",
            },
            {
              name: "Women",
              img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTeE-mB4GamUHipxe6d3dcp1RR4wj9jlHZ4oeAt1PSzQHQNgntT0tykQidH_cO5s0w4le4h1gyB3qhPLoWKTjOQCQ1MwdMtZx76w59tYqbtrDrWKi_yX9O5fQ",
            },
            {
              name: "Gadgets",
              img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
            },
            {
              name: "Kids",
              img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
            },
          ].map((cat, index) => (
            <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
              <div className="card shadow-sm rounded overflow-hidden">
                <img
                  src={cat.img}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  alt={cat.name}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold">{cat.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BEST DEALS SECTION */}
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold">🔥 Best Deals of the Day</h2>

        <div className="row g-4">
          {[
            "https://fashiondream.co.in/cdn/shop/files/063A4521_b73794b1-c616-45c3-bb7c-286e53128cc0.jpg?v=1718358145&width=533",
            "https://cdn.shopify.com/s/files/1/0682/3755/8034/files/2_59bcb211-9578-4251-b35d-1dc846343eab.webp?v=1737267876",
            "https://www.fancydresswale.com/cdn/shop/products/Newborn-Toddler-Kids-Monkey-Printed-Baby-Boys-Clothing-Set-Long-Sleeve-Tops-Pants-Little-Kids-All-season-Outfits_-Brown-fancydresswale.com-53414769.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvcflpTU2usyY1MyEIdAKRVY9aan5TLRUdQ&s",
          ].map((img, p) => (
            <div className="col-12 col-sm-6 col-md-3 mb-4" key={p}>
              <div className="card shadow-sm">
                <img
                  src={img}
                  alt="product"
                  className="card-img-top"
                  style={{ height: 250, objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Deal Product {p + 1}</h5>
                  <p className="text-success fw-bold">Now ₹799 (₹1499)</p>
                  <button className="btn btn-danger w-100">Grab Deal</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRENDING PRODUCTS */}
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold">⭐ Trending Now</h2>

        <div className="row g-4">
          {[
            "https://assets.ajio.com/medias/sys_master/root/20240703/51Q1/6685b5d06f60443f314a090d/-473Wx593H-4938418030-multi-MODEL.jpg",
            "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-14-blue-back.png?v=b950ef6b",
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
            "https://rukminim2.flixcart.com/image/480/480/xif0q/headphone/s/m/u/airbirds-pro-haksmith-original-imagzwdghzttdmyw.jpeg?q=90",
          ].map((img, p) => (
            <div className="col-12 col-sm-6 col-md-3 mb-4" key={p}>
              <div className="card shadow-sm">
                <img
                  src={img}
                  alt="Trending Product"
                  className="card-img-top"
                  style={{ height: 250, objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Trending Product {p + 1}</h5>
                  <p className="text-muted">₹1299</p>
                  <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS WITH GRADIENT */}
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold">What Customers Say</h2>

        <div className="row g-4">
          {[
            "Amazing quality products! Highly recommended.",
            "Fast delivery and great customer service.",
            "One of the best online shopping experiences.",
          ].map((text, i) => (
            <div className="col-12 col-md-4 mb-4" key={i}>
              <div
                className="card p-4 shadow-sm h-100 text-white"
                style={{
                  background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                  border: "none",
                  borderRadius: "15px",
                }}
              >
                <p>"{text}"</p>
                <h6 className="fw-bold mt-3">⭐ ⭐ ⭐ ⭐ ⭐</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="container my-5 p-5 bg-white shadow rounded text-center">
        <h3 className="fw-bold">Join Our Newsletter</h3>
        <p>Get early access to new products & exclusive offers.</p>
        <div className="d-flex justify-content-center">
          <input
            type="email"
            className="form-control w-50 me-2"
            placeholder="Enter your email"
          />
          <button className="btn btn-dark">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
