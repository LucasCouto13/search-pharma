import React from 'react'
import { Container, Nav, NavbarBrand } from "react-bootstrap";
import styles from "./Home.module.css";
import NavBar from "react-bootstrap/Navbar";
import Image from "../../assets/img/carrinho-carrinho.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { Carrousel} from "../../components/Home/Carrousel/Carrousel"

export default function Home() {
  return (
    <>
    <NavBar className={styles.corpo}>
        <Container>
          <NavbarBrand href="#">Logo</NavbarBrand>

          <Nav className={styles.caminhos}>
            <NavDropdown title="Medicamentos" className={styles.links}>
              <NavDropdown.Item href="#action3">Controlados</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Dia-a-dia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Cósmeticos" className={styles.links}>
              <NavDropdown.Item href="#action3">Batons</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Lip Tint</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Outros" className={styles.outros}>
              <NavDropdown.Item href="#action3">
                Higiente pessoal
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Produtos para casa
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <img src={Image} className={styles.carrinho} />
            </Nav.Link>
          </Nav>
        </Container>
      </NavBar>
      <Carrousel/>
      </>
  )
}
