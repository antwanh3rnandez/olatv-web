import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "../components/ToggleDarkMode";
import logo from "../assets/olatv-logo.png";
import { IconMenu2 } from "@tabler/icons-react";
import { Card } from "../components/ui/card";

export const DashboardLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  const menuOptions = [
    {
      path: "/",
      name: "inicio",
      dropdown: false,
    },
    {
      path: "/visitantes",
      name: "Lista de Canales",
      dropdown: true,
      level: "parent",
    },
    {
      path: "/instalar-roku",
      name: "Precios",
      dropdown: true,
      level: "children",
    },
    {
      path: "/canales",
      name: "Preguntas Frecuentes",
      dropdown: false,
    },
    {
      path: "/peliculas",
      name: "Contactenos",
      dropdown: false,
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="border-b" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        <div className={`flex ${isMobileMenuOpen ? 'border-b-2' : ''} h-24 items-center px-4 sm:px-16 md:px-32 lg:px-64`}>
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <a href="/">
                <img className="w-16" src={logo} alt="Logo" />
            </a>
            {/* Menú Normal */}
            <div className="hidden lg:flex space-x-4 lg:justify-center">
              {menuOptions.map((option, index) => (
                <NavLink
                  to={option.path}
                  className={({ isActive }) =>
                    `text-md font-medium transition-colors hover:text-primary capitalize ${!isActive && 'text-muted-foreground'} `
                  }
                  key={index}
                >
                  {option.name}
                </NavLink>
              ))}
            </div>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
          </div>
          <div className="lg:hidden ml-auto flex items-center space-x-4">
            <button
              className="lg:hidden"
              onClick={toggleMobileMenu}
            >
              <Card className="p-1">
                <IconMenu2 size={28} />
              </Card>
            </button>
          </div>
        </div>
        {/* Menú Responsive */}
        {isMobileMenuOpen && (
          <div className="fixed lg:hidden top-0 right-0 h-full w-80 bg-gray-600 z-50 shadow-lg">
            <div className="py-2 space-y-2 border-b-2 border-primary-foreground">
                <div className="flex flex-col items-center py-4">
                    <a href="/">
                        <img className="w-16" src={logo} alt="Logo" />
                    </a>
                </div>
                {menuOptions.map((option, index) => (
                    <div key={index}>
                    <NavLink
                        to={option.path}
                        className="block pl-6 text-md text-black dark:text-white font-normal text-primary capitalize transition-colors hover:text-muted-foreground dark:hover:text-muted-foreground"
                        onClick={closeMobileMenu}
                    >
                        {option.name}
                    </NavLink>
                    {index < menuOptions.length - 1 && (
                        <hr className="border-[1px] w-[100%] border-primary-foreground my-2"></hr>
                    )}
                    </div>
                ))}
            </div>
          </div>
        )}
      </div>
      <main className="" onClick={closeMobileMenu}>
        {children}
      </main>
    </>
  );
};