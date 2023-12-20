import { useTheme } from "../../components/ThemeProvider"
import logoLight from '../../assets/logo-dark.png';
import logoDark from '../../assets/logo-white.png';

export const Footer = () => {

  // Obtén el estado actual del tema usando el hook useTheme
  const { theme } = useTheme();

  // Determina qué logo utilizar según el tema
  const logo = theme === "dark" ? logoDark : logoLight;

    return (
        <>
        <div className='shadow-2xl mt-6 flex flex-row items-center justify-center'>
            <div className="w-[25%] h-24 bg-redprimary" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0% 0%)' }}>
            </div>
            <div className="w-[75%] h-24 bg-redprimary" style={{ clipPath: 'polygon(100% 100%, 0% 100%, 100% 0%)' }}>
            </div>
        </div>
        <div className='bg-background pt-6 w-full flex flex-col items-center justify-center' style={{fontFamily: 'Poppins'}}>
          <p className="mx-8 mt-4 mb-6 text-sm font-light text-center">
            DMCA: InterTV VIP es un distribuidor externo y autorizado de servicios digitales de material de entretenimiento que suministra en su totalidad VOD NETWORK, quienes cumplen con toda norma legal según el país de origen desde el cual distribuyen el servicio. VOD NETWORK no almacena ni sube en su sitio o servidor, cualquier archivo de vídeo, película, archivo multimedia de ningún tipo o cualquier otro material protegido por derechos de autor. VOD NETWORK y InterTV VIP no poseen ni comercializan decodificadores de ningún tipo de TV satelital. InterTV VIP cumple solo en calidad de distribuidor de servicio para el alcance nacional del territorio venezolano y de sudamerica.
          </p>
          <img className="w-24 mb-6" src={logo} alt="Logo" />
          <p className='mb-6'>
            © 2023 InterTV VIP. Sitio web creado por GethyMX
          </p>
        </div>
        </>
    )
}