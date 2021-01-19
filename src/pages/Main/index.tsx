import React from 'react';

import logoImage from '../../assets/logo.png';
import natureImage from '../../assets/nature.png';
import dailyImage from '../../assets/daily.png';

import {
  Button,
  Categories,
  Container,
  Escalator,
  Logo,
  EscalatorTitle,
  CategoriesTitle,
  CategoriesDescription,
  Line,
  Nature,
  Together,
  Analysis,
  Pictures,
  GrowthPlans,
  Daily,
  CandleDiv,
  Candle,
  CandleTitle,
  Height,
  GrowthTitle,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Escalator>
        <Logo src={logoImage} alt="a" />
        <EscalatorTitle>we have ideas to growth your business</EscalatorTitle>
        <Button>
          <span>See now</span>
        </Button>
      </Escalator>

      <Categories>
        <CategoriesTitle>categories</CategoriesTitle>
        <CategoriesDescription>
          discover new possibilities to help you today
        </CategoriesDescription>

        <Line>
          <Nature>
            <h1>nature</h1>
            <span>Lorem ipsum dolor sit amet</span>
          </Nature>

          <Daily>
            <h1>daily</h1>
            <span>Praesent tincidunt consectetur diam</span>
          </Daily>
        </Line>

        <Line>
          <Together>
            <h1>together</h1>
            <span>
              Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum
            </span>
          </Together>
        </Line>

        <Line>
          <Analysis>
            <h1>analysis</h1>
            <span>Duis sollicitudin mauris vitae venenatis aliquet</span>
          </Analysis>

          <Pictures>
            <h1>pictures</h1>
            <span>Quisque eu nisl purus</span>
          </Pictures>
        </Line>
      </Categories>

      <GrowthPlans>
        <GrowthTitle>
          <h1>Growth plans</h1>
          <span>take your business to the next level</span>
        </GrowthTitle>

        <CandleDiv>
          <Candle>
            <CandleTitle>
              <h2>$ 100</h2>
              <h3>100 + hours</h3>
            </CandleTitle>
            <Height size={10}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </Height>
          </Candle>

          <Candle>
            <CandleTitle>
              <h2>$ 150</h2>
              <h3>180 + hours</h3>
            </CandleTitle>
            <Height size={16}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </Height>
          </Candle>

          <Candle>
            <CandleTitle>
              <h2>$ 200</h2>
              <h3>260 + hours</h3>
            </CandleTitle>
            <Height size={22}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </Height>
          </Candle>

          <Candle>
            <CandleTitle>
              <h2>$ 250</h2>
              <h3>380 + hours</h3>
            </CandleTitle>
            <Height size={28}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </Height>
          </Candle>

          <Candle>
            <CandleTitle>
              <h2>$ 300</h2>
              <h3>420 + hours</h3>
            </CandleTitle>
            <Height size={34}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </Height>
          </Candle>

          <Candle>
            <CandleTitle>
              <h2>$ 350</h2>
              <h3>520 + hours</h3>
            </CandleTitle>
            <Height size={40}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </Height>
          </Candle>
        </CandleDiv>
      </GrowthPlans>
    </Container>
  );
};

export default Main;
