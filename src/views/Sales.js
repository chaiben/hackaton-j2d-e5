import React, { useEffect, useState } from 'react'
import ChartistGraph from 'react-chartist'
// react-bootstrap components
import { Card, Container, Row, Col } from 'react-bootstrap'
import { getTotalSales } from 'api/gets'

function Sales() {
  const [allSales, setAllSales] = useState([])

  const fetchAllSales = async () => {
    const res = await getTotalSales()
    console.log('total sales: ', res)
    setAllSales(res)
  }

  useEffect(() => {
    fetchAllSales()
  }, [])
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as='h4'>Total Order per Center</Card.Title>
                <p className='card-category'></p>
              </Card.Header>
              <Card.Body>
                <div className='ct-chart' id='chartActivity'>
                  <ChartistGraph
                    data={{
                      labels: allSales.map(center => center.center_type),
                      series: [allSales.map(center => center.num_orders)],
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
      </Container>
    </>
  )
}

export default Sales
