import React from 'react';
import styled from '@emotion/styled';
import WeatherIcon from './WeatherIcons.js';
import { ReactComponent as AirFlowIcon } from '../images/airFlow.svg';
import { ReactComponent as RainIcon } from '../images/rain.svg';
import { ReactComponent as RefreshIcon } from '../images/refresh.svg';
import { ReactComponent as LoadingIcon } from '../images/loading.svg';
import { ReactComponent as CogIcon } from '../images/cog.svg';

const WeatherCardWrapper = styled.div`
  position: relative;
  min-width: 330px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.foregroundColor};
  box-sizing: border-box;
  padding: 30px 15px;
  max-width: 50%;

  @media (max-width: 968px) {
    margin-top: 20px;
    min-width: 330px;
  }
`;

const Location = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.titleColor};
  margin-bottom: 20px;

  @media (max-width: 968px) {
    font-size: 25px;
  }
`;

const Description = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 30px;
  pointer-events: none;

  @media (max-width: 968px) {
    font-size: 10px;
    margin-bottom: 10px;
  }
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  pointer-events: none;

  @media (max-width: 968px) {
    margin-bottom: 10px;
  }
`;

const Temperature = styled.div`
  color: ${({ theme }) => theme.temperatureColor};
  font-size: 96px;
  font-weight: 300;
  display: flex;
  pointer-events: none;

  @media (max-width: 968px) {
    font-size: 65px;
  }
`;

const Celsius = styled.div`
  font-weight: normal;
  font-size: 42px;
  pointer-events: none;
`;

const AirFlow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 20px;

  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;

const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  pointer-events: none;

  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;

const Refresh = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 12px;
  display: inline-flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.textColor};

  svg {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    animation: rotate infinite 1.5s linear;
    animation-duration: ${({ isLoading }) => (isLoading ? '1.5s' : '0s')};
  }

  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

const Cog = styled(CogIcon)`
  position: absolute;
  top: 30px;
  right: 15px;
  width: 15px;
  height: 15px;
  cursor: pointer;

  path {
    pointer-events: none;

`;

const WeatherCard = (props) => {
  // console.log(props);
  const { weatherElement, moment, fetchData, setCurrentPage, cityName } = props;
  const {
    observationTime,
    temperature,
    windSpeed,
    description,
    weatherCode,
    rainPossibility,
    comfortability,
    isLoading,
  } = weatherElement;

  return (
    <WeatherCardWrapper>
      <Cog onClick={() => setCurrentPage('WeatherSetting')} />
      <Location>{cityName}</Location>
      <Description>
        {description} {comfortability}
      </Description>
      <CurrentWeather>
        <Temperature>
          {Math.round(temperature)} <Celsius>°C</Celsius>
        </Temperature>
        <WeatherIcon
          currentWeatherCode={weatherCode}
          moment={moment || 'day'}
        />
      </CurrentWeather>
      <AirFlow>
        <AirFlowIcon />
        {windSpeed} m/h
      </AirFlow>
      <Rain>
        <RainIcon />
        {Math.round(rainPossibility)} %
      </Rain>
      <Refresh onClick={fetchData} isLoading={isLoading}>
        最後觀測時間：
        {new Intl.DateTimeFormat('zh-TW', {
          hour: 'numeric',
          minute: 'numeric',
        }).format(new Date(observationTime))}{' '}
        {isLoading ? <LoadingIcon /> : <RefreshIcon />}
      </Refresh>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
