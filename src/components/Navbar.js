import React from "react";

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => scrollTo("course-types")}>Course Types</li>
        <li onClick={() => scrollTo("courses")}>Courses</li>
        <li onClick={() => scrollTo("course-offerings")}>Course Offerings</li>
        <li onClick={() => scrollTo("student-registrations")}>
          Student Registrations
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
