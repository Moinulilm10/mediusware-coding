//!code-1
// import React, { useState, useEffect } from "react";
// import { Modal, Button, Form } from "react-bootstrap";

// const Problem2 = () => {
//   const [showModalA, setShowModalA] = useState(false);
//   const [showModalB, setShowModalB] = useState(false);
//   const [onlyEven, setOnlyEven] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredContacts, setFilteredContacts] = useState([]);

//   const handleAllContactsClick = () => {
//     setShowModalA(true);
//     setShowModalB(false);
//   };

//   const handleUSContactsClick = () => {
//     setShowModalA(false);
//     setShowModalB(true);
//   };

//   const handleCloseModalClick = () => {
//     setShowModalA(false);
//     setShowModalB(false);
//   };

//   const handleCheckboxChange = (event) => {
//     setOnlyEven(event.target.checked);
//   };

//   const handleSearchInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     // Function to filter contacts based on search term and even/odd condition
//     const filterContacts = () => {
//       let filtered = contacts;

//       if (searchTerm) {
//         filtered = filtered.filter((contact) =>
//           contact.name.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//       }

//       if (onlyEven) {
//         filtered = filtered.filter((contact) => contact.id % 2 === 0);
//       }

//       setFilteredContacts(filtered);
//     };

//     // Delayed filtering on typing
//     const delayTimer = setTimeout(filterContacts, 300);

//     return () => clearTimeout(delayTimer);
//   }, [searchTerm, onlyEven]);

//   const contacts = [
//     { id: 1, name: "John Doe", country: "US" },
//     { id: 2, name: "Jane Smith", country: "US" },
//     { id: 3, name: "David Johnson", country: "UK" },
//     { id: 4, name: "Sarah Williams", country: "US" },
//     { id: 5, name: "Michael Brown", country: "UK" },
//     { id: 6, name: "Emma Davis", country: "US" },
//   ];

//   return (
//     <div className="container">
//       <div className="row justify-content-center mt-5">
//         <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
//         <div className="d-flex justify-content-center gap-3">
//           <button
//             className="btn btn-lg btn-outline-primary"
//             style={{ color: "#46139f" }}
//             type="button"
//             onClick={handleAllContactsClick}
//           >
//             All Contacts
//           </button>
//           <button
//             className="btn btn-lg btn-outline-warning"
//             style={{ color: "#ff7f50" }}
//             type="button"
//             onClick={handleUSContactsClick}
//           >
//             US Contacts
//           </button>
//         </div>

//         {/* modal A */}
//         <Modal show={showModalA} onHide={handleCloseModalClick}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal A</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={handleSearchInputChange}
//               />
//             </div>
//             {filteredContacts.map((contact) => (
//               <p key={contact.id}>{contact.name}</p>
//             ))}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button
//               variant="primary"
//               style={{ color: "#46139f" }}
//               onClick={handleAllContactsClick}
//             >
//               All Contact
//             </Button>
//             <Button
//               variant="primary"
//               style={{ color: "#ff7f50" }}
//               onClick={handleUSContactsClick}
//             >
//               US Contact
//             </Button>
//             <Button
//               variant="secondary"
//               style={{ backgroundColor: "#46139f", borderColor: "#46139f" }}
//               onClick={handleCloseModalClick}
//             >
//               Close
//             </Button>
//             <div className="form-check">
//               <Form.Check
//                 id="checkboxA"
//                 label="Only even"
//                 checked={onlyEven}
//                 onChange={handleCheckboxChange}
//               />
//             </div>
//           </Modal.Footer>
//         </Modal>

//         {/* modal B */}
//         <Modal show={showModalB} onHide={handleCloseModalClick}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal B</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={handleSearchInputChange}
//               />
//             </div>
//             {filteredContacts
//               .filter((contact) => contact.country === "US")
//               .map((contact) => (
//                 <p key={contact.id}>{contact.name}</p>
//               ))}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button
//               variant="primary"
//               style={{ color: "#46139f" }}
//               onClick={handleAllContactsClick}
//             >
//               All Contact
//             </Button>
//             <Button
//               variant="primary"
//               style={{ color: "#ff7f50" }}
//               onClick={handleUSContactsClick}
//             >
//               US Contact
//             </Button>
//             <Button
//               variant="secondary"
//               style={{ backgroundColor: "#46139f", borderColor: "#46139f" }}
//               onClick={handleCloseModalClick}
//             >
//               Close
//             </Button>
//             <div className="form-check">
//               <Form.Check
//                 id="checkboxB"
//                 label="Only even"
//                 checked={onlyEven}
//                 onChange={handleCheckboxChange}
//               />
//             </div>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default Problem2;

// //!code-2
// import React, { useState, useEffect } from "react";
// import { Modal, Button, Form } from "react-bootstrap";

// const Problem2 = () => {
//   const [showModalA, setShowModalA] = useState(false);
//   const [showModalB, setShowModalB] = useState(false);
//   const [onlyEven, setOnlyEven] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredContacts, setFilteredContacts] = useState([]);

//   const handleAllContactsClick = () => {
//     setShowModalA(true);
//     setShowModalB(false);
//     updateURLParameter("modal", "A");
//   };

//   const handleUSContactsClick = () => {
//     setShowModalA(false);
//     setShowModalB(true);
//     updateURLParameter("modal", "B");
//   };

