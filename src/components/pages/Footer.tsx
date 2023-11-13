import { useTheme } from "../../components/ThemeProvider"
import logoLight from '../../assets/olatv-logo.png';
import logoDark from '../../assets/olatv-logo-white.png';
import { 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandTelegram,
  IconBrandWhatsapp, 
} from '@tabler/icons-react/';

export const Footer = () => {

  // Obtén el estado actual del tema usando el hook useTheme
  const { theme } = useTheme();

  // Determina qué logo utilizar según el tema
  const logo = theme === "dark" ? logoDark : logoLight;

    return (
        <>
        <div className='px-8 flex flex-col justify-center items-center' id='contacto'>
          <div className='xl:w-1/2 mb-12 xl:mb-20'>
            <p className='text-3xl text-center' style={{fontFamily: 'Lexend'}}>
              <p style={{fontStyle: 'normal'}} className='text-redprimary'>
                Mantente informado de nuevas actualizaciones en nuestros canales informativos.
              </p>
            </p>
          </div>
          <div className='mb-12 xl:mb-20 flex flex-wrap justify-center xl:flex-row gap-4 lg:gap:16 xl:gap-32'>
            <div className='flex flex-row'>
              <IconBrandInstagram size={64} className='text-redprimary'/>
              <div className='flex flex-col items-start justify-center'>
                <a href='https://www.instagram.com/olatv_oficial' target='_blank' className='hover:text-redprimary'>
                  <p className='md:text-xl xl:text-2xl font-normal text-start'>Instagram Fanpage</p>
                  <p style={{fontStyle: 'italic'}}>Instagram Oficial</p>
                </a>
              </div>
            </div>
            <div className='flex flex-row'>
              <IconBrandTelegram size={64} className='text-redprimary'/>
              <div className='flex flex-col items-start justify-start'>
                <a href='https://t.me/olatviptv' target='_blank' className='hover:text-redprimary'>
                  <p className='md:text-xl xl:text-2xl font-normal text-start'>Canal en Telegram</p>
                  <p style={{fontStyle: 'italic'}}>Grupo Informativo</p>
                </a>
              </div>
            </div>
            <div className='flex flex-row'>
              <IconBrandWhatsapp size={64} className='text-redprimary'/>
              <div className='flex flex-col items-start justify-start'>
                <a href='https://api.whatsapp.com/send/?phone=+584244632518&text=Hola%20que%20tal%2C%20%C2%BFMe%20puedes%20brindar%20mas%20informaci%C3%B3n%20acerca%20de%20tus%20servicios%3F' target='_blank' className='hover:text-redprimary'>
                  <p className='md:text-xl xl:text-2xl font-normal text-start'>WhatsApp</p>
                  <p style={{fontStyle: 'italic'}}>Online de Lunes a Domingo</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-12 flex flex-col justify-center items-center'>
          <div className='px-8 xl:w-1/2 mb-8'>
            <p style={{fontStyle: 'normal'}} className='text-center'>
              El tiempo de respuesta en nuestros canales informativos o de comunicación, incluyendo nuestro correo corporativo puede variar en cada país. El horario de atención permanente es de Lunes a Viernes. Los días Sábados y Domingos el tiempo de respuesta puede variar dependiendo de la disponibilidad de agentes, sin estar sujetos a un horario determinado.
            </p>
          </div>
        </div>
        <div className='shadow-2xl my-6 flex flex-row items-center justify-center'>
            <div className="w-[25%] h-24 bg-redprimary" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0% 0%)' }}>
            </div>
            <div className="w-[75%] h-24 bg-redprimary" style={{ clipPath: 'polygon(100% 100%, 0% 100%, 100% 0%)' }}>
            </div>
        </div>
        <div className='footer z-50 w-full flex flex-col items-center justify-center' style={{fontFamily: 'Poppins'}}>
          <p className="mx-8 mt-4 mb-6 text-sm font-light text-center">
            DMCA: OLATV es un distribuidor externo y autorizado de servicios digitales de material de entretención que suministra en su totalidad VOD NETWORK, quienes cumplen con toda norma legal según el país de origen desde el cual distribuyen el servicio. VOD NETWORK no almacena ni sube en su sitio o servidor, cualquier archivo de vídeo, película, archivo multimedia de ningún tipo o cualquier otro material protegido por derechos de autor. VOD NETWORK y OLATV no poseen ni comercializan decodificadores de ningún tipo de TV satelital. OLATV cumple solo en calidad de distribuidor de servicio para el alcance nacional del territorio venezolano y de sudamerica.
          </p>
          <img className="w-24 mb-6" src={logo} alt="Logo" />
          <p className='mb-6'>
            © 2023 OlaTV. Sitio web creado por GethyMX
          </p>
        </div>
        </>
    )
}