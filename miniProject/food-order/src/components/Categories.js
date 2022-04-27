import React from "react";

export default function Categories() {
  return (
    <div className="d-flex justify-content-evenly">
      <div>
        <div
          style={{
            overflow: "hidden",
            borderRadius: "100px",
            width: "10em",
            height: "10em",
          }}
        >
          <img src="img/makanan/gulai sapi.jpg" style={{ width: "10em" }} />
        </div>
        <div>
          <strong>Makanan</strong>
        </div>
      </div>
    </div>
  );
}
