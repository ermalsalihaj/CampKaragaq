
import { BookCheck, CandlestickChart, Home, List, LogOut, User, UsersRound, } from 'lucide-react'
import { UserType } from '../../interfaces';
import { useLocation, useNavigate } from 'react-router-dom';

function MenuItems({ user }: { user: UserType }) {

    const iconSize = 16;
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    const userMenu = [

        {
            name: 'Ballina',
            path: '/',
            icon: <Home size={iconSize} />,
            isActive: currentPath === '/',
        },
        {
            name: 'Profili',
            path: '/profile',
            icon: <User size={iconSize} />,
            isActive: currentPath === '/profile',
        },
        {
            name: 'Rezervimet',
            path: '/bookings',
            icon: <List size={iconSize} />,
            isActive: currentPath === '/bookings',

        }
        , {
            name: 'Raportet',
            path: '/reports',
            icon: <CandlestickChart size={iconSize} />,
            isActive: currentPath === '/reports',


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
            path: '/',
            icon: <Home size={iconSize} />,
            isActive: currentPath === '/',
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
            path: '/reports',
            icon: <CandlestickChart size={iconSize} />,
            isActive: currentPath.includes('/admin/reports'),
        }
        , {
            name: 'Çkyçu',
            path: '/logout',
            icon: <LogOut size={iconSize} />,
        }
    ];

    const menuToRender = user.isAdmin ? adminMenu : userMenu;

    return (
        <div className="bg-gray-200 h-full p-5">
            <div className="flex flex-col gap-1 mt-5">
                <h1 className="text-xl font-bold text-primary">CAMP KARAGAQ</h1>
                <span className="text-sm text-gray-600">{user.name}</span>
            </div>

            <div className="flex flex-col gap-10 mt-20 ">
                {menuToRender.map((item: any) => (
                    <div className={`cursor-pointer px-5 py-3 rounded flex gap-5 text-sm items-center ${item.isActive ? 'bg-primary text-white' : ''}`}
                        key={item.name}
                        onClick={() => navigate(item.path)}
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
