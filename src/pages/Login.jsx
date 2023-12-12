import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  FormGroup,
  Label,
  Row,
  Input
} from "reactstrap";
import Base from "../components/Base";

const Login = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>Fill information to register</CardHeader>
              <CardBody>
                <Form>
                  {/* Email Field */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input type="email" placeholder="Enter here" id="email" />
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
                    <Button outline color="dark">
                      Login
                    </Button>
                    <Button className="ms-2" color="secondary" type="reset">
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
