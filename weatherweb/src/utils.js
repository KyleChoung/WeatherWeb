export const availableLocations = [
  {
    tag: 'yilan_country',
    cityName: '宜蘭縣',
    locationName: '宜蘭',
    sunriseCityName: '宜蘭',
  },
  {
    tag: 'chiayi_city',
    cityName: '嘉義市',
    locationName: '嘉義',
    sunriseCityName: '嘉義',
  },
  {
    tag: 'pingtung_country',
    cityName: '屏東縣',
    locationName: '恆春',
    sunriseCityName: '屏東',
  },
  {
    tag: 'yunlin_country',
    cityName: '雲林縣',
    locationName: '雲林',
    sunriseCityName: '屏東',
  },
  {
    tag: 'taitung_country',
    cityName: '臺東縣',
    locationName: '臺東',
    sunriseCityName: '臺東',
  },
  {
    tag: 'taipei_city',
    cityName: '臺北市',
    locationName: '臺北',
    sunriseCityName: '臺北',
  },
  {
    tag: 'kinmen_country',
    cityName: '金門縣',
    locationName: '金門',
    sunriseCityName: '金門',
  },
  {
    tag: 'taoyuan_country',
    cityName: '桃園市',
    locationName: '新屋',
    sunriseCityName: '桃園',
  },
  {
    tag: 'changhua_country',
    cityName: '彰化縣',
    locationName: '彰師大',
    sunriseCityName: '彰化',
  },
  // {
  //   cityName: '嘉義縣',
  //   locationName: '阿里山',
  //   sunriseCityName: '嘉義',
  // },
  {
    tag: 'kaohsiung_city',
    cityName: '高雄市',
    locationName: '高雄',
    sunriseCityName: '高雄',
  },
  {
    tag: 'keelung_city',
    cityName: '基隆市',
    locationName: '基隆',
    sunriseCityName: '基隆',
  },
  {
    tag: 'tainan_city',
    cityName: '臺南市',
    locationName: '南區中心',
    sunriseCityName: '臺南',
  },
  {
    tag: 'nantou_country',
    cityName: '南投縣',
    locationName: '日月潭',
    sunriseCityName: '南投',
  },
  {
    tag: 'taichung_city',
    cityName: '臺中市',
    locationName: '臺中',
    sunriseCityName: '臺中',
  },
  {
    tag: 'hsinchu_country',
    cityName: '新竹縣',
    locationName: '新竹',
    sunriseCityName: '新竹',
  },
  {
    tag: 'hualien_country',
    cityName: '花蓮縣',
    locationName: '花蓮',
    sunriseCityName: '花蓮',
  },
  {
    tag: 'lienchiang_country',
    cityName: '連江縣',
    locationName: '馬祖',
    sunriseCityName: '馬祖',
  },
  {
    tag: 'penghu_country',
    cityName: '澎湖縣',
    locationName: '澎湖',
    sunriseCityName: '澎湖',
  },
  {
    tag: 'new_taipei_city',
    cityName: '新北市',
    locationName: '板橋',
    sunriseCityName: '新北市',
  },
  // {
  //   tag: 'miaoli_country',
  //   cityName: '苗栗縣',
  //   locationName: '苗栗縣',
  //   sunriseCityName: '苗栗縣',
  // },
];

export const findLocation = (cityName) => {
  return availableLocations.find((location) => location.cityName === cityName);
};

export const findMap = (tag) => {
  const map = availableLocations.find((location) => location.tag === tag);
  return map?.cityName || undefined;
};
