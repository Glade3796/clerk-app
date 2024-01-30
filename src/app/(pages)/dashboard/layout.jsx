import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <h1>Dashboard</h1>
        <h3>Link 1</h3>
        <h3>Link 2</h3>
        <h3>Link 3</h3>
      </nav>
      <main>{children}</main>
    </div>
  );
}
