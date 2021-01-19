import styled from 'styled-components';

import { shade } from 'polished';

import escalatorImage from '../../assets/escalator.png';
import natureImage from '../../assets/nature.png';
import dailyImage from '../../assets/daily.png';
import togetherImage from '../../assets/together.png';
import analysisImage from '../../assets/analysis.png';
import picturesImage from '../../assets/pictures.png';

interface CandleProps {
  size: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fff;
`;

export const Escalator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 92vh;
  width: 100%;

  background: url(${escalatorImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Logo = styled.img`
  width: 148px;
  height: 116px;

  margin-bottom: 20px;
`;

export const EscalatorTitle = styled.p`
  text-align: center;

  font-weight: bold;
  font-size: 70px;

  margin: 50px 0;

  max-width: 50%;
  color: #fff;

  @media only screen and (max-width: 895px) {
    max-width: 90%;
    font-size: 40px;
  }
`;

export const Button = styled.button`
  background: #fff;
  outline: 0;
  border: 0;

  width: 245px;
  height: 51px;

  border: 1px solid #fff;

  transition: all 400ms ease;

  span {
    transition: all 400ms ease;
    text-transform: uppercase;
    color: #222;
    font-weight: bold;
  }

  &:hover {
    background: #307bcf;
    border: 1px solid #fff;

    > span {
      color: #fff;
    }
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 80vw;
  height: auto;

  padding: 30px 40px;

  @media only screen and (max-width: 600px) {
    padding: 20px 5px;
    width: 90vw;
  }
`;

export const CategoriesTitle = styled.p`
  font-weight: bold;
  font-size: 60px;
  color: #222;

  @media only screen and (max-width: 360px) {
    font-size: 40px;
  }
`;

export const CategoriesDescription = styled.span`
  font-weight: bold;
  color: #222;

  margin-bottom: 30px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: 30px 0;
`;

export const Nature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 30px;

  height: 45vh;
  min-width: 400px;

  background-image: url(${natureImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  color: #fff;

  transition: all 400ms ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  h1 {
    font-size: 60px;
  }

  span {
    font-size: 20px;
  }

  @media only screen and (max-width: 1714px) {
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 900px) {
    min-width: auto;
    width: 100%;

    margin-bottom: 50px;
  }
`;

export const Daily = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 30px;

  min-width: 350px;
  width: 52vw;
  height: 45vh;

  background-image: url(${dailyImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  color: #fff;

  transition: all 400ms ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  h1 {
    font-size: 60px;
  }

  span {
    font-size: 20px;
  }

  @media only screen and (max-width: 1736px) {
    min-width: 500px;
  }

  @media only screen and (max-width: 900px) {
    min-width: auto;
    width: 100%;
  }
`;

export const Together = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 30px;

  width: 100%;
  height: 45vh;

  background-image: url(${togetherImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  color: #fff;

  transition: all 400ms ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  h1 {
    font-size: 60px;
  }

  span {
    font-size: 20px;
  }
`;

export const Analysis = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 30px;

  min-width: 350px;
  width: 50vw;
  height: 45vh;

  background-image: url(${analysisImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  color: #fff;

  transition: all 400ms ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  h1 {
    font-size: 60px;
  }

  span {
    font-size: 20px;
  }

  @media only screen and (max-width: 1714px) {
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 900px) {
    min-width: auto;
    width: 100%;

    margin-bottom: 50px;
  }
`;

export const Pictures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 30px;

  height: 45vh;
  min-width: 450px;

  background-image: url(${picturesImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  color: #fff;

  transition: all 400ms ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  h1 {
    font-size: 60px;
  }

  span {
    font-size: 20px;
  }

  @media only screen and (max-width: 900px) {
    min-width: auto;
    width: 100%;
  }
`;

export const GrowthPlans = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;

  margin-top: 40px;
  padding: 80px 0;

  background: linear-gradient(rgba(0, 0, 0, 0.04), #fff);
`;

export const GrowthTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 76%;

  h1 {
    text-transform: lowercase;

    font-weight: bold;
    font-size: 60px;
    color: #222;

    @media only screen and (max-width: 360px) {
      font-size: 40px;
    }
  }

  span {
    color: #222;
    font-size: 20px;
  }
`;

export const CandleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 80vw;

  @media only screen and (max-width: 1466px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Candle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 250px;
  margin: 10px;
`;

export const CandleTitle = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 85px;
  width: 200px;

  font-size: 20px;

  padding-left: 20px;

  background-color: #1e5898;
  color: #fff;
`;

export const Height = styled.div<CandleProps>`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 200px;

  padding-left: 15px;
  padding-bottom: 15px;
  background: #307bcf;
  height: ${(props) => props.size}vh;

  span {
    font-size: 14px;
    color: #fff;
  }

  transition: all 400ms ease;

  &:hover {
    background: ${shade(0.2, '#307bcf')};
  }
`;
