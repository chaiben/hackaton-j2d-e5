import React, { useEffect, useState } from 'react'
import ChartistGraph from 'react-chartist'
import { login } from '../api/auth'
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import useCenters from 'hooks/useCenters'
import { getTotalSales } from 'api/gets'

function Dashboard() {
  const { centersA, centersB, centersC } = useCenters()
  const [allSales, setAllSales] = useState([])

  const fetchAllSales = async () => {
    const res = await getTotalSales()
    setAllSales(res)
  }

  useEffect(() => {
    fetchAllSales()
  }, [])

  const totalCenters = centersA.length + centersB.length + centersC.length

  return (
    <>
      <Container fluid>
        <Row>
          <Col md='6'>
            <Card>
              <Card.Header>
                <Card.Title as='h4'>Centers</Card.Title>
                <p className='card-category'>Last Campaign Performance</p>
              </Card.Header>
              <Card.Body>
                <div className='ct-chart ct-perfect-fourth' id='chartPreferences'>
                  <ChartistGraph
                    data={{
                      labels: [
                        `${Math.round((centersA.length / totalCenters) * 100)}%`,
                        `${Math.round((centersB.length / totalCenters) * 100)}%`,
                        `${Math.round((centersC.length / totalCenters) * 100)}%`,
                      ],
                      series: [
                        centersA.length / totalCenters,
                        centersB.length / totalCenters,
                        centersC.length / totalCenters,
                      ],
                    }}
                    type='Pie'
                  />
                </div>
                <div className='legend text-center'>
                  <i className='fas fa-circle text-info'></i>
                  Bon Digital Talent
                  <i className='fas fa-circle text-danger ml-3'></i>
                  MWC Supermercdos
                  <i className='fas fa-circle text-warning ml-3'></i>
                  MercaBDT
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as='h4'>Total Sales</Card.Title>
                <p className='card-category'>All products including Taxes</p>
              </Card.Header>
              <Card.Body>
                <div className='ct-chart' id='chartActivity'>
                  <ChartistGraph
                    data={{
                      labels: allSales.map(center => {
                        if (center.center_type === 'TYPE_A') return 'Bon Digital Talent'
                        if (center.center_type === 'TYPE_B') return 'MWC Supermercdos'
                        if (center.center_type === 'TYPE_C') return 'MercaBDT'
                      }),
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

export default Dashboard
