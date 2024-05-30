import logo from '../../assets/images/logo.svg';
import authBackground from '../../assets/images/auth-background.png';
import AdminDashboardWelcome from './components/AdminDashboardWelcome.tsx';
import AdminForm from './components/AdminForm.tsx';
import CreateUser from './components/CreateUser.tsx';
import useBreakpoint from '../../hooks/useBreakpoint.ts';
import { useState } from 'react';

export default function AuthScreen() {
  const isMobile = useBreakpoint('md').isBelowMd;
  const [showWelcome, setShowWelcome] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const toggleRegister = () => {
    setShowRegister(prevState => !prevState);
  };

  return (
    <main className="relative">
      <div className="min-h-screen md:grid grid-cols-3 hidden">
        <img
          src={authBackground}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          alt="auth background"
          className="col-start-3 col-span-1"
        />
      </div>
      {(!isMobile || showWelcome) && (
        <div className="absolute top-12 left-12">
          <Logo />
        </div>
      )}
      <div
        className={`min-h-screen w-full absolute top-0 left-0 ${!isMobile || showWelcome ? 'flex items-center' : 'block'}`}
      >
        {isMobile && showWelcome ? (
          <div className="flex flex-col mx-5 gap-11">
            <AdminDashboardWelcome />
            <button className="btn btn-primary w-full" onClick={() => setShowWelcome(false)}>
              Login
            </button>            
          </div>
        ) : (
          <div className="w-full lg:w-[80%] lg:mx-auto px-8 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-0 items-center">
            <div className="w-full lg:w-[70%]">
              {isMobile && !showWelcome && (
                <div className="mt-6 mb-12">
                  <Logo />
                </div>
              )}
              {showRegister ? (
  <AdminForm toggleRegister={toggleRegister} />
) : (
  <CreateUser toggleRegister={toggleRegister} />
)}
            </div>
            <div className="hidden md:block">
              <AdminDashboardWelcome />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function Logo() {
  return (
    <div className="flex flex-row gap-5 items-center">
      <img
        src={logo}
        style={{
          objectFit: 'cover'
        }}
        alt="Zynopay"
        className="col-start-3 col-span-1"
      />
      <p className="text-3xl text-primary">Zynopay</p>
    </div>
  );
}
