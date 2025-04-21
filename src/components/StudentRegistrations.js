import React, { useState } from "react";

const StudentRegistrations = ({
  studentRegistrations,
  setStudentRegistrations,
  courseOfferings,
}) => {
  const [selectedOffering, setSelectedOffering] = useState("");
  const [studentName, setStudentName] = useState("");

  const handleRegisterStudent = () => {
    const offeringId = Number(selectedOffering);

    if (!offeringId || studentName.trim() === "") {
      alert("Please select a course offering and enter a student name.");
      return;
    }

    const offering = courseOfferings.find(
      (offering) => offering.id === offeringId
    );

    if (!offering) {
      alert("Selected offering not found.");
      return;
    }

    const newRegistration = {
      id: studentRegistrations.length + 1,
      offeringId,
      studentName: studentName.trim(),
    };

    setStudentRegistrations([...studentRegistrations, newRegistration]);

    setStudentName("");
    setSelectedOffering("");
  };

  return (
    <div>
      <h2>Student Registrations</h2>
      <div>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Enter student name"
        />
        <select
          onChange={(e) => setSelectedOffering(e.target.value)}
          value={selectedOffering}
        >
          <option value="">Select Course Offering</option>
          {courseOfferings.map((offering) => (
            <option key={offering.id} value={offering.id}>
              {offering.name}
            </option>
          ))}
        </select>

        <button onClick={handleRegisterStudent}>Register Student</button>
      </div>

      <h3>Registered Students</h3>
      <ul>
        {studentRegistrations.map((registration) => {
          const offering = courseOfferings.find(
            (offering) => offering.id === registration.offeringId
          );

          return (
            <li key={registration.id}>
              {registration.studentName} -{" "}
              {offering ? offering.name : "Unknown Offering"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentRegistrations;
