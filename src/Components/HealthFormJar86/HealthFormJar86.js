import React from 'react'

const HealthFormJar86 = ({tenants}) => {
    return (
        <tbody>
            {tenants.map((tenant, key) => (
        <tr key={key} className='table'>
            <td>{tenant.room}</td>
            <td>{tenant.first_name} {tenant.last_name}</td>
            <td>{tenant.birthdate}</td>
            <td><input className="form-check-input" type="checkbox" value="" id="morning_check"/></td>
            <td><input className="form-check-input" type="checkbox" value="" id="evening_check"/></td>
            <td><input className="form-check-input" type="checkbox" value="" id="night_check"/></td>
            <td><button className='btn btn-danger'>View Profile</button></td>
        </tr>
            ))}
    </tbody>
    )
}

export default HealthFormJar86
