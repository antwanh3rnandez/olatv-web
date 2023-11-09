import { useEffect, useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "../../components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

import { Button } from "../../components/ui/button"
import hero from "../../assets/hero.webp"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { 
  IconCheck, 
} from '@tabler/icons-react/';

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
    answer: 'Contamos con una gran variedad de métodos de pago. Transferencia bancaria en Mexico, Colombia, Ecuador, Panama, Peru y Venezuela. También aceptamos procesadores de pago: Tarjeta de Crédito, PayPal, Zelle y Binance Pay.',
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

  const [imagesMovies, setImagesMovies] = useState<string[]>([]); 
  useEffect(() => {
    const loadImagesMovie = async () => {
      const imageImports = [];

      for (let i = 1; i <= 13; i++) {
        const { default: image } = await import(`../../assets/movies-slide/${i}.webp`);
        imageImports.push(image);
      }

      setImagesMovies(imageImports);
    };

    loadImagesMovie();
  }, []);

  const [imagesChannels, setImagesChannels] = useState<string[]>([]); 
  useEffect(() => {
    const loadImagesChannels = async () => {
      const imageImports = [];

      for (let i = 1; i <= 16; i++) {
        const { default: image } = await import(`../../assets/channels-slide/${i}.webp`);
        imageImports.push(image);
      }

      setImagesChannels(imageImports);
    };

    loadImagesChannels();
  }, []);

  const [imagesLeagues, setImagesLeagues] = useState<string[]>([]); 
  useEffect(() => {
    const loadImagesLeagues = async () => {
      const imageImports = [];

      for (let i = 1; i <= 14; i++) {
        const { default: image } = await import(`../../assets/leagues-slide/${i}.webp`);
        imageImports.push(image);
      }

      setImagesLeagues(imageImports);
    };

    loadImagesLeagues();
  }, []);

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[100vh]">
        <img className="w-full h-full object-cover" src={hero} alt="Hero" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="w-full h-full bg-black bg-opacity-50 text-white text-center p-4 rounded"
            style={{ backdropFilter: 'blur(0px)' }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
                <h2 className="hero-text">
                  El mejor servidor de IPTV Estable y Variante
                </h2>
              <div className="mt-[12px]">
                <h2 className="hero-text-sub">
                Vea sus Deportes y Películas Favoritas con el Mejor Suscripción a IPTV : Más de 20 000 Canales en <br></br> Vivo con una Calidad Impresionante de 4K/FHD/HD | Obtenga Acceso Ilimitado a la Biblioteca VOD <br></br> con las Últimas Películas y Series | Regístrese Ahora para Obtener Descuentos Exclusivos y Soporte 24/7
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
        <div className='flex flex-col'>
          <div className='my-6'>
            <p className='text-2xl text-center' style={{fontFamily: 'Bungee'}}>
              <p style={{fontStyle: 'normal', color: 'rgb(244, 13, 3)'}}>Películas, Series y Canales</p>
            </p>
            <p className='text-xl text-center' style={{fontFamily: 'Poppins'}}>
              <p style={{fontStyle: 'normal'}}>Transmisión ilimitada de las Últimas Películas, Series y Variante de Canales en Vivo</p>
            </p>
          </div>
          <Splide className="splide splideMovies splide--loop splide--ltr splide--draggable is-active is-initialized" aria-label="My Favorite Images"
              options={ {
                type   : 'loop',
                perPage: 9,
                perMove: 1,
                pagination: false,
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: true,
                // width : 800,
                // height : 350,
                gap   : '0rem',
                autoplay: true,
                autoplayOptions: {
                  // delay: 5000, // Retardo entre diapositivas en milisegundos
                },
                speed: 1000,
              } }
            >
              {imagesMovies.map((imageMovie, index) => (
                <SplideSlide key={index} data-splide-interval="2000">
                  <img src={imageMovie} alt={`Image ${index + 1}`} />
                </SplideSlide>
              ))}
            </Splide>
            <div className='my-3'>
              <Splide className="splide splideChannels splide--loop splide--ltr splide--draggable is-active is-initialized" aria-label="My Favorite Images"
                options={ {
                  type   : 'loop',
                  perPage: 9,
                  perMove: 1,
                  pagination: false,
                  pauseOnHover: true,
                  pauseOnFocus: false,
                  rewind: true,
                  // width : 800,
                  // height : 350,
                  gap   : '0rem',
                  autoplay: true,
                  autoplayOptions: {
                    // delay: 5000, // Retardo entre diapositivas en milisegundos
                  },
                  speed: 1000,
                } }
              >
                {imagesChannels.map((imageMovie, index) => (
                  <SplideSlide key={index} data-splide-interval="2000">
                    <img src={imageMovie} alt={`Image ${index + 1}`} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
        </div>
        {/* DEPORTES Y LIGAS */}
        <div className='flex flex-col'>
          <div className='mt-8 mb-6'>
            <p className='text-2xl text-center' style={{fontFamily: 'Bungee'}}>
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
          <Splide className="splide splideMovies splide--loop splide--ltr splide--draggable is-active is-initialized" aria-label="My Favorite Images"
              options={ {
                type   : 'loop',
                perPage: 7,
                perMove: 1,
                pagination: false,
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: true,
                // width : 800,
                // height : 350,
                gap   : '0rem',
                autoplay: true,
                autoplayOptions: {
                  // delay: 5000, // Retardo entre diapositivas en milisegundos
                },
                speed: 1000,
              } }
            >
              {imagesLeagues.map((imageMovie, index) => (
                <SplideSlide key={index} data-splide-interval="2000">
                  <img src={imageMovie} alt={`Image ${index + 1}`} />
                </SplideSlide>
              ))}
            </Splide>
        </div>
        {/* Planes Detalle */}
        <div className="flex-1 space-y-4 px-6 sm:px-16 md:px-32 lg:px-64 mt-[48px]">
          <div className='my-8' id='paquetes'>
            <p className='text-2xl text-center' style={{fontFamily: 'Bungee'}}>
              <p style={{fontStyle: 'normal', color: 'rgb(244, 13, 3)'}}>
                Nuestras Promociones
              </p>
            </p>
            <p className='text-xl text-center' style={{fontFamily: 'Poppins'}}>
              <p style={{fontStyle: 'normal'}}>
                Planes Premium
              </p>
            </p>
            <div className="mt-8 grid xl:grid-cols-3 justify-center gap-6">
              {/* Plan 1 mes */}
              <Card className="rounded-xl hover:shadow-xl">
                  <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-4">1 Mes de Servicio</h3> 
                      <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                          <span className="text-2xl xl:text-4xl font-semilight text-redprimary">$</span>
                          <span className="text-5xl xl:text-7xl font-semilight text-redprimary">7</span>
                          <span className="text-2xl xl:text-3xl font-light "> USD</span>
                      </div>
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
                    <span className="sm:text-xl md:text-2xl xl:text-3xl font-light text-center" style={{fontFamily: 'Bungee'}}>3 pantallas simultáneas gratis</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="#"
                      className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-redprimary text-white rounded-sm text-center font-semibold hover:bg-red-700 transition duration-300"
                  >
                      Comprar
                      </a>
                  </div>
              </Card>
              {/* Plan 6 meses */}
              <Card className="rounded-xl hover:shadow-xl">
                  <div className="p-6 text-center">
                      <p className="text-xl font-semibold mb-4 flex flex-row justify-center items-center">
                        Paga 5 Meses y Recibe
                        <span className="text-2xl xl:text-4xl font-semilight text-redprimary">&nbsp;6</span>
                      </p> 
                      <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                          <span className="text-2xl xl:text-4xl font-semilight text-redprimary">$</span>
                          <span className="text-5xl xl:text-7xl font-semilight text-redprimary">35</span>
                          <span className="text-2xl xl:text-3xl font-light "> USD</span>
                      </div>
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
                    <span className="sm:text-xl md:text-2xl xl:text-3xl font-light text-center" style={{fontFamily: 'Bungee'}}>1 Mes de Servicio gratis</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="#"
                      className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-redprimary text-white rounded-sm text-center font-semibold hover:bg-red-700 transition duration-300"
                  >
                      Comprar
                      </a>
                  </div>
              </Card>
              {/* Plan 12 meses */}
              <Card className="rounded-xl hover:shadow-xl">
                  <div className="p-6 text-center">
                      <p className="text-xl font-semibold mb-4 flex flex-row justify-center items-center">
                        Paga 10 Meses y Recibe
                        <span className="text-2xl xl:text-4xl font-semilight text-redprimary">&nbsp;12</span>
                      </p> 
                      <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                          <span className="text-2xl xl:text-4xl font-semilight text-redprimary">$</span>
                          <span className="text-5xl xl:text-7xl font-semilight text-redprimary">70</span>
                          <span className="text-2xl xl:text-3xl font-light "> USD</span>
                      </div>
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
                    <span className="sm:text-xl md:text-2xl xl:text-3xl font-light text-center" style={{fontFamily: 'Bungee'}}>2 Meses de Servicio gratis</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="#"
                      className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-redprimary text-white rounded-sm text-center font-semibold hover:bg-red-700 transition duration-300"
                  >
                      Comprar
                      </a>
                  </div>
              </Card>           
            </div>
          </div>
        </div>
        {/* Planes Reseller */}
        <div className="space-y-4 px-6 xl:px-64">
          <div className='my-24' id='paquetes'>
            <p className='text-2xl text-center' style={{fontFamily: 'Bungee'}}>
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
                    <span className="sm:text-xl md:text-2xl xl:text-3xl font-light text-center" style={{fontFamily: 'Bungee'}}>Paquete de 30 Créditos</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="#"
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
                    <span className="sm:text-xl md:text-2xl xl:text-3xl font-light text-center" style={{fontFamily: 'Bungee'}}>Paquete de 50 Créditos</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="#"
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
                    <span className="sm:text-xl md:text-2xl xl:text-3xl font-light text-center" style={{fontFamily: 'Bungee'}}>Paquete de 100 Créditos</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="#"
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
                    <span className="sm:text-xl md:text-2xl xl:text-3xl font-light text-center" style={{fontFamily: 'Bungee'}}>Paquete de 300 Créditos</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="#"
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
                    <span className="sm:text-xl md:text-2xl xl:text-3xl font-light text-center" style={{fontFamily: 'Bungee'}}>Paquete de 500 Créditos</span>
                  </div>
                  <div className="p-6">
                      <a
                      href="#"
                      className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-redprimary text-white rounded-sm text-center font-semibold hover:bg-red-700 transition duration-300"
                  >
                      Comprar
                      </a>
                  </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="space-y-4 px-6 sm:px-16 md:px-32 xl:px-64 mt-12">
          <div className='my-24'>
            <p className='text-2xl text-center' style={{fontFamily: 'Bungee'}}>
                <p style={{fontStyle: 'normal', color: 'rgb(244, 13, 3)'}}>
                  Preguntas Frecuentes
                </p>
              </p>
              <p className='text-xl text-center' style={{fontFamily: 'Poppins'}}>
                <p style={{fontStyle: 'normal'}}>
                  Estas son algunas de las preguntas mas realizadas por nuestros clientes
                </p>
              </p>
              <div className='mt-8 2xl:px-24'>
                <div className='grid grid-cols-2 gap-4'>
                  {faqs.map((faq, index) => (
                    <Accordion type="single" collapsible className="w-full" style={{fontFamily: 'Poppins'}}>
                      <AccordionItem key={index} value={`item-${faq.id}`}>
                        <AccordionTrigger>
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