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
   
  } from "reactstrap";
  import Base from "../components/Base";
  
  const Login = () => {
    return (
      <Base>
        <Container>
          <Row className="mt-4">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card color="dark" inverse>
                <CardHeader>Login Here</CardHeader>
                <CardBody>
                  <Form>
                    {/* Email Field */}
                    <FormGroup>
                      <Label for="email">Enter Email</Label>
                      <Input type="text" placeholder="Enter here" id="email" />
                    </FormGroup>
  
                    {/* Password Field */}
                    <FormGroup>
                      <Label for="password">Enter Password</Label>
                      <Input
                        type="password"
                        placeholder="Enter here"
                        id="password"
                      />
                    </FormGroup>
  
  
                    <Container className="text-center">
                      <Button outline color="light">
                        Login
                      </Button>
                      <Button className="ms-2" outline color="secondary" type="reset">
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
  
  export default Login;