// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById("addForm");
const employeesTable = document.getElementById("employees");
const empCountOutput = document.getElementById("empCount");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;
empCountOutput.textContent = count;

// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
      const id = document.getElementById("id").value.trim();
      const name = document.getElementById("name").value.trim();
      const extension = document.getElementById("extension").value.trim();
      const email = document.getElementById("email").value.trim();
      const department = document.getElementById("department").value;


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
      const row = employeesTable.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
      const cellId = row.insertCell(0);
      const cellName = row.insertCell(1);
      const cellExt = row.insertCell(2);
      const cellEmail = row.insertCell(3);
      const cellDept = row.insertCell(4);
      const cellDelete = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "btn btn-danger btn-sm delete";
    deleteBtn.appendChild(document.createTextNode("Delete"));
    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCountOutput.textContent = count;

});

// DELETE EMPLOYEE
employeesTable.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete")) return;

  const ok = confirm("Are you sure you want to delete this employee?");
  if (!ok) return;

 
  const row = e.target.closest("tr");
  if (!row) return;

  employeesTable.deleteRow(row.rowIndex);


  count = Math.max(0, count - 1);
  empCountOutput.textContent = count;
});