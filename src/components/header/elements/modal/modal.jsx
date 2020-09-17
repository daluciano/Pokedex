import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import styles from "./modal.module.css";
import { Route } from "react-router-dom";

export default function ItemModal(props) {
  var [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    setShowModal(props.showModal);
  }, [props]);

  return (
    <Modal show={showModal}>
      <Modal.Header
        className={styles.close2}
        closeButton
        onClick={() => setShowModal(!showModal)}
      >
        <Modal.Title>Inicia sesión a pokedex</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Route
            render={(
              { history } //le paso el objeto history de React Router que contiene acciones como PUSH, REPLACE, or POP para manipular la ruta. info en https://reacttraining.com/react-router/web/api/history
            ) => (
              <Button
                type="button"
                className={styles.close2}
                type="submit"
                onClick={() => {
                  history.push("/Pokedex/LoginSucces");
                }}
              >
                Log in
              </Button>
            )}
          />
        </Form>
      </Modal.Body>
    </Modal>
  );
}
