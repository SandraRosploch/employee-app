import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

const UpdateEmployees = () => {

    const { updateEmployees } = useContext(AppContext);
    console.log(updateEmployees)
  return (
    <div>UpdateEmployees</div>
  )
}

export default UpdateEmployees