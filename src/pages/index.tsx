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
    text: 'Itinerary'
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
  subTitle: '31 May 2025',
  text: 'Listen to the music'
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
  title: 'Ceramony, Social hour, Dinner and Party',
  subtitle: 'Cortijo San Antonio',
  text: 'Ctra Málaga-Campillos,Km 32,5,29566 Casarabonela, Malaga, España',
  time: '18:30 pm',
  link: {
    url: 'https://www.google.com/maps/place/Cortijo+San+Antonio/@36.814201,-4.7913,17z/data=!3m1!4b1!4m9!3m8!1s0xd72c1207284ea3d:0x5ab8c1ab1bfdeb83!5m2!4m1!1i2!8m2!3d36.814201!4d-4.7913!16s%2Fg%2F1v8j1svx?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D',
    text: 'See directions'
  }
};

const timelineData = [
  {
    img: '/media/itinararyRings.png',
    alt: 'wedding rings',
    time: '19:00',
    text: 'Ceremony'
  },
  {
    img: '/media/itinararyGlases.png',
    alt: 'martini glass',
    time: '20:00',
    text: 'Cocktails'
  },
  {
    img: '/media/itinararyPlater.png',
    alt: 'wedding plater',
    time: '21:00',
    text: 'Dinner'
  },
  {
    img: '/media/itinararyMusic.png',
    alt: 'wedding music',
    time: '23:00',
    text: 'Party'
  },
  {
    img: '/media/itinararyCar.png',
    alt: 'wedding car',
    time: '04:00',
    text: 'Time to say goodbye'
  }
];

const galleryData = {
  title: 'Photo Gallery',
  text: 'When you realize that you want to spend the rest of your life with one person, you want the rest of your life start as soon as possible'
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
  text: 'We want you to only worry about having a good time, so you have at your disposal a bus service that will take you to the venue.',
  details: [
    {
      text: 'Depart',
      time: '18:00 pm'
    },
    {
      text: 'First return',
      time: '01:00 am'
    },
    {
      text: 'Second return',
      time: '04:00 am'
    }
  ],
  pickup: 'Pick up point is:',
  url: {
    href: 'https://maps.app.goo.gl/sLAne7uKQcxhz9N89',
    text: 'Tivoli world entrance Benalmádena'
  }
};

const hotelData = {
  title: 'Hotels',
  text: 'We know that many of you come from different places and countries so here we leave you a list of hotels to help you with your search.',
  details: [
    {
      title: 'Hotels Benalmádena',
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
      title: 'Hotels Torremolinos',
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
    }
  ]
};

const dresscodeData = {
  title: 'Dresscode',
  img: [
    {
      src: '/media/dresscodeImage1.png',
      alt: 'Green plant'
    },
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
    text: 'Here are some ideas'
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
  title: 'Wedding gifts',
  subtitle:
    'Our best gift is having you with us, but if you would like to leave us a little something',
  bank: 'ES26 15830001 1090 4336 6746',
  number: '656683979'
};

const rsvpData = {
  name: '',
  img: {
    src: '/media/rsvpImage1.png',
    alt: 'Yellow flower'
  },
  title: 'Confirmation your assistance',
  text: 'We hope to see you there!',
  text2:
    'Please, press the button below to proceed to the confirmation form and help us keep up to date with the numbers',
  text3: 'Thank you!',
  link: {
    url: 'https://forms.gle/XHmX83QXeTfyxNkTA',
    text: 'Confirm your RSVP'
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
  subtitle: 'You are invited to our wedding album.',
  paragraph: 'Press the button below to upload the photos you take to our album.',
  footer: 'Thank you for helping us create amazing memories.',
  url: {
    href: 'https://drive.google.com/drive/folders/1sUR8OoChkUl_nDklhxwNHcGsEJCxZoGR?usp=drive_link',
    text: 'Go to photo album'
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

        <Countdown text={'How long till the wedding'} time={1748714400000} />

        {/*<Calendar year={2025} month={4} />*/}

        <Details {...detailsData} />

        <Timeline timeline={timelineData} title={'Itinerary'} />

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
