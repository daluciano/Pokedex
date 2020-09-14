import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import styles from "./modal.module.css";
import { Route } from "react-router-dom";

class ItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      Email: null,
      Password: null,
      redirect: false
    };
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect(history) {
    if (
      this.state.Email === "daluciano@hotmail.com" &&
      this.state.Password === "123123"
    ) {
      history.push("/LoginSucces");
    }
  }

  handleChangeMail(event) {
    this.setState({ Email: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ Password: event.target.value });
  }

  componentDidUpdate(Props, state) {
    if (state.showModal !== Props.showModal) {
      this.setState({ showModal: Props.showModal });
    }
  }

  render() {
    return (
      <Modal show={this.state.showModal}>
        <Modal.Header
          className={styles.close2}
          closeButton
          onClick={() => {
            this.setState({ showModal: false });
          }}
        >
          <Modal.Title>Inicia sesión a pokedex</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={this.state.value}
                type="email"
                placeholder="Enter email"
                onChange={this.handleChangeMail}
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
                value={this.state.value}
                onChange={this.handleChangePassword}
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
                    this.handleRedirect(history);
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
}
export default ItemModal;
