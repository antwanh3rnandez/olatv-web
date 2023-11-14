import { ReactNode, useState, useEffect, useMemo } from "react";
import { useTheme } from "../components/ThemeProvider"
import { ModeToggle } from "../components/ToggleDarkMode";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import avatar from '../assets/avatar.png';
import logoLight from '../assets/olatv-logo.png';
import logoDark from '../assets/olatv-logo-white.png';
import { IconMenu2 } from "@tabler/icons-react";
import { Card } from "../components/ui/card";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuOptions = useMemo(() =>  [
    {
      path: "",
      name: "Inicio",
    },
    {
      path: "contenido",
      name: "Contenido",
    },
    {
      path: "paquetes",
      name: "Paquetes",
    },
    {
      path: "reseller",
      name: "Planes Reseller",
    },
    {
       path: "distribuidores",
       name: "Distribuidores",
    },
    {
       path: "descargas",
       name: "Descargas",
    },
    {
      path: "faqs",
      name: "Preguntas Frecuentes",
    },
    {
      path: "contacto",
      name: "Contactenos",
    },
  ], []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const sections = menuOptions.map((option) => document.getElementById(option.path));

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
  
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
  
      if (section !== null && scrollPosition >= section.offsetTop - 50) {
        setActiveSection(menuOptions[i].path);
        break;
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamada inicial para establecer el estado activo
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOptions]);

  // Obtén el estado actual del tema usando el hook useTheme
  const { theme } = useTheme();

  // Determina qué logo utilizar según el tema
  const logo = theme === "dark" ? logoDark : logoLight;

  return (
    <>
      <div className={`border-b`} id="inicio">
        <div className={`flex flex-row ${isMobileMenuOpen ? "border-b-2" : ""} h-28 items-center justify-center px-4 `}>
          <nav className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <a href="/">
              <img className="w-24" src={logo} alt="Logo" />
            </a>
            {/* Menú Normal */}
            <div className="hidden lg:flex space-x-4">
              {menuOptions.map((option, index) => (
                <ScrollLink
                  to={option.path}
                  smooth={true}
                  spy={true}
                  offset={-50}
                  duration={500}
                  className={`md:text-sm xl:text-md 2xl:text-md font-medium transition-colors hover:text-primary uppercase ${activeSection === option.path ? "text-redprimary dark:text-redprimary" : "text-muted-foreground"}`}
                  style={{fontFamily: 'Lexend'}}
                  key={index}
                >
                  {option.name}
                </ScrollLink>
              ))}
            </div>
            <div className="hidden lg:flex items-center">
                <ModeToggle />
            </div>
          </nav>
          <div className="lg:hidden ml-auto flex items-center space-x-4">
            <ModeToggle />
          </div>
          <div className="lg:hidden ml-auto flex items-center space-x-4">
            <button className="lg:hidden" onClick={toggleMobileMenu}>
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
                  <ScrollLink
                    to={option.path}
                    smooth={true}
                    spy={true}
                    offset={-50}
                    duration={500}
                    className={`block pl-6 xl:text-md font-normal capitalize transition-colors hover:text-primary ${activeSection === option.path ? "text-redprimary dark:text-redprimary" : "text-muted-foreground"}`}
                    onClick={closeMobileMenu}
                    style={{fontFamily: 'Lexend'}}
                  >
                    {option.name}
                  </ScrollLink>
                  {index < menuOptions.length - 1 && <hr className="border-[1px] w-[100%] border-primary-foreground my-2"></hr>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <main className="" onClick={closeMobileMenu}>
        {children}
        <FloatingWhatsApp 
            phoneNumber='+584244632518'
            accountName='OlaTV Oficial'
            statusMessage='Normalmente responde en algunos segundos'
            chatMessage="Hola, Como podemos ayudarte hoy? 🤝"
            placeholder='Escribe un mensaje...'
            chatboxStyle={{color: 'black'}}
            avatar={avatar}
          />
        <ScrollToTopButton />
      </main>
    </>
  );
};
