import React, { useState, useEffect, useCallback } from "react";
import "./Stickyform.css";

const SContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    course: "",
  });

  const [isMobileView, setIsMobileView] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 768) {
      setIsMobileView(true);
      setIsFormVisible(false);
    } else {
      setIsMobileView(false);
      setIsFormVisible(true);
    }
  }, []);

  useEffect(() => {
    // Debounced resize event listener
    const debouncedResize = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", debouncedResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [handleResize]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data submitted successfully");
        setFormData({ name: "", contact: "", course: "" });
        // Optionally, show a success message or reset form fields
      } else {
        console.error("Error submitting form data:", response.status);
        // Optionally, show an error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
      // Optionally, show an error message to the user
    }
  }, [formData]);

  const toggleFormVisibility = useCallback(() => {
    setIsFormVisible((prevVisibility) => !prevVisibility);
  }, []);

  return (
    <>
      {isMobileView && (
        <button className="contact-us-button" onClick={toggleFormVisibility}>
          {isFormVisible ? "Close" : "Contact Us"}
        </button>
      )}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="contact-formS">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Eg: Ram"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="Eg: +91-1234567890"
                value={formData.contact}
                onChange={handleChange}
                maxLength={10}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Course</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a course</option>
                <option value="SAP">SAP</option>
                <option value="IT Courses">IT Courses</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Data Visualisation">Data Visualisation</option>
                <option value="HR Courses">HR Courses</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default SContactForm;
