import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  FlexibleWidthXYPlot,
  VerticalRectSeries,
  XAxis,
} from 'react-vis';

function getRandomSeriesData(total) {
  const result = [];
  let lastY = Math.random() * 40;
  let y;
  const firstY = lastY;
  for (let i = 0; i < Math.max(total, 3); i += 1) {
    y = ((Math.random() * firstY) - (firstY / 2)) + lastY;
    const yy = Math.round(Math.random() * 2);
    result.push({
      left: i,
      top: yy,
    });
    lastY = y;
  }
  return result;
}

class Plots extends PureComponent {
  constructor(props) {
    super(props);
    const totalValues = 300;
    this.state = {
      series: [
        {
          title: 'Apples',
          disabled: false,
          data: getRandomSeriesData(totalValues),
        },
        {
          title: 'Bananas',
          disabled: false,
          data: getRandomSeriesData(totalValues),
        },
      ],
    };
  }

  render() {
    const { series } = this.state;

    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Scan Timeline</h5>
            </div>
            <div className="react-vis">
              <FlexibleWidthXYPlot
                animation
                getX={d => d.left}
                getY={d => d.top}
                xDomain={[0, series[0].data.length - 1]}
                height={100}
              >
                <XAxis
                  className="even-cooler-custom-name"
                  tickSizeInner={0}
                  tickSizeOuter={8}
                />
                <VerticalRectSeries
                  data={series[0].data.map(({ left, top }) => ({ x0: left - 0.5, left: left + 0.5, top }))}
                  stroke="white"
                  {...(series[0].disabled ? { opacity: 0.2 } : null)}
                  color="#70bbfd"
                />
              </FlexibleWidthXYPlot>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default (Plots);
