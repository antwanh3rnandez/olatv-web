import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export function CustomSplide({ id, images, extraClass, perPage }) {

    return (
      <Splide
        id={id}
        className={extraClass}
        options={{
          type: 'loop',
          perPage: perPage,
          perMove: 1,
          pagination: false,
          autoplay: true, // Utilizar directamente la opción autoplay
        interval: 2000, // Puedes ajustar el intervalo entre diapositivas aquí
          speed: 1000,
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index} id={`${id}-slide${index}`}>
            <img src={image} alt={`Image ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>
    );
  }