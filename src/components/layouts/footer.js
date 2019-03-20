import React from "react";

export default function footer() {
  return (
    <footer
      className="text-ash mt-3 p-4 text-center"
      style={{
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "100px"
      }}
    >
      <hr />
      Copyright &copy; {new Date().getFullYear()} Data Science With Ali
    </footer>
  );
}
