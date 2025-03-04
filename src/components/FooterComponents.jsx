import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FooterComponents = () => {
  return (
    <div className='footer py-5'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col lg="5">
          <h3 className='fw-bold'>Rego</h3>
          <p className='desc'>Rego adalah pionir dalam industri kreatif berkelanjutan, mengubah kertas bekas menjadi karya seni yang memukau melalui konstruksi dan kreasi mainan.</p>
          <div className='no mb-1 mt-4'>
            <Link className='text-decoration-none'>
              <i className='fa-brands fa-whatsapp'></i>
              <p className='m-0'>+62 822-9721-096</p>
            </Link>
          </div>
          <div className='mail'>
            <Link className='text-decoration-none'>
              <i className='fa-regular fa-envelope'></i>
              <p className='m-0'>rego@gmail.com</p>
            </Link>
          </div>
          </Col>
          <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
          <h5 className='fw-bold'>Menu</h5>
          <Link to="">Beranda</Link>
          <Link to="tentang">Tentang</Link>
          <Link to="produk">Produk</Link>
          <Link to="testimonial">Testimonial</Link>
          <Link to="faq">FAQ</Link>
          </Col>
          <Col lg="4" className='mt-lg-0 mt-5'>
          <h5 className='fw-bold mb-3'>Subscribe untuk info menarik</h5>
          <div className='subscribes'>
            <input type="text" placeholder='Subscribe...' />
            <button style={{ backgroundColor: '#5fc95b', color: 'white' }} className='btn rounded-end rounded-0'>Subscribe</button>            
          </div>
          <div className='social mt-3'>
            <i className='fa-brands fa-facebook'></i>
            <i className='fa-brands fa-twitter'></i>
            <i className='fa-brands fa-linkedin'></i>
            <i className='fa-brands fa-youtube'></i>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className='text-center px-md-0 px-3'>&copy; Copyright {new Date().getFullYear()} by <span className='fw-bold'>REGO</span> , All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponents;