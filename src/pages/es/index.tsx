// Global imports
import Head from 'next/head';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// Style imports
import styles from '@/styles/Home.module.scss';

// Component imports
import { Countdown } from '@/components/Countdown';
import { Header } from '@/components/Header';
import { Hero } from '@/components';
import { Details } from '@/components/Details';
import { Timeline } from '@/components/Timeline';
import { Gallery } from '@/components/Gallery';
import { Transport } from '@/components/Transport';
import { Hotel } from '@/components/Hotel';
import { Dresscode } from '@/components/Dresscode';
import { Gift } from '@/components/Gift';
import { Rsvp } from '@/components/Rsvp';
import { Photos } from '@/components/Photos';
import { useRouter } from 'next/router';

// Hook imports
import { useCookies } from '@/hooks/useCookies';
import PhotoSlider from '@/components/Slider';

// Static data
const navLinks = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: 'https://forms.gle/vk3TJ18so9DT87JD7',
    text: 'RSVP'
  },
  {
    href: '#itinerary',
    text: 'Itinerario'
  }
];

const heroData = {
  img: [
    {
      src: '/media/heroFlowers.png',
      alt: 'awsome hero image'
    },
    {
      src: '/media/heroImage.jpg',
      alt: 'picture of the happy couple'
    }
  ],
  title: 'David & Rebeca',
  subTitle: '31 Mayo 2025',
  text: 'Escucha nuestra canción'
};

const detailsData = {
  groomName: 'David Martin Mitchell',
  brideName: 'Rebeca Maldonado',
  img: [
    {
      src: '/media/detailsImage.png',
      alt: 'dark flower'
    },
    {
      src: '/media/detailsImage.jpg',
      alt: 'Foto of the veniew'
    }
  ],
  title: 'Ceremonia, Cocktel, Cena y Fiesta',
  subtitle: 'Cortijo San Antonio',
  text: 'Ctra Málaga-Campillos,Km 32,5,29566 Casarabonela, Malaga, España',
  time: '18:30 pm',
  link: {
    url: 'https://www.google.com/maps/place/Cortijo+San+Antonio/@36.814201,-4.7913,17z/data=!3m1!4b1!4m9!3m8!1s0xd72c1207284ea3d:0x5ab8c1ab1bfdeb83!5m2!4m1!1i2!8m2!3d36.814201!4d-4.7913!16s%2Fg%2F1v8j1svx?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D',
    text: 'Ver dirección'
  }
};

const timelineData = [
  {
    img: '/media/itinararyRings.png',
    alt: 'wedding rings',
    time: '19:00',
    text: 'Ceremonia'
  },
  {
    img: '/media/itinararyGlases.png',
    alt: 'martini glass',
    time: '20:00',
    text: 'Cocktel'
  },
  {
    img: '/media/itinararyPlater.png',
    alt: 'wedding plater',
    time: '21:00',
    text: 'Cena'
  },
  {
    img: '/media/itinararyMusic.png',
    alt: 'wedding music',
    time: '23:00',
    text: 'Fiesta'
  },
  {
    img: '/media/itinararyCar.png',
    alt: 'wedding car',
    time: '04:00',
    text: 'Despedida'
  }
];

const galleryData = {
  title: 'Galleria de photos',
  text: 'Cuando te das cuenta de que quieres pasar el resto de tu vida con una persona, quieres que el resto de tu vida comience lo antes posible.'
};

const transportData = {
  images: [
    {
      src: '/media/transportImage.png',
      alt: 'picture of a bus'
    },
    {
      src: '/media/transportImage2.png',
      alt: 'picture of a thistle'
    }
  ],
  header: 'Transport service',
  text: 'Queremos que sólo te preocupes de pasarlo bien, por eso tienes a tu disposición un servicio de autobús que te llevará hasta el recinto.',
  details: [
    {
      text: 'Ida',
      time: '18:00 pm'
    },
    {
      text: 'Primera vuelta',
      time: '01:00 am'
    },
    {
      text: 'Segunda vuelta',
      time: '04:00 am'
    }
  ],
  pickup: 'El punto de recogida es:',
  url: {
    href: 'https://maps.app.goo.gl/sLAne7uKQcxhz9N89',
    text: 'Entrada Tívoli Benalmádena'
  }
};

