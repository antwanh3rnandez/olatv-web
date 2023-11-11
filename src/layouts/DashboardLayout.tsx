import { ReactNode, useState, useEffect, useMemo } from "react";
import { useTheme } from "../components/ThemeProvider"
import { ModeToggle } from "../components/ToggleDarkMode";
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
      path: "inicio",
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

  useEffect(() => {
    // Detectar la sección activa al hacer scroll
    const handleScroll = () => {
      const sections = menuOptions.map((option) => document.getElementById(option.path));
      const scrollPosition = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop - 50) {
          setActiveSection(menuOptions[i].path);
          break;
        }
      }
    };

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
      <div className={`border-b `} id="inicio">
        <div className={`flex ${isMobileMenuOpen ? "border-b-2" : ""} h-24 items-center px-4 sm:px-16 md:px-32 lg:px-64`}>
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <a href="/">
              <img className="w-16" src={logo} alt="Logo" />
            </a>
            {/* Menú Normal */}
            <div className="hidden lg:flex space-x-4 lg:justify-center">
              {menuOptions.map((option, index) => (
                <ScrollLink
                  to={option.path}
                  smooth={true}
                  spy={true}
                  offset={-50}
                  duration={500}
                  className={`text-md font-medium transition-colors hover:text-primary uppercase ${activeSection === option.path ? "dark:text-white" : "text-muted-foreground"}`}
                  style={{fontFamily: 'Lexend'}}
                  key={index}
                >
                  {option.name}
                </ScrollLink>
              ))}
            </div>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
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
                    className={`block pl-6 text-md font-normal text-primary capitalize transition-colors hover:text-muted-foreground`}
                    onClick={closeMobileMenu}
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
            phoneNumber='8114445896'
            accountName='OlaTV Oficial'
            statusMessage='Normalmente responde en algunos segundos'
            chatMessage="Hola, Como podemos ayudarte hoy? 🤝"
            placeholder='Escribe un mensaje...'
            chatboxStyle={{color: 'black'}}
          />
      </main>
    </>
  );
};
