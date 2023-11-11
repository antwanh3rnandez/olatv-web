
import { 
  IconBrandFacebook, 
  IconBrandTelegram,
  IconBrandWhatsapp, 
} from '@tabler/icons-react/';

export const Footer = () => {
    return (
        <>
        <div className='flex flex-col justify-center items-center' id='contacto'>
          <div className='xl:w-1/2 mb-12 xl:mb-20'>
            <p className='text-3xl text-center' style={{fontFamily: 'Lexend'}}>
              <p style={{fontStyle: 'normal'}} className='text-redprimary'>
                Mantente informado de nuevas actualizaciones en nuestros canales informativos.
              </p>
            </p>
          </div>
          <div className='mb-12 xl:mb-20 flex flex-col xl:flex-row gap-4 lg:gap:16 xl:gap-32'>
            <div className='flex flex-row'>
              <IconBrandFacebook size={64} className='text-redprimary'/>
              <div className='flex flex-col items-start justify-center'>
              <p className='md:text-xl xl:text-2xl font-normal text-start'>Facebook Fanpage</p>
              <p style={{fontStyle: 'italic'}}>Faceboook Oficial</p>
              </div>
            </div>
            <div className='flex flex-row'>
              <IconBrandTelegram size={64} className='text-redprimary'/>
              <div className='flex flex-col items-start justify-start'>
              <p className='md:text-xl xl:text-2xl font-normal text-start'>Canal en Telegram</p>
              <p style={{fontStyle: 'italic'}}>Grupo Informativo</p>
              </div>
            </div>
            <div className='flex flex-row'>
              <IconBrandWhatsapp size={64} className='text-redprimary'/>
              <div className='flex flex-col items-start justify-start'>
              <p className='md:text-xl xl:text-2xl font-normal text-start'>WhatsApp</p>
              <p style={{fontStyle: 'italic'}}>Online de Lunes a Viernes</p>
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
        <div className='w-full flex flex-col items-center justify-center' style={{fontFamily: 'Poppins'}}>
          <p className="mx-8 mt-4 mb-8 text-sm font-light text-center">
          DMCA: OLATV es un distribuidor externo y autorizado de servicios digitales de material de entretención que suministra en su totalidad VOD NETWORK, quienes cumplen con toda norma legal según el país de origen desde el cual distribuyen el servicio. VOD NETWORK no almacena ni sube en su sitio o servidor, cualquier archivo de vídeo, película, archivo multimedia de ningún tipo o cualquier otro material protegido por derechos de autor. VOD NETWORK y OLATV no poseen ni comercializan decodificadores de ningún tipo de TV satelital. OLATV cumple solo en calidad de distribuidor de servicio para el alcance nacional del territorio venezolano y de sudamerica.
          </p>
          <p className='mb-6'>
            © 2023 OlaTV. Sitio web creado por GethyMX
          </p>
        </div>
        </>
    )
}