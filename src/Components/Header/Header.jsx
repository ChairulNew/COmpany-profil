import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; // Buat file ini untuk styling tambahan

export default function Header() {
  return (
    <header className="header-container">
      <div className="content">
        <h1>Selamat Datang di Website Kami</h1>
        <p>Solusi terbaik untuk kebutuhan Anda.</p>
        <button className="btn animated-border">Pelajari Lebih Lanjut</button>
      </div>
    </header>
  );
}
