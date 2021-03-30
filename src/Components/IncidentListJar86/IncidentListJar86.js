import React from 'react'

const IncidentListJar86 = ({incidents}) => {
    return (
        <table className="table">
                <thead>
                    <tr>
                        <th>Incident Date</th>
                        <th>Incident Time</th>
                        <th>Type of Incident</th>
                        <th>Staff Name</th>
                        <th>911 Called</th>
                        <th>Room number</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {incidents.map((incident, key) => (
                        <tr key={key}>
                            <td>{incident.incident_date}</td>
                            <td>{incident.incident_time}</td>
                            <td>{incident.type_incident}</td>
                            <td>{incident.staff_name}</td>
                            <td>{incident.VPD_called}</td>
                            <td>{incident.room}</td>
                            <td>{incident.comments}</td>
                        </tr>
                    ))

                    }
                </tbody>
            </table>
    )
}

export default IncidentListJar86
