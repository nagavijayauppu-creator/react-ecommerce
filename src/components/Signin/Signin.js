import "./signin.css";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signin() {
  const listofusers = [
    { email: "vijji@gmail.com", password: "123456" },
    { email: "kanna@gmail.com", password: "123456" },
    { email: "nani@gmail.com", password: "123456" },
    { email: "raja@gmail.com", password: "123456" },
    { email: "yash@gmail.com", password: "123456" },
  ];
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // username password emailvalidation
  const validateField = (name, value) => {
    let message = "";
    if (name === "email") {
      if (value.length === 0) {
        message = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        message = "Invalid email address";
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        message = "Password is required";
      } else if (value.length < 6) {
        message = "Password must be at least 6 characters";
      }
    }

    return message;
  };

  // submit validation
  const validateAll = () => {
    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // typeing validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };
  //total handling
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      const enteredname = listofusers.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      if (enteredname) {
        localStorage.setItem("user", formData.email);
        navigate("/home");
      } else {
        setErrors({
          ...errors,
          password: "Invalid email or password. Please try again.",
        });
      }
    }
  };

  //html return
  return (
    <Container
      fluid
      className="signin-card d-flex align-items-center justify-content-center"
    >
      <Card>
        <Row>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center text-center mt-5 mb-5"
          >
            <>
              <h2>Sign in</h2>
              <Form className="mt-3" onSubmit={handleSubmit} noValidate>
                <Form.Group className="m-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="m-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="danger" className="w-50">
                  SIGN IN
                </Button>
              </Form>
              <p className="mt-3">Forgot your password?</p>
            </>
          </Col>
          <Col
            md={6}
            className="left-side d-flex flex-column justify-content-center align-items-center text-center"
          >
            <>
              <h2>Hello, Friend!</h2>
              <p>Enter your personal details and start journey with us</p>
              <Button
                type="button"
                variant="light"
                onClick={() => navigate("/signup")}
              >
                {" "}
                SIGN UP{" "}
              </Button>
            </>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Signin;
