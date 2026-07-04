import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");

  const [student, setStudent] = useState({
    name: "",
    className: "",
    section: "",
    roll: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = () => {
    if (
      student.name === "" ||
      student.className === "" ||
      student.section === "" ||
      student.roll === "" ||
      student.mobile === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    setStudents([...students, student]);

    setStudent({
      name: "",
      className: "",
      section: "",
      roll: "",
      mobile: "",
    });

    alert("Student Added Successfully");
  };

  const filteredStudents = students.filter(
    (s) => s.section === selectedSection
  );

  return (
    <div className="container">

      <h1>Student Management System</h1>

      <div className="form">

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="className"
          placeholder="Class"
          value={student.className}
          onChange={handleChange}
        />

        <select
          name="section"
          value={student.section}
          onChange={handleChange}
        >
          <option value="">Select Section</option>
          <option value="A">Section A</option>
          <option value="B">Section B</option>
          <option value="C">Section C</option>
        </select>

        <input
          type="number"
          name="roll"
          placeholder="Roll Number"
          value={student.roll}
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={student.mobile}
          onChange={handleChange}
        />

        <button onClick={addStudent}>
          Add Student
        </button>

      </div>

      <div className="buttons">

        <button onClick={() => setSelectedSection("A")}>
          Section A
        </button>

        <button onClick={() => setSelectedSection("B")}>
          Section B
        </button>

        <button onClick={() => setSelectedSection("C")}>
          Section C
        </button>

      </div>

      {selectedSection !== "" && (

        <>

        <h2>Students of Section {selectedSection}</h2>

        <table>

          <thead>

          <tr>

            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Roll No</th>
            <th>Mobile</th>

          </tr>

          </thead>

          <tbody>

          {filteredStudents.length > 0 ? (

            filteredStudents.map((s, index) => (

              <tr key={index}>
                <td>{s.name}</td>
                <td>{s.className}</td>
                <td>{s.section}</td>
                <td>{s.roll}</td>
                <td>{s.mobile}</td>
              </tr>

            ))

          ) : (

            <tr>

              <td colSpan="5">No Students Found</td>

            </tr>

          )}

          </tbody>

        </table>

        </>

      )}

    </div>
  );
}

export default App;