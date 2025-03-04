import { Container, Row, Col } from 'react-bootstrap';
import { semuaProduk } from '../data/index';

import FaqComponents from '../components/FaqComponents';

const ProdukPage = () => {
  return (
    <div className="produk-page">
      <div className='produk w-100min-vh-100'>
        <Container>
          <Row>
            <Col>
            <h1 className='fw-bold text-center animate__animated animate__fadeInUp animate_delay-1s'>Semua Produk</h1>
            <p className='text-center animate__animated animate__fadeInUp animate_delay-1s'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {semuaProduk.map((produk) =>{
              return (
                <Col key={produk.id} className='shadow rounded' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={produk.delay}>
                  <img src={produk.image} alt="unsplash.com" className='w-100 mb-5 rounded-top' />
                  <div className='star mb-2 px-3'>
                    <i className={produk.star1}></i>
                    <i className={produk.star2}></i>
                    <i className={produk.star3}></i>
                    <i className={produk.star4}></i>
                    <i className={produk.star5}></i>
                  </div>
                  <h6 className='px-3'>{produk.category}</h6>
                  <h5 className='mb-5 px-3'>{produk.title}</h5>
                  <div className='ket d-flex justify-content-between align-items-center px-3 pb-5'>
                    <p className='m-0 text-primary fw-bold'>{produk.price}</p>
                    <button className='btn btn-danger rounded-1' style={{backgroundColor: '#5fc95b', borderColor: '#5fc95b'}}>{produk.buy}</button>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
        </div>  
        <FaqComponents/>
      </div>

  );
};

export default ProdukPage;