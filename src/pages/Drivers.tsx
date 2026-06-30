import React from "react";
import { useParams } from "react-router-dom";

export default function Drivers() {
  const { driverId } = useParams();
  return (
    <div>
      <h1>Driver Page</h1>
      <p>Driver Id: {driverId}</p>
    </div>
  );
}
