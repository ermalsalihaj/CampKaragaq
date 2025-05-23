import { BookCheck, CandlestickChart, Home, List, LogOut, User, UsersRound, } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { message } from 'antd';
import usersGlobalStore, { UsersStoreType } from '../../store/users-store';

function MenuItems() {

    const iconSize = 16;
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    const { currentUser }: UsersStoreType = usersGlobalStore() as UsersStoreType;

    const userMenu = [

        {
            name: 'Ballina',
            path: '/dashboard',
            icon: <Home size={iconSize} />,
            isActive: currentPath === '/dashboard',
        },
        {
            name: 'Profili',
            path: '/profile',
            icon: <User size={iconSize} />,
            isActive: currentPath === '/profile',
        },
        {
            name: 'Rezervimet',
            path: '/profile/bookings',
            icon: <List size={iconSize} />,
            isActive: currentPath === '/profile/bookings',

        }
        , {
            name: 'Raportet',
            path: '/profile/reports',
            icon: <CandlestickChart size={iconSize} />,
            isActive: currentPath === 'profile/reports',


        }
        , {
            name: 'Çkyçu',
            path: '/logout',
            icon: <LogOut size={iconSize} />,

        }
    ];
    const adminMenu = [

        {
            name: 'Ballina',
            path: '/dashboard',
            icon: <Home size={iconSize} />,
            isActive: currentPath === '/dashboard',
        },

        {
            name: 'Eventet',
            path: '/admin/events',
            icon: <List size={iconSize} />,
            isActive: currentPath.includes('/admin/events'),
        },
        {
            name: 'Rezervimet',
            path: '/admin/bookings',
            icon: <BookCheck size={iconSize} />,
            isActive: currentPath.includes('/admin/bookings'),
        }
        , {
            name: 'Përdoruesit',
            path: '/admin/users',
            icon: <UsersRound size={iconSize} />,
            isActive: currentPath.includes('/admin/users'),
        }
        , {
            name: 'Raportet',
            path: '/admin/reports',
            icon: <CandlestickChart size={iconSize} />,
            isActive: currentPath.includes('/admin/reports'),
        }
        , {
            name: 'Çkyçu',
            path: '/logout',
            icon: <LogOut size={iconSize} />,
        }
    ];

    const menuToRender = currentUser?.isAdmin ? adminMenu : userMenu;

    const onLogout = () => {
        Cookies.remove('token');
        navigate('/login')
        message.success('U çkyçët me sukses');
    }

    return (
        <div className="lg:bg-gray-200 h-full p-5 w-full">
            <div className="flex flex-col gap-1 mt-5">
                <h1 className="text-xl font-bold text-primary">CAMP KARAGAQ</h1>
                <span className="text-sm text-gray-600">{currentUser?.name}</span>
            </div>

            <div className="flex flex-col gap-10 mt-10 ">
                {menuToRender.map((item: any) => (
                    <div className={`cursor-pointer px-5 py-3 rounded flex gap-5 text-sm items-center ${item.isActive ? 'bg-primary text-white' : ''}`}
                        key={item.name}
                        onClick={() => {
                            if (item.name === 'Çkyçu') {
                                onLogout()
                            } else {
                                navigate(item.path);
                            }
                        }}
                    >
                        <span>
                            {item.icon}
                        </span>
                        <span>
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuItems
