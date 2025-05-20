import { Layout, Button } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <Layout className="min-h-screen">
      {!isAuthPage ? (
        <Header className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-[#007c3d]">
                  Camp Karagaq
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button type="text" icon={<UserOutlined />}>
                    Kyçu
                  </Button>
                </Link>
                <Link to="/register">
                  <Button type="primary" className="bg-[#007c3d]">
                    Regjistrohu
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Header>
      ) : (
        <div className="fixed top-4 left-4 z-50">
          <Button
            type="text"
            icon={<ArrowLeftOutlined className="text-2xl" />}
            onClick={() => navigate('/')}
            className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-50"
          />
        </div>
      )}

      <Content>
        {children}
      </Content>
    </Layout>
  );
};

export default PublicLayout;
