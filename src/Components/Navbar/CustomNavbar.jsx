import React, { useState } from "react";
import {
  Offcanvas,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons"; // Import icon search
import "bootstrap/dist/css/bootstrap.min.css";

export default function CustomNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Navbar Utama */}
      <Navbar expand="lg" className="bg-light shadow-sm">
        <div className="container-fluid d-flex flex-column">
          {/* Bagian Logo, Hamburger Menu, dan Pencarian */}
          <div className="d-flex w-100 justify-content-between align-items-center py-2">
            {/* Tombol Hamburger */}
            <button
              className="btn btn-outline-primary d-lg-none"
              onClick={handleShow}
            >
              ☰
            </button>

            {/* Logo */}
            <Navbar.Brand className="fw-bold fs-4">Perusahaan</Navbar.Brand>

            {/* Icon Search (Mobile) */}
            <div className="d-lg-none">
              <button className="btn btn-outline-secondary">
                <Search />
              </button>
            </div>

            {/* Kolom Search (Desktop) */}
            <Form className="d-none d-lg-flex">
              <FormControl
                type="search"
                placeholder="Pencarian"
                className="rounded-pill px-3"
                aria-label="Search"
              />
            </Form>
          </div>

          {/* Menu Horizontal (Desktop) */}
          <Nav className="w-100 d-none d-lg-flex justify-content-center">
            <NavDropdown title="Lini Bisnis" id="nav-dropdown">
              <NavDropdown.Item href="#">Produk A</NavDropdown.Item>
              <NavDropdown.Item href="#">Produk B</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Keberlanjutan" id="nav-dropdown">
              <NavDropdown.Item href="#">Program A</NavDropdown.Item>
              <NavDropdown.Item href="#">Program B</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Hubungan Investor" id="nav-dropdown">
              <NavDropdown.Item href="#">Laporan Keuangan</NavDropdown.Item>
              <NavDropdown.Item href="#">Saham</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Media" id="nav-dropdown">
              <NavDropdown.Item href="#">Berita</NavDropdown.Item>
              <NavDropdown.Item href="#">Galeri</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Portofolio" id="nav-dropdown">
              <NavDropdown.Item href="#">Proyek A</NavDropdown.Item>
              <NavDropdown.Item href="#">Proyek B</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Navbar>

      {/* Offcanvas Menu (Mobile) */}
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavDropdown title="Lini Bisnis" id="nav-dropdown">
              <NavDropdown.Item href="#">Produk A</NavDropdown.Item>
              <NavDropdown.Item href="#">Produk B</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Keberlanjutan" id="nav-dropdown">
              <NavDropdown.Item href="#">Program A</NavDropdown.Item>
              <NavDropdown.Item href="#">Program B</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Hubungan Investor" id="nav-dropdown">
              <NavDropdown.Item href="#">Laporan Keuangan</NavDropdown.Item>
              <NavDropdown.Item href="#">Saham</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Media" id="nav-dropdown">
              <NavDropdown.Item href="#">Berita</NavDropdown.Item>
              <NavDropdown.Item href="#">Galeri</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Portofolio" id="nav-dropdown">
              <NavDropdown.Item href="#">Proyek A</NavDropdown.Item>
              <NavDropdown.Item href="#">Proyek B</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
