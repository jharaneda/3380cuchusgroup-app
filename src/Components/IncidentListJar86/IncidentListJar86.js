import React from "react";
import emailjs from "emailjs-com";

const IncidentListJar86 = ({ incidents }) => {
  
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_8m29dei', e.target, 'user_RmfFpd8eArh23M8dsL2Aj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

  return (
    <table className="table">
      <thead>
          <tr>
              <th><button onClick={(e) => sendEmail(e)} >Send email</button></th>
              
          </tr>
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
        ))}
      </tbody>
    </table>
  );
};

export default IncidentListJar86;
