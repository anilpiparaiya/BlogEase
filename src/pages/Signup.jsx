import React from "react";
import Base from "../components/Base";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  FormGroup,
  Label,
  Row,
} from "reactstrap";

const Signup = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }} outline>
            <Card color="dark" inverse>
              <CardHeader>Fill information to register</CardHeader>
              <CardBody>
                <Form>
                  {/* Name Field */}
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input type="text" placeholder="Enter here" id="name" />
                  </FormGroup>

                  {/* Email Field */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input type="email" placeholder="Enter here" id="email" />
                  </FormGroup>

                  {/* Email Field */}
                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                    />
                  </FormGroup>

                  {/* About Field */}
                  <FormGroup>
                    <Label for="about">Enter </Label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                    />
                    style={{ height: "250px" }}
                  </FormGroup>

                  <Container className="text-center">
                    <Button outline color="light">Register</Button>
                    <Button color="secondary" type="reset">
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
