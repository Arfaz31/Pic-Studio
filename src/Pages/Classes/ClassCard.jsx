import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseRole from "../../Hooks/UseRole";

const ClassCard = ({ item }) => {
  const { photoUrl, className, availableSeat, instructorName, _id, price } =
    item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = UseRole()

  const handleSelected = (item) => {
    console.log(item);
    const selectedClass = {
      classItemId: _id,
      image: photoUrl,
      className: className,
      price: price,
      availableSeat: availableSeat,
      instructorName,
    };
    console.log(selectedClass);
    if (user) {
      fetch("http://localhost:5000/mySelectedClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your class add your class",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please log in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
    style={{
      backgroundColor: `${availableSeat === 0 ? "red" : "white"}`,
      color: `${availableSeat === 0 ? "white" : "black"}`
    }}
      className="card w-96 bg-base-100 shadow-xl mx-auto"
    >
      <figure>
        <img src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {className}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{instructorName}</p>
        <p>Available Seat:{availableSeat}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to="/dashboard/mySelectedClasses">
          <button
              disabled={availableSeat == 0 || isAdmin?.role === "admin" && "instructor"  }
              onClick={() => handleSelected(item)}
              className="btn btn-sm badge badge-info text-white"
            >
              Select Class
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
