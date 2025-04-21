import React, { useState } from "react";
import "./styles.css";
import CourseTypes from "./components/CourseTypes";
import Courses from "./components/Courses";
import CourseOfferings from "./components/CourseOfferings";
import StudentRegistrations from "./components/StudentRegistrations";
import Navbar from "./components/Navbar";

const App = () => {
  const [courseTypes, setCourseTypes] = useState([
    { id: 1, name: "Individual" },
    { id: 2, name: "Group" },
    { id: 3, name: "Special" },
  ]);

  const [courses, setCourses] = useState([
    { id: 1, name: "Hindi" },
    { id: 2, name: "English" },
    { id: 3, name: "Urdu" },
  ]);

  const [courseOfferings, setCourseOfferings] = useState([
    { id: 1, courseId: 1, courseTypeId: 1, name: "Individual - Hindi" },
    { id: 2, courseId: 2, courseTypeId: 2, name: "Group - English" },
  ]);

  const [studentRegistrations, setStudentRegistrations] = useState([]);

  const addCourse = (courseName) => {
    const newCourse = { id: courses.length + 1, name: courseName };
    setCourses([...courses, newCourse]);
  };

  const addCourseType = (courseTypeName) => {
    const newCourseType = { id: courseTypes.length + 1, name: courseTypeName };
    setCourseTypes([...courseTypes, newCourseType]);
  };

  const addCourseOffering = (courseId, courseTypeId) => {
    const course = courses.find((c) => c.id === courseId);
    const courseType = courseTypes.find((ct) => ct.id === courseTypeId);
    if (course && courseType) {
      const newCourseOffering = {
        id: courseOfferings.length + 1,
        courseId,
        courseTypeId,
        name: `${courseType.name} - ${course.name}`,
      };
      setCourseOfferings([...courseOfferings, newCourseOffering]);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <h1 className="title">Student Registration System</h1>

      <section id="course-types">
        <CourseTypes
          courseTypes={courseTypes}
          setCourseTypes={setCourseTypes}
          addCourseType={addCourseType}
        />
      </section>
      <section id="courses">
        <Courses
          courses={courses}
          setCourses={setCourses}
          addCourse={addCourse}
        />
      </section>
      <section id="course-offering">
        <CourseOfferings
          courseOfferings={courseOfferings}
          setCourseOfferings={setCourseOfferings}
          courses={courses}
          courseTypes={courseTypes}
          addCourseOffering={addCourseOffering}
        />
      </section>
      <section id="student-registrations">
        <StudentRegistrations
          studentRegistrations={studentRegistrations}
          setStudentRegistrations={setStudentRegistrations}
          courseOfferings={courseOfferings}
          courses={courses}
        />
      </section>
    </div>
  );
};

export default App;
