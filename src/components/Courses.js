import React, { useState } from "react";

const Courses = ({ courses, setCourses, addCourse }) => {
  const [newCourse, setNewCourse] = useState("");
  const [editCourse, setEditCourse] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const handleCreateCourse = () => {
    if (newCourse.trim() === "") return;
    addCourse(newCourse);
    setNewCourse("");
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const handleUpdateCourse = () => {
    if (editCourse.trim() === "") return;
    setCourses(
      courses.map((course) =>
        course.id === selectedCourseId
          ? { ...course, name: editCourse }
          : course
      )
    );
    setEditCourse("");
    setSelectedCourseId(null);
  };

  return (
    <div>
      <h2>Courses</h2>

      <div>
        <input
          type="text"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          placeholder="New Course"
        />
        <button onClick={handleCreateCourse}>Create</button>
      </div>

      <div>
        <select
          value={selectedCourseId || ""}
          onChange={(e) => setSelectedCourseId(Number(e.target.value))}
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={editCourse}
          onChange={(e) => setEditCourse(e.target.value)}
          placeholder="Update Course Name"
        />
        <button onClick={handleUpdateCourse}>Update</button>
      </div>

      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name}
            <button
              className="delete-btn"
              onClick={() => handleDeleteCourse(course.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
