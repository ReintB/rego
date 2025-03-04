import { Container, Row, Col} from 'react-bootstrap';

import Image404 from "../assets/img/rego/clown-img.png";

const Page404 = () => {
    return (
    <div className="404page">
        <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
            <Container>
                <Row className='header-box d-flex align-items-center pt-lg-5'>
                    <Col lg="6">
                    <h1 className='mb-4 animate__animated animate__fadeInUp'><span style={{ color: '#5fc95b' }}>Re</span>Imaginate Further With <span style={{ color: '#5fc95b' }}>REGO</span>!
                    </h1>
                    <p className='mb-4 animate__animated animate__fadeInUp'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit quam consequatur ad, inventore non doloribus dolorem tenetur sint autem provident.
                    </p>
                    </Col>
                    <Col lg="6" className='pt-lg-0 pt-5'>
                    <img src= {Image404} alt="404-img" className='animate__animated animate__fadeInUp' />
                    </Col>
                </Row>
            </Container>
        </header>
    </div>
    )
}

export default Page404;