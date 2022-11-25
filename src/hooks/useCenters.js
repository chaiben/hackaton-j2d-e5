import { getCenters } from 'api/gets'
import { useEffect, useState } from 'react'

const useCenters = () => {
  const [centersA, setCentersA] = useState([])
  const [centersB, setCentersB] = useState([])
  const [centersC, setCentersC] = useState([])

  const getTypeACenters = async () => {
    const data = await getCenters()

    const list = data.filter(center => center.centerType === 'TYPE_A')

    setCentersA(list)
  }
  const getTypeBCenters = async () => {
    const data = await getCenters()

    const list = data.filter(center => center.centerType === 'TYPE_B')

    setCentersB(list)
  }
  const getTypeCCenters = async () => {
    const data = await getCenters()

    const list = data.filter(center => center.centerType === 'TYPE_C')

    setCentersC(list)
  }

  useEffect(() => {
    getTypeACenters()
    getTypeBCenters()
    getTypeCCenters()
  }, [])

  return { centersA, centersB, centersC }
}
export default useCenters
