import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap';

/**
 * Jumbotron Files
 * 
 * Khusus jumbotron menggunakan bootstrap, karena konsep jumbotron
 * diperkenalkan oleh Bootstrap bukan Material UI
 */

const Jumbotron = (props) => {
  return (
    <>
      <div className="container" style={{ backgroundColor: 'white' }}>
        <Row>
          <Col className="d-flex justify-content-center">
            <h3>
              Jumbotron Example
            </h3>
          </Col>
        </Row>
        <div className="jumbotron jumbotron-fluid p-3" style={{ backgroundColor: 'aqua' }}>
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
        <div className="jumbotron p-3" style={{ backgroundColor: 'turquoise' }}>
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
      </div>
    </>
  )
}
 
export default Jumbotron;