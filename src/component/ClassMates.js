import React, { useEffect, useState } from 'react';

export default function ClassMates() {
   // Dummy user data, replace this with your actual data
    const classmatess = [
       { id: 1, nickname: 'John Doe', email: 'john@example.com', age: 25 },
       { id: 2, nickname: 'Jane Doe', email: 'jane@example.com', age: 30 },
       // Add more users as needed
    ];

   const [classmates, setClassmates] = useState([]);


   const loadUserData = async () => {
      let response = await fetch("http://localhost:5000/lms/allclassmates", { method: "GET", headers: { 'Content-type': 'application/json' } });
      const data = await response.json();
         const dataArray = Object.entries(data).map(([key, value]) => ({ key, value }));
         setClassmates(dataArray);
         console.log(classmates);
   }

   useEffect(() => {
      loadUserData();
   }, []);

   return (
      <div className="container mt-4">
         <h2 className="mb-4">Classmates</h2>
         <table className="table table-bordered table-success table-striped">
            <thead>
               <tr>
                  <th>#</th>
                  <th>Nickname</th>
                  <th>Email</th>
                  <th>Age</th>
               </tr>
            </thead>
            <tbody>
               {classmates.map((classmate, index) => (
                  <tr key={classmate.id}>
                     <td>{index + 1}</td>
                     <td>{classmate.value.name}</td>
                     <td>{classmate.value.email}</td>
                     <td>{classmate.value.age}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
