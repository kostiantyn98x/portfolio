import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import port1 from '../../assets/images/port/1.png';
import port2 from '../../assets/images/port/port2.png';
import port3 from '../../assets/images/port/port3.jpg';
import port4 from '../../assets/images/port/port4.png';
import port5 from '../../assets/images/port/port5.png';
import port6 from '../../assets/images/port/port6.jpg';

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="mb-5 po_items_ho px-3">
            <img src={port1} className='portfolio'/>
            <div className="title l-5 pl-4 pt-2">Nova website development</div>
          </div>
          <div className="mb-5 po_items_ho px-3">
            <img src={port2} className='portfolio'/>
            <div className="title l-5 pl-4 pt-2">NFT marketplace</div>
          </div>
          <div className="mb-5 po_items_ho px-3">
            <img src={port3} className='portfolio'/>
            <div className="title l-5 pl-4 pt-2">EVE online system</div>
          </div>
          <div className="mb-5 po_items_ho px-3 pt-4">
            <img src={port4} className='portfolio'/>
            <div className="title l-5 pl-4 pt-2">ROBUSTSWAP</div>
          </div>
          <div className="mb-5 po_items_ho px-3 pt-4">
            <img src={port5} className='portfolio'/>
            <div className="title l-5 pl-4 pt-2">Apollo X trading</div>
          </div>
          <div className="mb-5 po_items_ho px-3 pt-4">
            <img src={port6} className='portfolio'/>
            <div className="title l-5 pl-4 pt-2">Assassin Creed2</div>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
