import styles from "./Carrousel.module.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "../../../assets/img/franquias-farmacia-1.jpg";
  
export default function Carrousel() {
  return (
    <>
      <Carousel className={styles.carrousel}>
        <Carousel.Item>
          <img
            src={Image}
            alt="First slide"
            className={styles.imagemFarmacia}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Image}
            alt="Second slide"
            className={styles.imagemFarmacia}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
