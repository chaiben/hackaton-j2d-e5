import React, { useEffect, useState } from 'react'
import ChartistGraph from 'react-chartist'
// react-bootstrap components
import { Card, Container, Row, Col } from 'react-bootstrap'
import { getCheck } from 'api/gets'

function Sales() {
  const [checks, setChecks] = useState([])

  const fetchChecks = async () => {
    const res = await getCheck()
    setChecks(res)
  }

  useEffect(() => {
    fetchChecks()
  }, [])
  return (
    <>
      <Container fluid>
        {checks.map((item, i) => (
          <Row key={i}>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as='h4'>CENTER ID: {item.id}</Card.Title>
                  <p className='card-category'>
                    {item.centerType === 'TYPE_A'
                      ? 'Bon Digital Talent'
                      : item.centerType === 'TYPE_B'
                      ? 'MWC Supermercdos'
                      : 'MercaBDT'}
                  </p>
                </Card.Header>
                <Card.Body>
                  <div className='ct-chart' id='chartActivity'>
                    <ChartistGraph
                      data={{
                        labels: [
                          `total orders (${Math.round(Number(item.num_orders) / 10000)} x10k)`,
                          `total sales (${Math.round(Number(item.checkoutPrice) / 10000)} x10k€)`,
                        ],
                        series: [[Number(item.num_orders) / 10000, Number(item.checkoutPrice) / 10000]],
                      }}
                      type='Bar'
                      options={{
                        seriesBarDistance: 10,
                        axisX: {
                          showGrid: false,
                        },
                        height: '245px',
                      }}
                      responsiveOptions={[
                        [
                          'screen and (max-width: 640px)',
                          {
                            seriesBarDistance: 2,
                            axisX: {
                              labelInterpolationFnc: function (value) {
                                return value[0]
                              },
                            },
                          },
                        ],
                      ]}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}

export default Sales