const hotelData = {
  title: 'Hoteles',
  text: 'Sabemos que muchos de vosotros venís de diferentes lugares y países por eso aquí os darnos un listado de hoteles para ayudaros en vuestra búsqueda.',
  details: [
    {
      title: 'Hoteles Benalmádena',
      hotel: [
        {
          text: 'Hotel Benalma',
          url: 'https://www.hotelbenalma.com/en/'
        },
        {
          text: 'Hotel Siroco',
          url: 'https://www.besthotels.es/en/destinations-and-hotels/best-siroco.html'
        },
        {
          text: 'Hostal Sol y Miel',
          url: 'https://www.booking.com/hotel/es/hostal-sol-y-miel.es.html'
        }
      ]
    },
    {
      title: 'Hoteles Torremolinos',
      hotel: [
        {
          text: 'Sol Principe',
          url: 'https://www.melia.com/en/hotels/spain/torremolinos/sol-principe'
        },
        {
          text: 'BLUESEA Gran Cervantes',
          url: 'https://www.blueseahotels.com/en/hoteles/destinos/costa-del-sol/torremolinos/bluesea-gran-cervantes'
        }
      ]
    }
  ],
  img: [
    {
      src: '/media/hotelImage.png',
      alt: 'Yellow flower'
    },
    {
      src: '/media/hotelImage2.png',
      alt: 'Drawing of a sunflower'
    }
  ]
};

const dresscodeData = {
  title: 'Código de vestimenta',
  img: [
    {
      src: 'https://davidandrebeca.my.canva.site/media/729b1d11e2346feeacdd715a72c3d958.svg',
      alt: 'Drawing of suit and dress'
    },
    {
      src: 'https://davidandrebeca.my.canva.site/media/c444d11693035bfdf68cf9d9c4847dd5.svg',
      alt: 'Drawing of a clothes label'
    },
    {
      src: 'https://davidandrebeca.my.canva.site/media/be8b48b55e39b1e1d75af2021037260d.svg',
      alt: 'Pinterest logo'
    },
    {
      src: 'https://davidandrebeca.my.canva.site/media/554096e51d88b0acae1e0ce823b81fc3.svg',
      alt: 'Drawing of people'
    }
  ],
  typeText: [
    {
      text: 'Formal'
    },
    {
      text: 'Semi formal'
    }
  ],
  link: {
    url: 'https://pin.it/2zfKv6wM1',
    text: 'Aquí hay algunas ideas'
  }
};
const giftData = {
  img: [
    {
      src: '/media/giftImage1.png',
      alt: 'Pink flowers'
    },
    {
      src: '/media/giftImage2.png',
      alt: 'Bizum logo'
    },
    {
      src: '/media/giftImage3.png',
      alt: 'Revolut tag'
    }
  ],
  title: 'Regalo',
  subtitle: 'Nuestro mejor regalo eres tú, pero si quieres tener un detalle',
  bank: 'ES26 15830001 1090 4336 6746',
  number: '656683979'
};

const rsvpData = {
  name: '',
  img: {
    src: '/media/rsvpImage1.png',
    alt: 'Yellow flower'
  },
  title: 'Confirmación de tu asistencia',
  text: '¡Esperamos verte allí!',
  text2:
    'Por favor, presiona el botón a continuación para pasar al formulario de confirmación y así ayudarnos a saber quienes van a asistír el día de la boda',
  text3: '¡Gracias!',
  link: {
    url: 'https://forms.gle/XHmX83QXeTfyxNkTA',
    text: 'Confirma tu asistencia'
  }
};

const sliderImages = [
  '/media/sliderImage.jpg',
  '/media/sliderImage2.jpg',
  '/media/sliderImage3.jpg',
  '/media/sliderImage4.jpg',
  '/media/sliderImage6.jpg',
  '/media/sliderImage7.jpg',
  '/media/sliderImage8.jpg'
];

const photoData = {
  title: 'Photo album',
  subtitle: 'Os invitamos a nuestro álbum de Boda.',
  paragraph:
    'Haz clic en el botón para acceder y poder añadir las fotos que hagas durante nuestra boda.',
  footer: '¡Gracias por ayudarnos a construir nuestro tesoro de recuerdos!',
  url: {
    href: 'https://drive.google.com/drive/folders/1sUR8OoChkUl_nDklhxwNHcGsEJCxZoGR?usp=drive_link',
    text: 'Ir al álbum de fotos'
  }
};

export default function Home() {
  const searchParams = useSearchParams();
  const cookies = useCookies();

  useEffect(() => {
    const inviteCode = searchParams.get('invite');
    console.log('inviteCode: ', inviteCode);
    if (inviteCode) cookies.set('inviteCode', inviteCode);
  });
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth > 768) {
      router.push('/not-for-desktop');
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>David & Rebeca&apos;s wedding</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header links={navLinks} />

      <main className={styles.mainView}>
        <Hero {...heroData} />

        <Countdown text={'¿Cuánto falta para la boda?'} time={1748714400000} />

        {/*<Calendar year={2025} month={4} />*/}

        <Details {...detailsData} />

        <Timeline timeline={timelineData} title={'Itinerario'} />

        <Gallery {...galleryData} />
        <PhotoSlider images={sliderImages} />

        <Transport {...transportData} />

        <Hotel {...hotelData} />

        <Dresscode {...dresscodeData} />

        <Gift {...giftData} />

        <Rsvp {...rsvpData} />
        <Photos {...photoData} />
      </main>
    </>
  );
}
