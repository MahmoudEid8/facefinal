import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import FormComp from "./components/FormComp";
import { useIdle } from "./hooks/modal-hook";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import SliderComp from "./components/SliderComp";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isIdle = useIdle({ timeToIdle: 2500 });

  useEffect(() => {
    if (isIdle) {
      handleShow();
    } else {
      handleClose();
    }
  }, [isIdle]);
  return (
    <main>
      <div className="left-tab">
        <img src="/logo.png" alt="ads" />
      </div>
      <div className="wrapper">
        <h1 className="survey-title text-uppercase">
          <img
            src="/survey.png"
            alt=""
            className="img-fluid"
            width="100"
            height="100"
          />
          survey{" "}
        </h1>
        <FormComp />
        <div className="img-wrap">
          <h4>Scan Me</h4>
          <img src="/qr.jpeg" width="125" height="125" alt="QR code" />
        </div>
      </div>

      <div className="right-tab">
        <img src="/logo.png" alt="ads" />
      </div>

      {/* Modal */}

      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Body>
          <SliderComp />
        </Modal.Body>
      </Modal>
    </main>
  );
}

export default App;
