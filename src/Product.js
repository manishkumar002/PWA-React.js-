import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#a19c9cff",
      fontWeight: "bold",
      fontSize: "16px",
      color: "#000",
    },
  },
};

export default function Product() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    let url = "https://dummyjson.com/products";

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result?.products);
        localStorage.setItem("users", JSON.stringify(result?.products));
      })
      .catch(() => {
        setMode("offline");
        let collection = localStorage.getItem("users");
        setData(JSON.parse(collection));
      });
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "80px",
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
    },
    {
      name: "Shipping Information",
      selector: (row) => row.shippingInformation,
    },
    {
      name: "Return Policy",
      selector: (row) => row.returnPolicy,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      cell: (row) => (
        <div>
          <FaRupeeSign /> {row.price}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      cell: (row) => {
        const stars = Math.round(row.rating); // round rating
        return (
          <div style={{ color: "#f5c518" }}>
            {Array(stars)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
            <span style={{ color: "#000", marginLeft: "5px" }}>
              {/* {row.rating} */}
            </span>
          </div>
        );
      },
      sortable: true,
    },
    {
      name: "Sku",
      selector: (row) => row.sku,
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
    },
    {
      name: "Image",
      cell: (row) => (
        <img
          src={row.images[0]} // the API gives an array of images
          alt="img"
          width="60"
          height="60"
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      width: "100px",
    },
  ];

  return (
    <div className="container-fluid mt-4">
      {mode === "offline" && (
        <div className="alert alert-warning text-center">
          ⚠️ You are in offline mode
        </div>
      )}

      <h2 className="text-center mb-4 text-dark fw-bold">Product List</h2>

      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        responsive
        fixedHeader
        fixedHeaderScrollHeight="800px"
        customStyles={customStyles}
      />
    </div>
  );
}
