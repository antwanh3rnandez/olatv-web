import { 
  Card, 
  CardTitle 
} from "../../components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"
import { Button } from "../../components/ui/button"
import { 
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconCheck,
  IconPhone, 
} from '@tabler/icons-react/';

import { useTheme } from "../../components/ThemeProvider"
import { CustomSplide } from "../../components/CustomSplide"
import hero from "../../assets/familia2.jpg"
import callToActionBG from "../../assets/bg.png"
import logoLight from '../../assets/olatv-logo.png';
import logoDark from '../../assets/olatv-logo-white.png';
import screenshot1 from '../../assets/screenshot1.png';
import screenshot2 from '../../assets/screenshot2.png';
import screenshot3 from '../../assets/screenshot3.png';
import screenshot4 from '../../assets/screenshot4.png';
import { imagesMovies, imagesChannels, imagesLeagues } from '../../hooks/useImagesImport';

import { Footer } from '../../components/pages/Footer';

const faqs = [
  {
    id: 1,
    question: '¿QUE ES EL SERVICIO DE IPTV?',
    answer: 'IPTV son las iniciales de televisión por protocolo de internet, es un servicio para poder disfrutar de canales en vivo como también de una gran cantidad de series y películas a través de internet.',
  },
  {
    id: 2,
    question: '¿CUAL ES LA VELOCIDAD QUE NECESITO?',
    answer: 'Para poder usar nuestro servicio necesitaras una conexión a internet estable superior a 8Mbps y con 75ms o menos  para el contenido SH Y HD, y superior a 10Mbps y con 75ms o menos para el FHD.',
  },
  {
    id: 3,
    question: '¿CUALES SON LOS MÉTODOS DE PAGOS DISPONIBLES?',
    answer: 'Entre nuestas modalidades de pago, se encuentran Transferencias Bancarias (Solo Venezuela), Internacional: Bianance Pay, PayPal, Zelle y USDT',
  },
  {
    id: 4,
    question: '¿SI TENGO ALGUNA DUDA O PROBLEMA, QUIÉN ME AYUDA?',
    answer: 'Cualquier duda o problema que tengas será atendida al chat por algunos de nuestros agentes.',
  },
  {
    id: 5,
    question: '¿CON QUE DISPOSITIVOS PUEDO USAR NUESTRO SERVICIO DE IPTV?',
    answer: 'Los dispositivos que puedes usar para disfrutar de nuestros servicios son: Smart TV, Smartphone, PC, Laptop, TV BOX, Fire TV, Roku y  Android.',
  },
  {
    id: 6,
    question: '¿COMO PUEDO SER REVENDEDOR?',
    answer: 'Para saber todo acerca de nuestros planes para revendedores ve a la sección de Reseller y cualquier duda que tengas al respecto escríbenos al chat.',
  },
];



