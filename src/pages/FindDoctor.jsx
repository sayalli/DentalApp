/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';

const doctorsData = [
  { id: 1, name: 'Dr. Anjali Sharma', specialty: 'Dentist', location: 'Mumbai' },
  { id: 2, name: 'Dr. Rakesh Patel', specialty: 'Cardiologist', location: 'Ahmedabad' },
  { id: 3, name: 'Dr. Meena Iyer', specialty: 'Pediatrician', location: 'Chennai' },
  { id: 4, name: 'Dr. Vikram Rao', specialty: 'Dermatologist', location: 'Hyderabad' },
  { id: 5, name: 'Dr. Nikhil Verma', specialty: 'Orthopedic', location: 'Delhi' },
  { id: 6, name: 'Dr. Priya Desai', specialty: 'Gynecologist', location: 'Pune' },
  { id: 7, name: 'Dr. Arjun Kapoor', specialty: 'ENT Specialist', location: 'Kolkata' },
  { id: 8, name: 'Dr. Sneha Joshi', specialty: 'Neurologist', location: 'Bengaluru' },
  { id: 9, name: 'Dr. Kiran Reddy', specialty: 'Psychiatrist', location: 'Hyderabad' },
  { id: 10, name: 'Dr. Neha Bansal', specialty: 'Ophthalmologist', location: 'Jaipur' }
];

const Input = ({ value, onChange }) => {
  return (
    <StyledInputWrapper>
      <div className="InputContainer">
        <input
          placeholder="Search.."
          id="input"
          className="input"
          name="text"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </StyledInputWrapper>
  );
};

const FindDoctor = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <StyledContainer>
      <h2>Find a Doctor</h2>
      <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <div className="doctor-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.slice(0, 9).map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <h3>{doctor.name}</h3>
              <p><strong>Specialty:</strong> {doctor.specialty}</p>
              <p><strong>Location:</strong> {doctor.location}</p>
            </div>
          ))
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  h2 {
    margin-bottom: 1.5rem;
  }

  .doctor-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 900px) {
    .doctor-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .doctor-grid {
      grid-template-columns: 1fr;
    }
  }

  .doctor-card {
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }

  .doctor-card:hover {
    transform: translateY(-5px);
  }
`;

const StyledInputWrapper = styled.div`
  .InputContainer {
    width: 210px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #4f9dff, #1e40af);
    border-radius: 30px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
    margin: 0 auto;
  }

  .input {
    width: 200px;
    height: 40px;
    border: none;
    outline: none;
    background-color: rgb(255, 255, 255);
    border-radius: 30px;
    padding-left: 15px;
    letter-spacing: 0.8px;
    color: rgb(19, 19, 19);
    font-size: 13.4px;
  }
`;

export default FindDoctor;
