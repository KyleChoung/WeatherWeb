import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import WeatherCard from './Components/WeatherCard';
import useWeatherApi from './useWeatherApi';
import WeatherSetting from './Components/WeatherSetting';
import { findLocation, findMap } from './utils';
import { ReactComponent as MapIcon } from './images/map.svg';

const theme = {
  light: {
    backgroundColor: '#ededed',
    foregroundColor: '#f9f9f9',
    boxShadow: '0 1px 3px 0 #999999',
    titleColor: '#212121',
    temperatureColor: '#757575',
    textColor: '#828282',
  },
  dark: {
    backgroundColor: '#1F2022',
    foregroundColor: '#121416',
    boxShadow:
      '0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)',
    titleColor: '#f9f9fa',
    temperatureColor: '#dddddd',
    textColor: '#cccccc',
  },
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 968px) {
    flex-direction: column-reverse;
  }
`;

const Map = styled(MapIcon)`
  height: 75%;
  width: 75%;
  flex: 3;
  max-width: 50%;

  path {
    stroke: ${({ theme }) => theme.textColor};
    fill: transparent;
    transition: 0.5s;
    cursor: pointer;
  }

  path:hover {
    fill: rgb(108, 98, 41);
    transform: translate(-5px, -5px);
  }

  @media (max-width: 968px) {
    min-width: 390px;
  }
`;

const App = () => {
  const storageCity = localStorage.getItem('cityName');
  //從setting那邊先取得所選地區，傳給APP，再用useweatherApi(地區)去改變資料
  const [currentCity, setCurrentCity] = useState(storageCity || '屏東縣');
  //utils去找輸入的地區
  const currentLocation = findLocation(currentCity) || {};

  //取useWeatherApi兩個方法
  const [weatherElement, fetchData] = useWeatherApi(currentLocation); //這邊有錯誤

  const [currentTheme, setCurrentTheme] = useState('light');
  const [currentPage, setCurrentPage] = useState('WeatherCard');
  const [moment, setmoment] = useState('day');

  const hr = () => {
    var hr = new Date().getHours();
    if ((hr >= 18 && hr <= 24) || (hr >= 0 && hr <= 6)) {
      return 'night';
    } else {
      return 'day';
    }
  };

  const paths = document.querySelectorAll('path');

  paths.forEach((e) => {
    e.onclick = function () {
      const findcityname = findMap(this.dataset.name);
      setCurrentCity(findcityname);
      setCurrentPage('WeatherCard');
    };
  });

  useEffect(() => {
    setCurrentTheme(moment === 'day' ? 'light' : 'dark');
  }, [moment]);

  useEffect(() => {
    setmoment(hr);
    localStorage.setItem('cityName', currentCity);
  }, [currentCity]);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Container>
        <Map id="Map" />
        {currentPage === 'WeatherCard' && (
          <WeatherCard
            cityName={currentLocation.cityName}
            weatherElement={weatherElement || undefined} //各項資料
            moment={moment} //現在時刻
            fetchData={fetchData} //把資料傳過去 這邊才能右下角重轉取資料
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 'WeatherSetting' && (
          <WeatherSetting
            cityName={currentLocation.cityName}
            setCurrentCity={setCurrentCity}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
