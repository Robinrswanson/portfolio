import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

export default function Projects() {
  return (
    <Container className="overflow-y-auto"  style={{ height: 'calc(100vh - 58px - 64px)' }} fluid>
      <Row className='my-2'>
        <Col xs="12" md="6" className='flex justify-center'>
          <Card className='max-w-sm my-2'>
              <Link href="https://stop-procrastinating.vercel.app/" target="_blank" passHref>
                <Image
                    alt="Stop Procrastinating"
                    src="/projects/project1.jpg"
                    width={400}
                    height={400}
                    className='cursor-pointer object-cover hover:blur-sm transition duration-300 ease-in-out rounded-t-md'
                />
              </Link>
              <CardBody>
                  <CardTitle tag="h5">
                  Stop Procrastinating
                  </CardTitle>
                  <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                  >
                  Task Manager, Timer, and Productivity App
                  </CardSubtitle>
                  <CardText>
                  A productivity-focused application leveraging React for the frontend and Node.js with Express.js for the backend, enabling users to efficiently create, manage, and track tasks. Integrated a unique feature allowing users to select individual tasks and set customized timers.
                  </CardText>
              </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6" className='flex justify-center'>
            <Card className='max-w-sm my-2'>
              <Link href="https://uoftja.github.io/" target="_blank" passHref>
                <Image
                    alt="UTJA Website"
                    src="/projects/project2.jpg"
                    width={400}
                    height={400}
                    className='cursor-pointer object-cover hover:blur-sm transition duration-300 ease-in-out rounded-t-md'
                />
              </Link>
              <CardBody>
                  <CardTitle tag="h5">
                  UTJA Website
                  </CardTitle>
                  <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                  >
                  Official Club Website for UTJA
                  </CardSubtitle>
                  <CardText>
                  The University of Toronto Japan Association&apos;s official club website is meticulously crafted using HTML, CSS, and Javascript. Notably, a 12-Col grid system is implemented for a well-organized layout. The site features responsive design and employs jQuery for optimal user experience across devices.
                  </CardText>
              </CardBody>
            </Card>
        </Col>
      </Row>
      <Row className='my-2'>
        <Col xs="12" md="6" className='flex justify-center'>
          <Card className='max-w-sm my-2'>
              <Link href="https://www.oneonone.software/" target="_blank" passHref>
                <Image
                    alt="OneOnOne"
                    src="/projects/project3.jpg"
                    width={400}
                    height={400}
                    className='cursor-pointer object-cover hover:blur-sm transition duration-300 ease-in-out rounded-t-md'
                />
              </Link>
              <CardBody>
                  <CardTitle tag="h5">
                  OneOnOne
                  </CardTitle>
                  <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                  >
                  A Meeting Coordination Web App
                  </CardSubtitle>
                  <CardText>
                  Developed using Django for backend security and React for an intuitive interface, this web application streamlines the coordination of meetings. It offers straightforward account creation, contact list management, and a scheduling system that allows users to specify availability and preferences. 
                  </CardText>
               </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6" className='flex justify-center'>
            <Card className='max-w-sm my-2'>
              <Link href="https://htmlpreview.github.io/?https://github.com/Robinrswanson/YouTubeClone/blob/main/youtube.html" target="_blank" passHref>
                <Image
                    alt="Youtube Clone"
                    src="/projects/project3old.jpg"
                    width={400}
                    height={400}
                    className='cursor-pointer object-cover hover:blur-sm transition duration-300 ease-in-out rounded-t-md'
                />
              </Link>
              <CardBody>
                  <CardTitle tag="h5">
                  Youtube Clone
                  </CardTitle>
                  <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                  >
                    A Static Clone of Youtube
                  </CardSubtitle>
                  <CardText>
                  The YouTube clone project, built using HTML, CSS, and Javascript, replicates the familiar YouTube interface with functional and visually appealing elements. The combination of these technologies ensures a seamless and interactive user experience.
                  </CardText>
              </CardBody>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}
