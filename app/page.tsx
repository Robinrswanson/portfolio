import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './components/navbar';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex flex-grow font-sans">
        <Container className="flex-grow content-center" fluid="sm">
          <Row>
            <Col xs="12" md="6" xl="4" className="text-white md:flex flex-col justify-center mb-8 md:mb-0"> {/* Adjusted for margin bottom */}
              <p>Hi my name is,</p>
              <h1>Robin Swanson.</h1>
              <h1 className="opacity-60">I am an aspiring Software Engineer.</h1>  
              <p>A student with a passion for software engineering and artificial intelligence. Focused on bettering the world with code.</p>
            </Col>
            <Col xs="12" md="6" xl="8" className="flex justify-center items-center"> {/* Centered items */}
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
      </main>
      <Footer/>
    </div>
  );
}
