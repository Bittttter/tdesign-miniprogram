const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images/';
const swiperList = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper3.png`,
  `${imageCdn}/swiper4.png`,
  `${imageCdn}/swiper5.png`,
];

Component({
  data: {
    current: 3,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
    navigation: { type: '', showControls: true },
  },
});
