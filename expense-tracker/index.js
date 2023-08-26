document.addEventListener("DOMContentLoaded", function () {
  const expenseList = document.getElementById("expenseList");
  const addExpenseButton = document.getElementById("addExpense");

  addExpenseButton.addEventListener("click", function () {
    console.log();
    const amount = document.getElementById("expenseAmount").value;
    const description = document.getElementById("expenseDescription").value;
    const category = document.getElementById("expenseCategory").value;

    if (amount && description && category) {
      const expense = {
        amount: amount,
        description: description,
        category: category,
      };

      const expenseText = `${amount} - ${description} - ${category}`;
      const listItem = document.createElement("li");
      listItem.textContent = expenseText;
      expenseList.appendChild(listItem);

      // Store the expense in local storage
      localStorage.setItem(Date.now().toString(), JSON.stringify(expense));

      // Clear input fields
      document.getElementById("expenseAmount").value = "";
      document.getElementById("expenseDescription").value = "";
      document.getElementById("expenseCategory").value = "";
    }
  });

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const expense = JSON.parse(localStorage.getItem(key));
    const expenseText = `${expense.amount} - ${expense.description} - ${expense.category}`;
    const listItem = document.createElement("li");
    listItem.textContent = expenseText;
    listItem.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.addEventListener("click", function () {
      expenseList.removeChild(listItem);
      localStorage.removeItem(key);
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn", "btn-primary", "btn-sm", "ml-2");
    editButton.addEventListener("click", function () {
      // Implement edit functionality here
      document.getElementById("expenseAmount").value = expense.amount;
      document.getElementById("expenseDescription").value = expense.description;
      document.getElementById("expenseCategory").value = expense.category;

      // Remove the existing expense from local storage
      localStorage.removeItem(key);
      expenseList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    expenseList.appendChild(listItem);
  }
});
