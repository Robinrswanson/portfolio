import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function Contact() {
    return (
        <Container className="h-full text-white flex flex-column justify-center items-center" fluid>
            <div>
            <Row>
            <Col>
                <h1>Contact Me</h1>
                <p className="lead">Robin Rikiya Swanson - Full Stack Developer</p>
            </Col>
            </Row>
            <Row className="mb-5">
            <Col>
                <h2 className="h4">Contact Information</h2>
                <p><strong>Email:</strong> <a href="mailto:your-email@example.com">robin@swanson.nu</a></p>
                <p><strong>Phone:</strong> +1-778-893-1276</p>
                <p><strong>Location:</strong> Toronto, Canada</p>
            </Col>
            </Row>
            </div>
      </Container>
  );
};