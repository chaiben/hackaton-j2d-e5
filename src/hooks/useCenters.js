import { getCenters } from 'api/gets'
import { useEffect, useState } from 'react'

const useCenters = () => {
  const [centersA, setCentersA] = useState([])

  const getTypeACenters = async () => {
    const data = await getCenters()

    setCentersA(data.filter(center => center.center_type === 'TYPE_A'))
  }

  useEffect(() => {
    getTypeACenters()
  }, [])

  return { centersA }
}
export default useCenters
