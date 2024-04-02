// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Item = {
  id: number;
  image: string;
  title: string;
  date: string;
  location: string;
  price: number;
  on_bid: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {
  const data: Item[] = [
    {
      id: 1,
      image:
        'https://s3-alpha-sig.figma.com/img/4ef8/5249/815a637e9b42f99b2c18b7d9dddd1079?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFdQUIjzw5IOa1~sJAaPx8mL7QA6~KqdeVJgzE75~OCj4DOrHSMP6SUXlTxLSRX9Xbdu9-T0YnjGWNeK7fJqp7dXrRAg1l4gUZieLO~zpmaGue5lz9a3QN90n2Ox71E8C2uB7nKqLx~H88BDLpbvqdefSz0Rrz-E8ESrFvTLwSJwJDZyZdC-wsro9BtYj0I1ZHCsAPPmWY0Gm~oKxA03bfZ7dfy80-JAZm5EKPYMnSBkkxhFVaZVk4buHQVQf9pmwWfB~nAX7Vr557314rep8Q~RRsqWur8XnWrJVmaFGECwRFAImfdUI7pniYjx39FJuTtjeY8F4WDwWh8IyltwaQ__',
      title: "Substance: Albert Hofmann's ",
      date: '14-Mar-2024',
      location: '72 Londonderry Parkway',
      price: 253986,
      on_bid: true,
    },
    {
      id: 2,
      image: '/assets/main/landingPage/sellerFav/image1.png',
      title: 'Red 2',
      date: '14-Dec-2023',
      location: '880 Monument Pass',
      price: 289212,
      on_bid: false,
    },
    {
      id: 3,
      image: '/assets/main/landingPage/sellerFav/image2.png',
      title: 'Maria',
      date: '23-Jan-2024',
      location: '2960 Thompson Point',
      price: 237766,
      on_bid: true,
    },
    {
      id: 4,
      image: '/assets/main/landingPage/sellerFav/image3.png',
      title: 'No Greater Love',
      date: '07-Oct-2023',
      location: '1250 Graceland Alley',
      price: 203877,
      on_bid: true,
    },
    {
      id: 5,
      image: '/assets/main/landingPage/sellerFav/image4.png',
      title: 'Journey to the Sun ',
      date: '28-May-2023',
      location: '3 Oneill Street',
      price: 218353,
      on_bid: true,
    },
    {
      id: 6,
      image: '/assets/main/landingPage/sellerFav/image5.png',
      title: 'God Save the King',
      date: '20-Apr-2023',
      location: '243 Glacier Hill Crossing',
      price: 259206,
      on_bid: true,
    },
    {
      id: 7,
      image: '/assets/main/landingPage/sellerFav/image6.png',
      title: 'Hell Night',
      date: '22-Nov-2023',
      location: '075 Montana Court',
      price: 249051,
      on_bid: true,
    },
    {
      id: 8,
      image: '/assets/main/landingPage/sellerFav/imageConcert1.png',
      title: 'Throne of Blood (Kumonosu jô)',
      date: '16-Apr-2023',
      location: '97 Maple Place',
      price: 211140,
      on_bid: false,
    },
    {
      id: 9,
      image: '/assets/main/landingPage/sellerFav/imageConcert2.png',
      title: 'Missionary',
      date: '19-Mar-2023',
      location: '9448 Maywood Circle',
      price: 281870,
      on_bid: false,
    },
    {
      id: 10,
      image: '/assets/main/landingPage/sellerFav/imageConcert3.png',
      title: 'My Fellow Americans',
      date: '25-Feb-2024',
      location: '461 Delaware Drive',
      price: 282839,
      on_bid: false,
    },
    {
      id: 11,
      image: '/assets/main/landingPage/sellerFav/imageConcert4.png',
      title: 'Hansel & Gretel',
      date: '06-Mar-2024',
      location: '1082 Springs Avenue',
      price: 287991,
      on_bid: false,
    },
    {
      id: 12,
      image: '/assets/main/landingPage/sellerFav/imageConcert5.png',
      title: 'Color of Paradise, ',
      date: '19-Nov-2023',
      location: '28 Sycamore Trail',
      price: 284351,
      on_bid: false,
    },
    {
      id: 13,
      image: '/assets/main/landingPage/sellerFav/imageConcert6.png',
      title: 'Herbie Goes to Monte Carlo',
      date: '16-Aug-2023',
      location: '8883 Bunker Hill Point',
      price: 220229,
      on_bid: true,
    },
    {
      id: 14,
      image: '/assets/main/landingPage/sellerFav/imageConcert7.png',
      title: 'Hollywood Complex, The',
      date: '03-Jul-2023',
      location: '23681 Anthes Court',
      price: 272352,
      on_bid: false,
    },
    {
      id: 15,
      image: '/assets/main/landingPage/sellerFav/imageConcert8.png',
      title: 'Young Black Stallion, The',
      date: '25-Jan-2024',
      location: '59 American Junction',
      price: 284136,
      on_bid: false,
    },
    {
      id: 16,
      image: '/assets/main/landingPage/sellerFav/imageConcert9.png',
      title: 'Zoot Suit',
      date: '08-Jul-2023',
      location: '808 Thompson Park',
      price: 205561,
      on_bid: false,
    },
    {
      id: 17,
      image: '/assets/main/landingPage/sellerFav/imageConcert10.png',
      title: 'Night Across the Street ',
      date: '14-May-2023',
      location: '16 Miller Alley',
      price: 200640,
      on_bid: false,
    },
    {
      id: 18,
      image: '/assets/main/landingPage/sellerFav/imageConcert11.png',
      title: 'Almost You',
      date: '26-May-2023',
      location: '458 Utah Lane',
      price: 225300,
      on_bid: true,
    },
    {
      id: 19,
      image: '/assets/main/landingPage/sellerFav/imageConcert12.png',
      title: 'Asterix & Obelix',
      date: '04-Feb-2024',
      location: '1073 Hagan Trail',
      price: 243863,
      on_bid: true,
    },
    {
      id: 20,
      image: '/assets/main/landingPage/sellerFav/imageConcert13.png',
      title: 'Permanent Midnight',
      date: '20-Sep-2023',
      location: '2687 Crowley Circle',
      price: 238999,
      on_bid: true,
    },
    {
      id: 21,
      image:
        'https://i0.wp.com/thecosmicclash.com/wp-content/uploads/2021/11/DSC01757.jpg?resize=1024%2C710&ssl=1',
      title: 'Japanese Breakfast',
      date: '20-Sep-2023',
      location: '2687 Bandung',
      price: 235999,
      on_bid: true,
    },
  ];

  res.status(200).json(data);
}
