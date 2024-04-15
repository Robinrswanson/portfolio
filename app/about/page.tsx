import Image from 'next/image';
import { Container, Row, Col } from 'reactstrap';

export default function About() {
  return (  
    <Container className="h-full" fluid>
      <Row className="h-full content-center">
        <Col xs="12" md="6" className="text-white md:flex flex-col justify-center mb-2 md:mb-0">
          <h1>About Me</h1>
          <p>
            Hi, I'm Robin Swanson, a Vancouver native with Japanese and Canadian roots, studying at the University of Toronto. I'm passionate about software engineering and AI, and I'll be heading to Waseda University in Japan for an exchange year soon. Outside tech, I love soccer, Taekwondo, manga, and exploring new places.
          </p>
        </Col>
        <Col xs="12" md="6" className="flex justify-center items-center mt-2">
          <Image
            alt="Robin Swanson"
            height={400}
            src="/robin_swanson_2.jpg"
            width={400}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="border-2 border-white rounded-lg"
          />
        </Col>
      </Row>
    </Container>
  );
}
