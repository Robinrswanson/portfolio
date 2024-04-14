import Image from 'next/image';
import { Container, Row, Col } from 'reactstrap';

export default function Home() {
  return (  
    <Container className="h-full" fluid>
    <Row className="h-full content-center">
      <Col xs="12" md="6" className="text-white md:flex flex-col justify-center mb-2 md:mb-0">
        <p>Hi my name is,</p>
        <h1>Robin Swanson.</h1>
        <h1 className="opacity-60">I am an aspiring Software Engineer.</h1>  
        <p>A student with a passion for software engineering and artificial intelligence. Focused on bettering the world with code.</p>
      </Col>
      <Col xs="12" md="6" className="flex justify-center items-center mt-2">
        <Image
          alt="Robin Swanson"
          height={400}
          src="/robin_swanson.png"
          width={400}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="border-2 border-white rounded-lg"
        />
      </Col>
    </Row>
  </Container>
  );
}
