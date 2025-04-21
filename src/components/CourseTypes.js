import React, { useState } from "react";

const CourseTypes = ({ courseTypes, setCourseTypes, addCourseType }) => {
  const [newCourseType, setNewCourseType] = useState("");
  const [editCourseType, setEditCourseType] = useState("");
  const [selectedCourseTypeId, setSelectedCourseTypeId] = useState(null);

  const handleCreateCourseType = () => {
    if (newCourseType.trim() === "") return;
    addCourseType(newCourseType);
    setNewCourseType("");
  };

  const handleDeleteCourseType = (id) => {
    setCourseTypes(courseTypes.filter((type) => type.id !== id));
  };

  const handleUpdateCourseType = () => {
    if (editCourseType.trim() === "") return;
    setCourseTypes(
      courseTypes.map((type) =>
        type.id === selectedCourseTypeId
          ? { ...type, name: editCourseType }
          : type
      )
    );
    setEditCourseType("");
    setSelectedCourseTypeId(null);
  };

  return (
    <div>
      <h2>Course Types</h2>

      <div>
        <input
          type="text"
          value={newCourseType}
          onChange={(e) => setNewCourseType(e.target.value)}
          placeholder="New Course Type"
        />
        <button onClick={handleCreateCourseType}>Create</button>
      </div>

      <div>
        <select
          value={selectedCourseTypeId || ""}
          onChange={(e) => setSelectedCourseTypeId(Number(e.target.value))}
        >
          <option value="">Select Course Type</option>
          {courseTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={editCourseType}
          onChange={(e) => setEditCourseType(e.target.value)}
          placeholder="Update Course Type Name"
        />
        <button onClick={handleUpdateCourseType}>Update</button>
      </div>

      <ul>
        {courseTypes.map((type) => (
          <li key={type.id}>
            {type.name}
            <button
              className="delete-btn"
              onClick={() => handleDeleteCourseType(type.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTypes;
