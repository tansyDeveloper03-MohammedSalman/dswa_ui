import React from "react";

export default function footer() {
  return (
    <footer className="text-white mt-3 p-4 text-center">
      <hr style={{ backgroundColor: "white" }} />
      Copyright &copy; {new Date().getFullYear()} Data Science With Ali
    </footer>
  );
}
