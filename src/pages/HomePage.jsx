import { Container, Row, Col} from 'react-bootstrap';
import HeroImage from '../assets/img/rego/homepage-pict.png';
import MiniDescImage from '../assets/img/rego/greenchar.png';

import { produkTerbaru, dataSwiper, artikel } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponents from '../components/FaqComponents';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className='header-box d-flex align-items-center pt-lg-5'>
            <Col lg="6">
              <h1 className='mb-4 animate__animated animate__fadeInUp'><span style={{ color: '#5fc95b' }}>Re</span>Imaginate Further With <span style={{ color: '#5fc95b' }}>REGO </span>!
              </h1>
              <p className='mb-4 animate__animated animate__fadeInUp'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit quam consequatur ad, inventore non doloribus dolorem tenetur sint autem provident.
              </p>
              <button style={{ backgroundColor: '#5fc95b', color: 'white' }} className='btn btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp' onClick={() => {navigate("./produk")}}>Lihat Produk</button>
              <button className='btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2' onClick={() => {navigate("./tentang")}}>Tentang REGO</button>
            </Col>
            <Col lg="6" className='pt-lg-0 pt-5'>
              <img src= {HeroImage} alt="hero-img" className='animate__animated animate__fadeInUp' />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Container Rekomendasi */}
      <div className="produk w-100 min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className='text-center fw-bold'>REKOMENDASI</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, only u the best girl i've ever met</p>
          </Col>
        </Row>

        <Row>
          {produkTerbaru.map((produk) =>{
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
                <h5 className='mb-4 px-3'>{produk.title}</h5>
                <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                  <p className='m-0 text-primary fw-bold'>{produk.price}</p>
                  <button className='btn btn-danger rounded-1' style={{backgroundColor: '#5fc95b', borderColor: '#5fc95b'}}>{produk.buy}</button>
                </div>
              </Col>
            )
          })}
        </Row>

        <Row>
          <Col className='text-center'>
          <button className='btn btn-success rounded-2 btn-lg' style={{ backgroundColor: '#5fc95b', outline: 'none', border: '0' }} data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate("/error")}>Lihat Semua Produk <i className='fa-solid fa-chevron-right ms-1'></i></button>
          </Col>
        </Row>
      </Container>
      </div>
      {/* Container Rekomendasi */}

      {/* Container Pengantar Rego */}
      <div className="minidesc">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold my-5'>Apa itu Rego?</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='text-center'>Rego adalah pionir dalam industri kreatif berkelanjutan, mengubah kertas bekas menjadi karya seni yang memukau melalui konstruksi dan kreasi mainan. Dengan komitmen terhadap inovasi ramah lingkungan dan apresiasi terhadap keunikan setiap ciptaan, kami memimpin dengan memberi contoh dalam menginspirasi dunia untuk merangkul keindahan, keberlanjutan, dan kreativitas.</p>
            </Col>
          </Row>
          <Row>
          <Col className='text-center'>
          <button className='btn btn-success rounded-2 btn-lg' style={{ backgroundColor: '#5fc95b', outline: 'none', border: '0' }} onClick={() => navigate("/tentang")}>Selengkapnya<i className='fa-solid fa-chevron-right ms-1'></i></button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Container Pengantar Rego */}

      {/* Container Artikel */}
      <div className="artikel">
      <Container>
        <Row>
          <Col>
            <h1 className='text-center fw-bold my-5'>Artikel</h1>
          </Col>
        </Row>
        <Row>
          {artikel.map((artikel) => {
            return (
              <Col key={artikel.id} className='shadow rounded' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={artikel.delay}>
                <img src={artikel.image} alt="unsplash.com" className='w-100 mb-5' />
                <h5 className='mb-5 px-3 text-center'>{artikel.title}</h5>
                <div className='ket d-flex align-items-center justify-content-center pb-3'>
                  <button className='btn btn-danger rounded-1' style={{ backgroundColor: '#5fc95b', borderColor: '#5fc95b' }}>Selengkapnya</button>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
    
      {/* Container Artikel */}

      {/* Container Testimonial */}
      <div className='testimonial py-5'>
        <Container>
          <Row>
            <Col>
            <h1 className='text-center fw-bold my-5'>Testimonial</h1>
            </Col>
          </Row>
          <Row>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((data) => {
          return (
            <SwiperSlide key={data.id} className='shadow-sm'>
            <p className='desc'>{data.desc}</p>
            <div className='people'>
              <img src={data.image} alt="" />
              <div>
                <h5 className='mb-1'>{data.name}</h5>
                <p className='m-0 fw-bold'>{data.skill}</p>
              </div>
            </div>
          </SwiperSlide>
          );
        })}
      </Swiper>
          </Row>
        </Container>
      </div>
      {/* Container Testimonial */}

      {/* FAQ Section*/}
      <FaqComponents/>
      {/* FAQ Section*/}

    </div>
    
  )
}

export default HomePage;