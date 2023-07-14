export default function createNav() {
  const contentDiv = document.getElementById("content");

  const navContainer = document.createElement("div");
  navContainer.classList.add("nav");

  const navBar = document.createElement("div");
  navBar.classList.add("dropdown");
  navBar.textContent = "drop down nav";

  const navButton = document.createElement("button");
  navButton.classList.add("dropbtn");
  navButton.textContent = "Menu";

  const dropdownContent = document.createElement("div");
  dropdownContent.setAttribute("id", "myDropdown");
  dropdownContent.classList.add("dropdown-content");

  const dropdownItem1 = document.createElement("a");
  dropdownItem1.textContent = "Item 1";

  const dropdownItem2 = document.createElement("a");
  dropdownItem2.textContent = "Item 2";

  dropdownContent.appendChild(dropdownItem1);
  dropdownContent.appendChild(dropdownItem2);

  navButton.appendChild(dropdownContent);

  navButton.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
  });

  navContainer.appendChild(navBar);
  navContainer.appendChild(navButton);

  contentDiv.appendChild(navContainer);
}
