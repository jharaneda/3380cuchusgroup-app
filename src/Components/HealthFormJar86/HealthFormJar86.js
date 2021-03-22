import React from 'react'

const HealthFormJar86 = ({name, birthDate}) => {
    return (
        <tbody>
        <tr className='table'>
            {/* <td>{name}</td>
            <td>{birthDate}</td> */}
            <td>name</td>
            <td> birthDate</td>
            <td><input className="form-check-input" type="checkbox" value="" id="morning_check"/></td>
            <td><input className="form-check-input" type="checkbox" value="" id="evening_check"/></td>
            <td><input className="form-check-input" type="checkbox" value="" id="night_check"/></td>
            <td><button className='btn btn-danger'>View Profile</button></td>
        </tr>
    </tbody>
    )
}

export default HealthFormJar86
