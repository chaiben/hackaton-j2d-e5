import React, { useEffect, useState } from 'react'
import ChartistGraph from 'react-chartist'
import { login } from '../api/auth'
// react-bootstrap components
import { Card, Container, Row, Col } from 'react-bootstrap'

function Cousines() {
  const [countCousineOrder, setCountCousineOrder] = useState(null)
  const getToken = async () => {
    const res = await login()
    localStorage.setItem('authToken', res.data.token)
  }

  useEffect(() => {
    getToken()
  }, [])

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as='h4'>Cousines</Card.Title>
                <p className='card-category'>All products including Taxes</p>
              </Card.Header>
              <Card.Body>
                <div className='ct-chart' id='chartActivity'>
                  <ChartistGraph
                    data={{
                      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                      series: [
                        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                        [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
                        [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
                      ],
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
                          seriesBarDistance: 5,
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
              <Card.Footer className='d-flex flex-column'>
                <div className='legend text-center'>
                  <i className='fas fa-circle text-info'></i>
                  Bon Digital Talent
                  <i className='fas fa-circle text-danger ml-3'></i>
                  MWC Supermercdos
                  <span style={{ color: '#ffa535' }}>
                    <i className='fas fa-circle ml-3'></i>
                  </span>
                  MercaBDT
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Cousines
