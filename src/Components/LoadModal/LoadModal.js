import React from "react";
import ReactDOM from "react-dom";
import "./LoadModal.css";
import { Col, Row, Modal, Button, ProgressBar } from "react-bootstrap";

const LoadModal = ({itemSearchName}) => {
  

  return (
    <div className="container-load">
      <div className="loading-container">
        <div className="loading"></div>
      </div>
      <div id="loading-text">{`Searching for`} <br/>{`${itemSearchName}`}</div>
    </div>
  );
}

export default LoadModal;