//   const handleCloseModalClick = () => {
//     setShowModalA(false);
//     setShowModalB(false);
//     updateURLParameter("modal", null);
//   };

//   const handleCheckboxChange = (event) => {
//     setOnlyEven(event.target.checked);
//   };

//   const handleSearchInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     // Function to filter contacts based on search term and even/odd condition
//     const filterContacts = () => {
//       let filtered = contacts;

//       if (searchTerm) {
//         filtered = filtered.filter((contact) =>
//           contact.name.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//       }

//       if (onlyEven) {
//         filtered = filtered.filter((contact) => contact.id % 2 === 0);
//       }

//       setFilteredContacts(filtered);
//     };

//     // Delayed filtering on typing
//     const delayTimer = setTimeout(filterContacts, 300);

//     return () => clearTimeout(delayTimer);
//   }, [searchTerm, onlyEven]);

//   useEffect(() => {
//     // Function to handle URL parameter update
//     const handleURLChange = () => {
//       const urlParams = new URLSearchParams(window.location.search);
//       const modalParam = urlParams.get("modal");

//       if (modalParam === "A") {
//         setShowModalA(true);
//         setShowModalB(false);
//       } else if (modalParam === "B") {
//         setShowModalA(false);
//         setShowModalB(true);
//       } else {
//         setShowModalA(false);
//         setShowModalB(false);
//       }
//     };

//     window.addEventListener("popstate", handleURLChange);

//     // Initialize modal state based on the initial URL parameter
//     handleURLChange();

//     return () => window.removeEventListener("popstate", handleURLChange);
//   }, []);

//   useEffect(() => {
//     // Update the URL parameter when the active modal changes
//     const modalParam = showModalA ? "A" : showModalB ? "B" : "";
//     updateURLParameter("modal", modalParam);
//   }, [showModalA, showModalB]);

//   const updateURLParameter = (key, value) => {
//     const urlParams = new URLSearchParams(window.location.search);

//     if (value) {
//       urlParams.set(key, value);
//     } else {
//       urlParams.delete(key);
//     }

//     const newURL = `${window.location.pathname}${
//       urlParams.toString() ? `?${urlParams.toString()}` : ""
//     }`;
//     window.history.pushState({}, "", newURL);
//   };

//   const contacts = [
//     { id: 1, name: "John Doe", country: "US" },
//     { id: 2, name: "Jane Smith", country: "US" },
//     { id: 3, name: "David Johnson", country: "UK" },
//     { id: 4, name: "Sarah Williams", country: "US" },
//     { id: 5, name: "Michael Brown", country: "UK" },
//     { id: 6, name: "Emma Davis", country: "US" },
//   ];

//   return (
//     <div className="container">
//       <div className="row justify-content-center mt-5">
//         <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
//         <div className="d-flex justify-content-center gap-3">
//           <button
//             className="btn btn-lg btn-outline-primary"
//             style={{ color: "#46139f" }}
//             type="button"
//             onClick={handleAllContactsClick}
//           >
//             All Contacts
//           </button>
//           <button
//             className="btn btn-lg btn-outline-warning"
//             style={{ color: "#ff7f50" }}
//             type="button"
//             onClick={handleUSContactsClick}
//           >
//             US Contacts
//           </button>
//         </div>

//         {/* modal A */}
//         <Modal show={showModalA} onHide={handleCloseModalClick}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal A</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={handleSearchInputChange}
//               />
//             </div>
//             {filteredContacts.map((contact) => (
//               <p key={contact.id}>{contact.name}</p>
//             ))}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button
//               variant="primary"
//               style={{ color: "#46139f" }}
//               onClick={handleAllContactsClick}
//             >
//               All Contact
//             </Button>
//             <Button
//               variant="primary"
//               style={{ color: "#ff7f50" }}
//               onClick={handleUSContactsClick}
//             >
//               US Contact
//             </Button>
//             <Button
//               variant="secondary"
//               style={{ backgroundColor: "#46139f", borderColor: "#46139f" }}
//               onClick={handleCloseModalClick}
//             >
//               Close
//             </Button>
//             <div className="form-check">
//               <Form.Check
//                 id="checkboxA"
//                 label="Only even"
//                 checked={onlyEven}
//                 onChange={handleCheckboxChange}
//               />
//             </div>
//           </Modal.Footer>
//         </Modal>

//         {/* modal B */}
//         <Modal show={showModalB} onHide={handleCloseModalClick}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal B</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={handleSearchInputChange}
//               />
//             </div>
//             {filteredContacts
//               .filter((contact) => contact.country === "US")
//               .map((contact) => (
//                 <p key={contact.id}>{contact.name}</p>
//               ))}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button
//               variant="primary"
//               style={{ color: "#46139f" }}
//               onClick={handleAllContactsClick}
//             >
//               All Contact
//             </Button>
//             <Button
//               variant="primary"
//               style={{ color: "#ff7f50" }}
//               onClick={handleUSContactsClick}
//             >
//               US Contact
//             </Button>
//             <Button
//               variant="secondary"
//               style={{ backgroundColor: "#46139f", borderColor: "#46139f" }}
//               onClick={handleCloseModalClick}
//             >
//               Close
//             </Button>
//             <div className="form-check">
//               <Form.Check
//                 id="checkboxB"
//                 label="Only even"
//                 checked={onlyEven}
//                 onChange={handleCheckboxChange}
//               />
//             </div>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default Problem2;