export const InicioPage = () => {

    // Obtén el estado actual del tema usando el hook useTheme
    const { theme } = useTheme();

    // Determina qué logo utilizar según el tema
    const logo = theme === "dark" ? logoDark : logoLight;


  return (
    <div className="flex-col md:flex" id='inicio'>
      <div className="relative w-full bg-black h-[90vh]">
        <img className="w-full h-full object-cover" src={hero} alt="Hero" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="w-full h-full bg-black bg-opacity-40 text-white text-center p-4 rounded"
            style={{ backdropFilter: 'blur(0px)' }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
                <h2 className="hero-text">
                  El mejor servicio de IPTV Estable y Variado
                </h2>
              <div className="mt-[12px]">
                <h2 className="hero-text-sub">
                Disfruta de tus Deportes y Películas Favoritas con la Mejor Suscripción a IPTV | Más de 2,000 Canales en <br></br> Vivo con una Calidad Impresionante de 4K/FHD/HD | Obtenga Acceso Ilimitado a la Biblioteca VOD <br></br> con las Últimas Películas y Series | Regístrese Ahora para Obtener Descuentos Exclusivos y Soporte 24/7
                </h2>
              </div>
              <div className="mt-[24px]">
                <a href='#paquetes'>
                  <Button className='red-primary text-white rounded-md px-8 py-6'>COMPRAR AHORA</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* PELICULAS Y CANALES */}
        <div className='flex flex-col' id='contenido'>
        { /* Logo Flotante */ }
          <div className='logo-container'>
            <img src={logo} alt="Logo" />
          </div>
          <div className='my-6'>
            <p className='text-3xl text-center' style={{fontFamily: 'Lexend'}}>
              <p style={{fontStyle: 'normal', color: 'rgb(244, 13, 3)'}}>Películas, Series y Canales</p>
            </p>
            <p className='text-xl text-center' style={{fontFamily: 'Poppins'}}>
              <p style={{fontStyle: 'normal'}}>Transmisión ilimitada de las Últimas Películas, Series y Variante de Canales en Vivo</p>
            </p>
          </div>
          <CustomSplide id="splideMovies" perPage={9} extraClass={`my-3`} images={imagesMovies} />
          <CustomSplide id="splideChannels" perPage={9} extraClass={`my-3`} images={imagesChannels} />
          
        </div>
        {/* DEPORTES Y LIGAS */}
        <div className='mt-8 mb-6'>
          <p className='text-3xl text-center' style={{fontFamily: 'Lexend'}}>
            <p style={{fontStyle: 'normal', color: 'rgb(244, 13, 3)'}}>
              Deportes y Mejores Ligas
            </p>
          </p>
          <p className='text-xl text-center' style={{fontFamily: 'Poppins'}}>
            <p style={{fontStyle: 'normal'}}>
              Transmisión Ilimitada de tus Deportes y Ligas Favoritas
            </p>
          </p>
        </div>
        <CustomSplide id="splideLeagues" perPage={7} extraClass={`my-3`} images={imagesLeagues} />
        {/* Planes Detalle */}
        <div className="space-y-4 px-6 sm:px-16 md:px-32 lg:px-64 mt-[48px]"  id='paquetes'>
          <div className='my-8'>
            <p className='text-3xl text-center' style={{fontFamily: 'Lexend'}}>
              <p style={{fontStyle: 'normal', color: 'rgb(244, 13, 3)'}}>
                Nuestras Promociones
              </p>
            </p>
            <p className='text-xl text-center' style={{fontFamily: 'Poppins'}}>
              <p style={{fontStyle: 'normal'}}>
                Planes Premium
              </p>
            </p>
            <div className="mt-8 grid xl:grid-cols-3 justify-center items-center gap-6">
              {/* Plan 1 mes */}
              <Card className="rounded-xl hover:shadow-xl">
                  <div className="p-6 text-center">
                      <p className="xl:text-lg 2xl:text-xl font-semibold mb-4 flex flex-row justify-center items-center">
                        <span>&nbsp;&nbsp;1 Mes de Servicio</span>
                        <span className="text-2xl xl:text-3xl 2xl:text-4xl font-semilight text-redprimary">&nbsp;&nbsp;</span>
                      </p> 
                      <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                          <span className="text-2xl xl:text-4xl font-semilight text-redprimary">$</span>
                          <span className="text-5xl xl:text-7xl font-semilight text-redprimary">7</span>
                          <span className="text-2xl xl:text-3xl font-light "> USD</span>
                      </div>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> 3 pantallas simultáneas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 25,000 Peliculas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 3,000 Series</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 2,500 Canales TV</em>
                      </p>
                  </div>
                  <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                    <span className="md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-light text-center" style={{fontFamily: 'Lexend'}}>3 pantallas simultáneas</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="https://api.whatsapp.com/send/?phone=+584244632518&text=Hola%20que%20tal%2C%20%C2%BFMe%20puedes%20brindar%20mas%20informaci%C3%B3n%20acerca%20de%20tus%20planes%3F"
                      target="_blank"
                      className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-redprimary text-white rounded-sm text-center font-semibold hover:bg-red-700 transition duration-300"
                  >
                      Comprar
                      </a>
                  </div>
              </Card>
              {/* Plan 6 meses */}
              <Card className="rounded-xl hover:shadow-xl">
                  <div className="p-6 text-center">
                      <p className="xl:text-lg 2xl:text-xl font-semibold mb-4 flex flex-row justify-center items-center">
                        <span>Paga 5 Meses y Recibe</span>
                        <span className="text-2xl xl:text-3xl 2xl:text-4xl font-semilight text-redprimary">&nbsp;6</span>
                      </p> 
                      <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                          <span className="text-2xl xl:text-4xl font-semilight text-redprimary">$</span>
                          <span className="text-5xl xl:text-7xl font-semilight text-redprimary">35</span>
                          <span className="text-2xl xl:text-3xl font-light "> USD</span>
                      </div>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> 3 pantallas simultáneas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 25,000 Peliculas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 3,000 Series</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 2,500 Canales TV</em>
                      </p>
                  </div>
                  <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                    <span className="md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-light text-center" style={{fontFamily: 'Lexend'}}>1 Mes de Servicio gratis</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="https://api.whatsapp.com/send/?phone=+584244632518&text=Hola%20que%20tal%2C%20%C2%BFMe%20puedes%20brindar%20mas%20informaci%C3%B3n%20acerca%20de%20tus%20planes%3F"
                      target="_blank"
                      className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-redprimary text-white rounded-sm text-center font-semibold hover:bg-red-700 transition duration-300"
                  >
                      Comprar
                      </a>
                  </div>
              </Card>
              {/* Plan 12 meses */}
              <Card className="rounded-xl hover:shadow-xl">
                  <div className="p-6 text-center">
                      <p className="xl:text-lg 2xl:text-xl font-semibold mb-4 flex flex-row justify-center items-center">
                        <span>Paga 10 Meses y Recibe</span>
                        <span className="text-2xl xl:text-3xl 2xl:text-4xl font-semilight text-redprimary">&nbsp;12</span>
                      </p> 
                      <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                          <span className="text-2xl xl:text-4xl font-semilight text-redprimary">$</span>
                          <span className="text-5xl xl:text-7xl font-semilight text-redprimary">70</span>
                          <span className="text-2xl xl:text-3xl font-light "> USD</span>
                      </div>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> 3 pantallas simultáneas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 25,000 Peliculas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 3,000 Series</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 2,500 Canales TV</em>
                      </p>
                  </div>
                  <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                    <span className="md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-light text-center" style={{fontFamily: 'Lexend'}}>2 Meses de Servicio gratis</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="https://api.whatsapp.com/send/?phone=+584244632518&text=Hola%20que%20tal%2C%20%C2%BFMe%20puedes%20brindar%20mas%20informaci%C3%B3n%20acerca%20de%20tus%20planes%3F"
                      target="_blank"
                      className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-redprimary text-white rounded-sm text-center font-semibold hover:bg-red-700 transition duration-300"
                  >
                      Comprar
                      </a>
                  </div>
              </Card>           
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="my-24">
          <div className="relative h-40 xl:h-48">
            <img className="w-full h-full object-cover" src={callToActionBG} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div
                className="w-full h-full bg-black bg-opacity-50 text-white text-center p-3"
                style={{ backdropFilter: 'blur(0px)' }}
              >
                <div className="w-full h-full flex flex-wrap xl:flex-row space-y-0 xl:space-x-8 items-center justify-center">
                  <h2 className="flex flex-col md:text-2xl lg:text-3xl xl:text-4xl" style={{fontFamily: 'Lexend'}}>
                    <p className='font-extralight'>Compruebe por usted mismo la calidad de nuestro servicio </p>
                    <em>¡Obtenga su demo ahora!</em>
                  </h2>
                  <div className="flex flex-col items-center justify-center">
                    <a href='https://api.whatsapp.com/send/?phone=+584244632518&text=Hola%20que%20tal%2C%20%C2%BFMe%20podr%C3%ADan%20generar%20un%20demo%3F%20por%20favor.' target="_blank">
                      <Button className='bg-redprimary rounded-md px-6 py-4 uppercase hover:bg-red-900 text-black dark:text-white'>Solicitar Demo</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Planes Reseller */}
        <div className="space-y-4 px-6 lg:px-32 xl:px-48 2xl:px-64" id='reseller'>
          <div className='my-24'>
            <p className='text-3xl text-center' style={{fontFamily: 'Lexend'}}>
              <p style={{fontStyle: 'normal', color: 'rgb(244, 13, 3)'}}>
                ¿Desea obtener ganancias?
              </p>
            </p>
            <p className='text-xl text-center' style={{fontFamily: 'Poppins'}}>
              <p style={{fontStyle: 'normal'}}>
                Planes Reseller
              </p>
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {/* Plan 30 */}
              <Card className="rounded-xl hover:shadow-xl">
                  <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-4">Reseller 1</h3> 
                      <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                          <span className="text-2xl xl:text-4xl font-semilight text-redprimary">$</span>
                          <span className="text-5xl xl:text-7xl font-semilight text-redprimary">105</span>
                          <span className="text-2xl xl:text-3xl font-light "> USD</span>
                      </div>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> 3 pantallas simultáneas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 25,000 Peliculas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 3,000 Series</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 2,500 Canales TV</em>
                      </p>
                  </div>
                  <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                    <span className="md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-light text-center" style={{fontFamily: 'Lexend'}}>Paquete de 30 Créditos</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="https://api.whatsapp.com/send/?phone=+584244632518&text=Hola%20que%20tal%2C%20%C2%BFMe%20puedes%20brindar%20mas%20informaci%C3%B3n%20acerca%20de%20tus%20planes%3F"
                      target="_blank"
                      className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-redprimary text-white rounded-sm text-center font-semibold hover:bg-red-700 transition duration-300"
                  >
                      Comprar
                      </a>
                  </div>
              </Card>
              {/* Plan 50 */}
              <Card className="rounded-xl hover:shadow-xl">
                  <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-4">Reseller 2</h3> 
                      <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                          <span className="text-2xl xl:text-4xl font-semilight text-redprimary">$</span>
                          <span className="text-5xl xl:text-7xl font-semilight text-redprimary">150</span>
                          <span className="text-2xl xl:text-3xl font-light "> USD</span>
                      </div>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> 3 pantallas simultáneas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 25,000 Peliculas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 3,000 Series</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 2,500 Canales TV</em>
                      </p>
                  </div>
                  <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                    <span className="md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-light text-center" style={{fontFamily: 'Lexend'}}>Paquete de 50 Créditos</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="https://api.whatsapp.com/send/?phone=+584244632518&text=Hola%20que%20tal%2C%20%C2%BFMe%20puedes%20brindar%20mas%20informaci%C3%B3n%20acerca%20de%20tus%20planes%3F"
                      target="_blank"
                      className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-redprimary text-white rounded-sm text-center font-semibold hover:bg-red-700 transition duration-300"
                  >
                      Comprar
                      </a>
                  </div>
              </Card>
              {/* Plan 100 */}
              <Card className="rounded-xl hover:shadow-xl">
                  <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-4">Reseller 3</h3> 
                      <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                          <span className="text-2xl xl:text-4xl font-semilight text-redprimary">$</span>
                          <span className="text-5xl xl:text-7xl font-semilight text-redprimary">250</span>
                          <span className="text-2xl xl:text-3xl font-light "> USD</span>
                      </div>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> 3 pantallas simultáneas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 25,000 Peliculas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 3,000 Series</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 2,500 Canales TV</em>
                      </p>
                  </div>
                  <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                    <span className="md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-light text-center" style={{fontFamily: 'Lexend'}}>Paquete de 100 Créditos</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="https://api.whatsapp.com/send/?phone=+584244632518&text=Hola%20que%20tal%2C%20%C2%BFMe%20puedes%20brindar%20mas%20informaci%C3%B3n%20acerca%20de%20tus%20planes%3F"
                      target="_blank"
                      className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-redprimary text-white rounded-sm text-center font-semibold hover:bg-red-700 transition duration-300"
                  >
                      Comprar
                      </a>
                  </div>
              </Card>           
              {/* Plan 300 */}
              <Card className="rounded-xl hover:shadow-xl">
                  <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-4">Reseller 4</h3> 
                      <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                          <span className="text-2xl xl:text-4xl font-semilight text-redprimary">$</span>
                          <span className="text-5xl xl:text-7xl font-semilight text-redprimary">600</span>
                          <span className="text-2xl xl:text-3xl font-light "> USD</span>
                      </div>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> 3 pantallas simultáneas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 25,000 Peliculas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 3,000 Series</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 2,500 Canales TV</em>
                      </p>
                  </div>
                  <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                    <span className="md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-light text-center" style={{fontFamily: 'Lexend'}}>Paquete de 300 Créditos</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="https://api.whatsapp.com/send/?phone=+584244632518&text=Hola%20que%20tal%2C%20%C2%BFMe%20puedes%20brindar%20mas%20informaci%C3%B3n%20acerca%20de%20tus%20planes%3F"
                      target="_blank"
                      className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-redprimary text-white rounded-sm text-center font-semibold hover:bg-red-700 transition duration-300"
                  >
                      Comprar
                      </a>
                  </div>
              </Card>
              {/* Plan 500 */}
              <Card className="rounded-xl hover:shadow-xl">
                  <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-4">Reseller 5</h3> 
                      <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                          <span className="text-2xl xl:text-4xl font-semilight text-redprimary">$</span>
                          <span className="text-5xl xl:text-7xl font-semilight text-redprimary">750</span>
                          <span className="text-2xl xl:text-3xl font-light "> USD</span>
                      </div>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> 3 pantallas simultáneas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 25,000 Peliculas</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 3,000 Series</em>
                      </p>
                      <p className='my-2 text-xl text-center flex flex-row space-x-2'>
                          <em><IconCheck size={32} className='text-redprimary'/></em>
                          <em className='font-extralight'> Más de 2,500 Canales TV</em>
                      </p>
                  </div>
                  <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                    <span className="md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-light text-center" style={{fontFamily: 'Lexend'}}>Paquete de 500 Créditos</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="https://api.whatsapp.com/send/?phone=+584244632518&text=Hola%20que%20tal%2C%20%C2%BFMe%20puedes%20brindar%20mas%20informaci%C3%B3n%20acerca%20de%20tus%20planes%3F"
                      target="_blank"
                      className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-redprimary text-white rounded-sm text-center font-semibold hover:bg-red-700 transition duration-300"
                  >
                      Comprar
                      </a>
                  </div>
              </Card>
            </div>
          </div>
        </div>
        {/* Distribuidores */}
        <div className="space-y-4 px-6 lg:px-32 xl:px-48 2xl:px-64" id='distribuidores'>
          <div className='my-24'>
            <p className='text-3xl text-center' style={{fontFamily: 'Lexend'}}>
              <p style={{fontStyle: 'normal', color: 'rgb(244, 13, 3)'}}>
                Distribuidores Oficiales
              </p>
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
              {/* Centro del Pais */}
              <Card className="p-6 text-center rounded-xl hover:shadow-2xl"> 
                <CardTitle>
                  <p className='text-2xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      Centro del País
                    </p>
                  </p>
                </CardTitle>
                <Card className='mt-4 p-4 hover:shadow-md flex flex-col items-center justify-center' style={{fontFamily: 'Poppins'}}>
                  <p className='mb-2 text-xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      Mega Ventas Vzla
                    </p>
                  </p>
                  <div className='flex space-x-2 flex-wrap items-center justify-center'>
                    <a href='https://www.instagram.com/mega.ventavzla' target='_blank' className='hover:underline'>
                      <div className='flex flex-col items-center justify-center'>
                          <IconBrandInstagram size={48} className='text-redprimary' />
                          <p className='mt-2'>@mega.ventavzla</p>
                      </div>
                    </a>
                    <a href='tel:+584244383791' target='' className='hover:underline'>
                      <div className='flex flex-col items-center justify-center'>
                        <IconPhone size={48} className='text-redprimary'/>
                        <p className='mt-2'>+58424-4383791</p> 
                      </div>
                    </a>
                  </div>
                </Card>
                <Card className='mt-4 p-4 hover:shadow-md flex flex-col items-center justify-center' style={{fontFamily: 'Poppins'}}>
                  <p className='mb-2 text-xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      K&G Technology
                    </p>
                  </p>
                  <div className='flex space-x-2 flex-wrap items-center justify-center'>
                    <a href='https://www.instagram.com/kgtechnology' target='_blank' className='hover:underline'>
                      <div className='flex flex-col items-center justify-center'>
                          <IconBrandInstagram size={48} className='text-redprimary' />
                          <p className='mt-2'>@kgtechnology</p>
                      </div>
                    </a>
                    <a href='tel:+584243103540 ' target='' className='hover:underline'>
                      <div className='flex flex-col items-center justify-center'>
                        <IconPhone size={48} className='text-redprimary'/>
                        <p className='mt-2'>+58424-3103540 </p> 
                      </div>
                    </a>
                  </div>
                </Card>
              </Card>
              {/* Oriente del Pais */}
              <Card className="p-6 text-center rounded-xl hover:shadow-2xl"> 
                <CardTitle>
                  <p className='text-2xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      Oriente del País
                    </p>
                  </p>
                </CardTitle>
                <Card className='mt-4 p-4 hover:shadow-md flex flex-col items-center justify-center' style={{fontFamily: 'Poppins'}}>
                  <p className='mb-2 text-xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      Mas 58 Shop Maturin
                    </p>
                  </p>
                  <div className='flex space-x-2 flex-wrap items-center justify-center'>
                    <a href='https://www.instagram.com/mas58shopmaturin' target='_blank' className='hover:underline'>
                      <div className='flex flex-col items-center justify-center'>
                          <IconBrandInstagram size={48} className='text-redprimary' />
                          <p className='mt-2'>@mas58shopmaturin</p>
                      </div>
                    </a>
                    <a href='tel:+584149958402' className='hover:underline'>
                      <div className='flex flex-col items-center justify-center'>
                        <IconPhone size={48} className='text-redprimary'/>
                        <p className='mt-2'>+58414-9958402</p> 
                      </div>
                    </a>
                  </div>
                </Card>
              </Card>
              {/* Distrito Federal */}
              <Card className="p-6 text-center rounded-xl hover:shadow-2xl"> 
                <CardTitle>
                  <p className='text-2xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      Distrito Federal
                    </p>
                  </p>
                </CardTitle>
                <Card className='mt-4 p-4 hover:shadow-md flex flex-col items-center justify-center' style={{fontFamily: 'Poppins'}}>
                  <p className='mb-2 text-xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      Aparatikus C.A
                    </p>
                  </p>
                  <div className='flex space-x-2 flex-wrap items-center justify-center'>
                    <a href='https://www.instagram.com/aparatikusvzla ' target='_blank' className='hover:underline'>
                      <div className='flex flex-col items-center justify-center'>
                          <IconBrandInstagram size={48} className='text-redprimary' />
                          <p className='mt-2'>@aparatikusvzla</p>
                      </div>
                    </a>
                    <a href='tel:+584125924995' className='hover:underline'>
                      <div className='flex flex-col items-center justify-center'>
                        <IconPhone size={48} className='text-redprimary'/>
                        <p className='mt-2'>+58412-5924995 </p> 
                      </div>
                    </a>
                  </div>
                </Card>
                <Card className='mt-4 p-4 hover:shadow-md flex flex-col items-center justify-center' style={{fontFamily: 'Poppins'}}>
                  <p className='mb-2 text-xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      Mega Ventas La Guaira 
                    </p>
                  </p>
                  <div className='flex space-x-2 flex-wrap items-center justify-center'>
                    <a href='https://www.instagram.com/megaventaslgr' target='_blank' className='hover:underline'>
                      <div className='flex flex-col items-center justify-center'>
                          <IconBrandInstagram size={48} className='text-redprimary' />
                          <p className='mt-2'>@megaventaslgr</p>
                      </div>
                    </a>
                    <a href='tel:+584141071910' className='hover:underline'>
                      <div className='flex flex-col items-center justify-center'>
                        <IconPhone size={48} className='text-redprimary'/>
                        <p className='mt-2'>+58414-1071910</p> 
                      </div>
                    </a>
                  </div>
                </Card>
              </Card>
            </div>
          </div>
        </div>
        {/* Descargas */}
        <div className="space-y-4 px-6 sm:px-8 md:px-16 xl:px-48 mt-12" id='descargas'>
          <div className='my-32'>
            <p className='text-3xl text-center' style={{fontFamily: 'Lexend'}}>
              <p style={{fontStyle: 'normal', color: 'rgb(244, 13, 3)'}}>
                Descarga de Aplicaciones
              </p>
            </p>
            <p className='text-xl text-center' style={{fontFamily: 'Poppins'}}>
              <p style={{fontStyle: 'normal'}}>
                Aquí encontrará todas nuestras aplicaciones para todas las plataformas disponibles
              </p>
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
              {/* Ola TV Smart */}
              <Card className="p-6 text-center rounded-xl hover:shadow-2xl"> 
                <CardTitle>
                  <p className='text-2xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      Ola Tv Smart
                    </p>
                  </p>
                </CardTitle>
                <Card className='mt-4 p-4 hover:shadow-md flex flex-col items-center justify-center' style={{fontFamily: 'Poppins'}}>
                  <p className='mb-2 text-xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      (Recomendada) 
                    </p>
                  </p>
                  <div className='flex space-x-2 flex-col items-center justify-center'>
                    <img src={screenshot1} className='mb-2 w-96' />
                    <a className='mb-2' href='https://bit.ly/Ola-TV' target='_blank'>
                      <div className='flex flex-col items-center justify-center'>
                        <Button className='bg-redprimary'>
                            <p>Descargar</p>
                        </Button>
                      </div>
                    </a>
                    <div className='mb-2 flex flex-col items-center justify-center'>
                      <p className='mb-2'>Codigo Downloader</p> 
                      <p className='text-lg text-redprimary'>770568</p> 
                    </div>
                  </div>
                </Card>
              </Card>
              {/* Ola Tv Flix  */}
              <Card className="p-6 text-center rounded-xl hover:shadow-2xl"> 
                <CardTitle>
                  <p className='text-2xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      Ola Tv Flix
                    </p>
                  </p>
                </CardTitle>
                <Card className='mt-4 p-4 hover:shadow-md flex flex-col items-center justify-center' style={{fontFamily: 'Poppins'}}>
                  <p className='mb-2 text-xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      (Sugerida para  películas y series)
                    </p>
                  </p>
                  <div className='flex space-x-2 flex-col items-center justify-center'>
                    <img src={screenshot2} className='mb-2 w-96' />
                    <a className='mb-2' href='https://n9.cl/h5z9d' target='_blank'>
                      <div className='flex flex-col items-center justify-center'>
                        <Button className='bg-redprimary'>
                            <p>Descargar</p>
                        </Button>
                      </div>
                    </a>
                    <div className='mb-2 flex flex-col items-center justify-center'>
                      <p className='mb-2'>Codigo Downloader</p> 
                      <p className='text-lg text-redprimary'>428243</p> 
                    </div>
                  </div>
                </Card>
              </Card>
              {/* Ola Tv Xteam */}
              <Card className="p-6 text-center rounded-xl hover:shadow-2xl"> 
                <CardTitle>
                  <p className='text-2xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      Ola Tv Xteam
                    </p>
                  </p>
                </CardTitle>
                <Card className='mt-4 p-4 hover:shadow-md flex flex-col items-center justify-center' style={{fontFamily: 'Poppins'}}>
                  <p className='mb-2 text-xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      (Sugerida para  películas y series)
                    </p>
                  </p>
                  <div className='flex space-x-2 flex-col items-center justify-center'>
                    <img src={screenshot3} className='mb-2 w-96' />
                    <a className='mb-2' href='https://n9.cl/olatv' target='_blank'>
                      <div className='flex flex-col items-center justify-center'>
                        <Button className='bg-redprimary'>
                            <p>Descargar</p>
                        </Button>
                      </div>
                    </a>
                    <div className='mb-2 flex flex-col items-center justify-center'>
                      <p className='mb-2'>Codigo Downloader</p> 
                      <p className='text-lg text-redprimary'>668785</p> 
                    </div>
                  </div>
                </Card>
              </Card>
              {/* Reproductor Web: */}
              <Card className="p-6 text-center rounded-xl hover:shadow-2xl"> 
                <CardTitle>
                  <p className='text-2xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      Reproductor Web:
                    </p>
                  </p>
                </CardTitle>
                <Card className='mt-4 p-4 hover:shadow-md flex flex-col items-center justify-center' style={{fontFamily: 'Poppins'}}>
                  <p className='mb-2 text-xl text-center' style={{fontFamily: 'Poppins'}}>
                    <p style={{fontStyle: 'normal'}}>
                      (Multiplataforma)
                    </p>
                  </p>
                  <div className='flex space-x-2 flex-col items-center justify-center'>
                    <img src={screenshot4} className='mb-2 w-96' />
                    <a className='mb-2' href='http://web-players.xyz/olatv/' target='_blank'>
                      <div className='flex flex-col items-center justify-center'>
                        <Button className='bg-redprimary'>
                            <p>Ingresar</p>
                        </Button>
                      </div>
                    </a>
                    <div className='mb-2 flex flex-col items-center justify-center'>
                      <p className='mb-2'>Portal Web</p> 
                      <p className='text-lg text-redprimary'>http://web-players.xyz/olatv/</p> 
                    </div>
                  </div>
                </Card>
              </Card>
            </div>
          </div>
        </div>
        {/* Contacto */}
        <div className='px-8 flex flex-col justify-center items-center' id='contacto'>
          <div className='xl:w-1/2 mb-12 xl:mb-20'>
            <p className='text-3xl text-center' style={{fontFamily: 'Lexend'}}>
              <p style={{fontStyle: 'normal'}} className='text-redprimary'>
                Mantente informado de nuevas actualizaciones en nuestros canales informativos.
              </p>
            </p>
          </div>
          <div className='mb-12 xl:mb-20 flex flex-wrap justify-center xl:flex-row gap-4 lg:gap:16 xl:gap-32'>
            <a href='https://www.instagram.com/olatv_oficial' target='_blank' className='hover:text-redprimary'>
              <div className='flex flex-row'>
                <IconBrandInstagram size={64} className='text-redprimary'/>
                <div className='flex flex-col items-start justify-center'>
                    <p className='md:text-xl xl:text-2xl font-normal text-start'>Instagram Fanpage</p>
                    <p style={{fontStyle: 'italic'}}>Instagram Oficial</p>
                </div>
              </div>
            </a>
            <a href='https://t.me/olatviptv' target='_blank' className='hover:text-redprimary'>
              <div className='flex flex-row'>
                <IconBrandTelegram size={64} className='text-redprimary'/>
                <div className='flex flex-col items-start justify-start'>
                    <p className='md:text-xl xl:text-2xl font-normal text-start'>Canal en Telegram</p>
                    <p style={{fontStyle: 'italic'}}>Grupo Informativo</p>
                </div>
              </div>
            </a>
            <a href='https://api.whatsapp.com/send/?phone=+584244632518&text=Hola%20que%20tal%2C%20%C2%BFMe%20puedes%20brindar%20mas%20informaci%C3%B3n%20acerca%20de%20tus%20servicios%3F' target='_blank' className='hover:text-redprimary'>
              <div className='flex flex-row'>
                <IconBrandWhatsapp size={64} className='text-redprimary'/>
                <div className='flex flex-col items-start justify-start'>
                    <p className='md:text-xl xl:text-2xl font-normal text-start'>WhatsApp</p>
                    <p style={{fontStyle: 'italic'}}>Online de Lunes a Domingo</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='mb-12 flex flex-col justify-center items-center'>
          <div className='px-8 xl:w-1/2 mb-8'>
            <p style={{fontFamily: 'Poppins'}} className='text-center'>
              El tiempo de respuesta en nuestros canales informativos o de comunicación, incluyendo nuestro correo corporativo puede variar en cada país. El horario de atención permanente es de Lunes a Viernes. Los días Sábados y Domingos el tiempo de respuesta puede variar dependiendo de la disponibilidad de agentes, sin estar sujetos a un horario determinado.
            </p>
          </div>
        </div>
        {/* FAQs */}
        <div className="space-y-4 px-6 sm:px-8 md:px-16 xl:px-64 mt-12" id='faqs'>
          <div className='my-32'>
            <p className='text-3xl text-center' style={{fontFamily: 'Lexend'}}>
                <p style={{fontStyle: 'normal', color: 'rgb(244, 13, 3)'}}>
                  Preguntas Frecuentes
                </p>
              </p>
              <p className='text-xl text-center' style={{fontFamily: 'Poppins'}}>
                <p style={{fontStyle: 'normal'}}>
                  Estas son algunas de las preguntas mas realizadas por nuestros clientes
                </p>
              </p>
              <div className='mt-8 xl:mx-2 2xl:px-24'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  {faqs.map((faq, index) => (
                    <Accordion type="single" collapsible className="w-full text-start" style={{fontFamily: 'Poppins'}}>
                      <AccordionItem key={index} value={`item-${faq.id}`}>
                        <AccordionTrigger className='text-start'>
                          <p>{faq.question}</p>
                        </AccordionTrigger>
                        <AccordionContent>
                        <p>{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}