import { Button, Card, Col, Row, Typography } from 'antd';
import { FacebookOutlined, InstagramOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined, CalendarOutlined, TeamOutlined, StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#007c3d] text-white py-40 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/AmbientiCamp.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="container mx-auto px-4 relative z-20">
          <Row justify="center" align="middle">
            <Col xs={24} md={16} className="text-center">
              <Title level={1} className="!text-white mb-8 text-5xl md:text-7xl font-bold tracking-tight">
                Mirë se vini në Camp Karagaq
              </Title>
              <Paragraph className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Një ambient unik ku shijoni ushqim cilësor, evente të ndryshme dhe performanca live nga artistët më të njohur të estradës shqiptare.
              </Paragraph>
              <div className="space-x-6">
                <Link to="/login">
                  <Button type="primary" size="large" className="bg-white text-[#007c3d] hover:bg-gray-100 h-14 px-10 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    Kyçu
                  </Button>
                </Link>
                <Link to="/register">
                  <Button type="primary" size="large" className="bg-[#007c3d] text-white hover:bg-[#006c33] h-14 px-10 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white">
                    Regjistrohu
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* About Section */}
      <div className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <Title level={2} className="text-center mb-20 text-4xl font-bold text-gray-800">Rreth Camp Karagaq</Title>
          <Row gutter={[48, 48]}>
            <Col xs={24} md={8}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#007c3d]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <StarOutlined className="text-3xl text-[#007c3d]" />
                  </div>
                  <Title level={4} className="mb-4 text-xl font-semibold">Ushqim Cilësor</Title>
                  <Paragraph className="text-gray-600 leading-relaxed">
                    Shijoni një menu të përgatitur me kujdes, me produkte lokale dhe shije tradicionale, në një ambient mikpritës dhe elegant.
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#007c3d]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CalendarOutlined className="text-3xl text-[#007c3d]" />
                  </div>
                  <Title level={4} className="mb-4 text-xl font-semibold">Evente & Performanca Live</Title>
                  <Paragraph className="text-gray-600 leading-relaxed">
                    Organizojmë evente të ndryshme dhe koncerte me artistë të njohur nga estrada shqiptare, për një atmosferë të paharrueshme.
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#007c3d]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <TeamOutlined className="text-3xl text-[#007c3d]" />
                  </div>
                  <Title level={4} className="mb-4 text-xl font-semibold">Shërbim Profesional</Title>
                  <Paragraph className="text-gray-600 leading-relaxed">
                    Ekipi ynë i përkushtuar ofron shërbim cilësor dhe të kujdesshëm për t'ju siguruar një përvojë të jashtëzakonshme.
                  </Paragraph>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <Title level={2} className="text-center mb-20 text-4xl font-bold text-gray-800">Zbulo përvojën unike të Camp Karagaq</Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12} lg={8}>
              <div className="relative group overflow-hidden rounded-2xl h-[400px] shadow-lg">
                <img
                  src="/images/UshqimiCamp.jpeg"
                  alt="Camp Karagaq Restaurant"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-3">Ushqim i Shijshëm</h3>
                    <p className="text-white/90 text-lg">Shijoni gatime të përzgjedhura me kujdes</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <div className="relative group overflow-hidden rounded-2xl h-[400px] shadow-lg">
                <img
                  src="/images/VerandaCamp.jpeg"
                  alt="Camp Karagaq Events"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-3">Evente</h3>
                    <p className="text-white/90 text-lg">Mjedise fleksibël për çdo rast</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <div className="relative group overflow-hidden rounded-2xl h-[400px] shadow-lg">
                <img
                  src="/images/SallaCamp.jpeg"
                  alt="Camp Karagaq Interior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-3">Atmosferë Elegante</h3>
                    <p className="text-white/90 text-lg">Ambient i sofistikuar për darka dhe evente</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <div className="relative group overflow-hidden rounded-2xl h-[400px] shadow-lg">
                <img
                  src="/images/PijetCamp.jpeg"
                  alt="Camp Karagaq Catering"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-3">Shërbim Catering</h3>
                    <p className="text-white/90 text-lg">Catering profesional për eventet tuaja të veçanta</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <div className="relative group overflow-hidden rounded-2xl h-[400px] shadow-lg">
                <img
                  src="/images/Ambienti2Camp.jpg"
                  alt="Camp Karagaq Private Events"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-3">Evente Private</h3>
                    <p className="text-white/90 text-lg">Hapësira ekskluzive për festat tuaja</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <div className="relative group overflow-hidden rounded-2xl h-[400px] shadow-lg">
                <img
                  src="/images/AmbientiCamp.jpg"
                  alt="Camp Karagaq Special Occasions"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-3">Momente të Veçanta</h3>
                    <p className="text-white/90 text-lg">Krijoni kujtime të paharrueshme me ne</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Location Section */}
      <div className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <Title level={2} className="text-center mb-20 text-4xl font-bold text-gray-800">Na Gjeni</Title>
          <Row gutter={[48, 48]} justify="center">
            <Col xs={24} md={16}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.1999177212915!2d20.28567687661386!3d42.653804816492226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352fdcddbe6ae41%3A0xd3d08ba20b43efe!2sHotel%20Camp%20Karaga%C3%A7!5e1!3m2!1sen!2s!4v1747685651058!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#007c3d] text-white py-20">
        <div className="container mx-auto px-4">
          <Row gutter={[48, 48]}>
            <Col xs={24} md={8}>
              <Title level={4} className="text-white mb-8 text-xl font-semibold">Na Kontaktoni</Title>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MailOutlined className="text-2xl" />
                  <span className="text-lg">campkaragaq@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <PhoneOutlined className="text-2xl" />
                  <span className="text-lg">049 134 071</span>
                </div>
                <div className="flex items-center space-x-4">
                  <EnvironmentOutlined className="text-2xl" />
                  <span className="text-lg">Pn Fehmi Agani, Pejë 30000</span>
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <Title level={4} className="text-white mb-8 text-xl font-semibold">Hyr në llogari</Title>
              <div className="space-y-4">
                <Link to="/login" className="block text-white hover:text-gray-200 transition-colors text-lg">
                  Kyçu
                </Link>
                <Link to="/register" className="block text-white hover:text-gray-200 transition-colors text-lg">
                  Regjistrohu
                </Link>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <Title level={4} className="text-white mb-8 text-xl font-semibold">Na Ndiqni</Title>
              <div className="space-x-8">
                <a href="https://www.facebook.com/Campkaragaq" className="text-white hover:text-gray-200 transition-colors">
                  <FacebookOutlined className="text-4xl" />
                </a>
                <a href="https://www.instagram.com/hotelcampkaragaq/" className="text-white hover:text-gray-200 transition-colors">
                  <InstagramOutlined className="text-4xl" />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
