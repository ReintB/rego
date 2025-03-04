import { Container, Row, Col } from 'react-bootstrap'
import FaqComponents from '../components/FaqComponents';

const TentangPage = () => {
  return (
    <div className='tentang-rego-page'>
      <div className="tentang-rego min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className='fw-bold text-center mb-2 animate__animated animate__fadeInUp animate_delay-1s'>Tentang REGO</h1>
            <p className='text-center animate__animated animate__fadeInUp animate_delay-1s'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </Col>
          </Row>
        </Container>

        <div className='minidesc'>
          <Container>
            <Row>
              <Col>
              <h1 className='text-center fw-bold my-5'>Apa itu Rego?</h1>
              <p className='text-center'>Rego adalah pionir dalam industri kreatif berkelanjutan, mengubah kertas bekas menjadi karya seni yang memukau melalui konstruksi dan kreasi mainan. Dengan komitmen terhadap inovasi ramah lingkungan dan apresiasi terhadap keunikan setiap ciptaan, kami memimpin dengan memberi contoh dalam menginspirasi dunia untuk merangkul keindahan, keberlanjutan, dan kreativitas.</p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="latar-belakang">
          <Container>
            <Row>
              <Col>
              <h1 className='text-center fw-bold my-5'>Latar Belakang</h1>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam magni aut aliquid reiciendis a aperiam molestias voluptatibus repellat minus! Nihil, iure. Placeat iste deserunt ea tempora quo! Ad, consequuntur neque laborum ratione quisquam illum quibusdam quod iusto facere mollitia, dignissimos est ullam dolor doloribus similique voluptas tenetur porro accusamus.</p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="tujuan">
          <Container>
            <Row>
              <Col>
              <h1 className='text-center fw-bold my-5'>Tujuan</h1>
              <p className='text-center'>Kami bertujuan untuk membuat mainan balok berkualitas tinggi dari kertas bekas yang ramah lingkungan, meningkatkan kesadaran akan keberlanjutan lingkungan, menjadi agen perubahan positif dengan memberikan peluang kerja, dan mendukung pertumbuhan ekonomi di tingkat lokal hingga nasional, serta mematuhi prinsip-prinsip SDGs dalam setiap aspek produk dan operasi kami.</p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="visi">
          <Container>
            <Row>
              <Col>
              <h1 className='text-center fw-bold my-5'>Visi</h1>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam magni aut aliquid reiciendis a aperiam molestias voluptatibus repellat minus! Nihil, iure. Placeat iste deserunt ea tempora quo! Ad, consequuntur neque laborum ratione quisquam illum quibusdam quod iusto facere mollitia, dignissimos est ullam dolor doloribus similique voluptas tenetur porro accusamus.</p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="misi">
          <Container>
            <Row>
              <Col>
              <h1 className='text-center fw-bold my-5'>Misi</h1>
              <p className='text-center'>Menjadi pengembang dalam industri kreatif berkelanjutan dengan mengubah kertas bekas menjadi karya seni dan media hiburan yang memukau melalui konstruksi dan kreasi mainan balok.</p>
              </Col>
            </Row>
          </Container>
        </div>


      </div>
      <FaqComponents/>
    </div>
  )
}

export default TentangPage;