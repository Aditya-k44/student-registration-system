import React, { useState } from "react";

const CourseOfferings = ({
  courseOfferings,
  setCourseOfferings,
  courses,
  courseTypes,
}) => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourseType, setSelectedCourseType] = useState("");

  const [editOfferingId, setEditOfferingId] = useState(null);
  const [editOfferingName, setEditOfferingName] = useState("");

  const handleCreateCourseOffering = () => {
    const courseId = Number(selectedCourse);
    const courseTypeId = Number(selectedCourseType);

    if (!courseId || !courseTypeId) {
      alert("Please select both a course and a course type.");
      return;
    }

    const course = courses.find((c) => c.id === courseId);
    const courseType = courseTypes.find((t) => t.id === courseTypeId);

    const newOffering = {
      id: courseOfferings.length + 1,
      courseId,
      courseTypeId,
      name: `${courseType.name} - ${course.name}`,
    };

    setCourseOfferings([...courseOfferings, newOffering]);
    setSelectedCourse("");
    setSelectedCourseType("");
  };

  const handleUpdateCourseOffering = () => {
    if (!editOfferingId || editOfferingName.trim() === "") {
      alert("Please select an offering and enter a new name.");
      return;
    }

    const updatedOfferings = courseOfferings.map((offering) =>
      offering.id === editOfferingId
        ? { ...offering, name: editOfferingName }
        : offering
    );

    setCourseOfferings(updatedOfferings);
    setEditOfferingId(null);
    setEditOfferingName("");
  };

  const handleDeleteCourseOffering = (id) => {
    setCourseOfferings(
      courseOfferings.filter((offering) => offering.id !== id)
    );
  };

  return (
    <div id="course-offerings">
      <h2>Create Course Offering</h2>
      <div style={{ marginBottom: "20px" }}>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>

        <select
          value={selectedCourseType}
          onChange={(e) => setSelectedCourseType(e.target.value)}
        >
          <option value="">Select Course Type</option>
          {courseTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>

        <button onClick={handleCreateCourseOffering}>Create Offering</button>
      </div>

      <h3>Update Course Offering Name</h3>
      <div style={{ marginBottom: "20px" }}>
        <select
          value={editOfferingId || ""}
          onChange={(e) => {
            const id = Number(e.target.value);
            setEditOfferingId(id);
            const selected = courseOfferings.find((o) => o.id === id);
            setEditOfferingName(selected ? selected.name : "");
          }}
        >
          <option value="">Select Offering to Edit</option>
          {courseOfferings.map((offering) => (
            <option key={offering.id} value={offering.id}>
              {offering.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="New Offering Name"
          value={editOfferingName}
          onChange={(e) => setEditOfferingName(e.target.value)}
        />

        <button onClick={handleUpdateCourseOffering}>Update</button>
      </div>

      <h3>Existing Course Offerings</h3>
      <ul>
        {courseOfferings.map((offering) => {
          return (
            <li key={offering.id}>
              {offering.name}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => handleDeleteCourseOffering(offering.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseOfferings;
