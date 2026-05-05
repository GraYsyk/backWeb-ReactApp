import { Link, useLocation } from "react-router";

export function Header() {
  const { pathname } = useLocation();

  const navItems = [
    { label: '/index',    path: '/' },
    { label: '/register', path: '/page01' },
    { label: '/login',    path: '/login' },
    { label: '/confirm',  path: '/confirm' },
    { label: '/success',  path: '/success' },
    { label: '/logs',     path: '/logs' },
  ];

  const isRegister = ['/page01','/page02','/page03','/page04','/page05','/page06','/page07']
  .includes(pathname);



  return (
    <nav className='topbar'>
      <Link to="/">
        <div className='topbar-logo'>
          <span className="app-id">APP_ID: 0x4F2A</span>
          <span className="app-name">reg_system</span>
          <span className="app-ver">v0.3.1-beta &middot; build 2024.11.03</span>
        </div>
      </Link>
      <div className='topbar-nav'>
        {navItems.map((item, i) => (
          <span className={`nav-item ${isRegister && item.path === '/page01' ? 'active' : pathname === item.path ? 'active' : ''}`}>
            {item.label}
          </span>
        ))}
      </div>
      <div className='topbar-right'>
        <span className="status-pill ok">DB: OK</span>
        <span className="status-pill warn">SFTP: SLOW</span>
        <span className="status-pill ok">API: 200</span>
      </div>
    </nav>
  );
}