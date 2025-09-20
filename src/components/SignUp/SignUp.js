import "./signup.css";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let message = "";
    // email password validation
    if (name === "username") {
      if (value.length === 0) {
        message = "Username is required";
      } else if (value.length < 3) {
        message = "Invalid username ";
      }
    }

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
  // conditions validation for typeing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  //all submit with alert
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateAll()) {
      const user = formData.username;
      alert(`Signed Up successfully! ${user}`);
      navigate("/signin");
    }
  };
  return (
    <Container
      fluid
      className=" signup-card d-flex align-items-center justify-content-center"
    >
      <Card>
        <Row>
          <Col
            md={6}
            className=" right-side d-flex flex-column justify-content-center align-items-center text-center "
          >
            <>
              {" "}
              <h2>Welcome Back!</h2>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <Button
                type="submit"
                variant="light"
                onClick={() => navigate("/signin")}
              >
                SIGN IN
              </Button>
            </>
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center text-center mt-5 mb-5 "
          >
            <>
              <h2>Create Account</h2>
              <Form onSubmit={handleSubmit} noValidate className="mt-3">
                <Form.Group className="m-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid name.
                  </Form.Control.Feedback>
                </Form.Group>
                {/* Email */}
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

                {/* Password */}
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
                  SIGN UP
                </Button>
              </Form>
              <p className="mt-3">Forgot your password ?</p>
            </>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default SignUp;
