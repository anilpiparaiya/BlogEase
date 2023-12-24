import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import { signUp } from "../services/userService";
import toast from "react-toastify";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  FormGroup,
  Label,
  Row,
  Input,
  Form,
  Col,
  FormFeedback,
} from "reactstrap";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Handle Change
  const handleChange = (event, property) => {
    // setting dynamic values
    setData({ ...data, [property]: event.target.value });
  };

  // Resetting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  //  submit the form

  const submitForm = (event) => {
    event.preventDefault();
    //  if(error.isError){
    //    toast.error("Form data is invalid, correct all details and submit !!")
    //    setError({...error, isError:false})
    //    return
    // }

    console.log(data);

    // data validate

    // call server api for sending data
    signUp(data)
      .then((res) => {
        console.log(res);
        console.log("success log");
        toast.success("User is registered successfully");
        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");

        // handle error in proper way
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          {/* {JSON.stringify(data)} */}
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>Fill information to register</CardHeader>
              <CardBody>
                <Form onSubmit={submitForm}>
                  {/* Name Field */}
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={
                        error.errors?.response?.data?.name ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.name}
                    </FormFeedback>
                  </FormGroup>

                  {/* Email Field */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter here"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={error.errors?.data?.email ? true : false}
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.email}
                    </FormFeedback>
                  </FormGroup>

                  {/* Password Field */}
                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>

                  {/* About Field */}
                  <FormGroup>
                    <Label for="about">Write something about yourself</Label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                      style={{ height: "250px" }}
                      onChange={(e) => handleChange(e, "about")}
                      value={data.about}
                      invalid={
                        error.errors?.response?.data?.about ? true : false
                      }
                    />

                    <FormFeedback>
                      {error.errors?.response?.data?.about}
                    </FormFeedback>
                  </FormGroup>

                  <Container className="text-center">
                    <Button outline color="light">
                      Register
                    </Button>
                    <Button
                      onClick={resetData}
                      color="secondary"
                      className="ms-2"
                      type="reset"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Signup;
