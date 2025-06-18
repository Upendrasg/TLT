// Define an array of dropdown configurations with their corresponding selected and dropdown element IDs
const options = [
  { selected: 'selectedText', dropdown: 'dropdownList' },
  { selected: 'countrySelectedText', dropdown: 'countryDropdownList' },
  { selected: 'stateSelectedText', dropdown: 'stateDropdownList' },
  { selected: 'deptSelectedText', dropdown: 'deptDropdownList' }
];

// Loop through each dropdown configuration
options.forEach(({ selected, dropdown }) => {
  const selectedElement = document.getElementById(selected); // Get the element that triggers the dropdown
  const dropdownElement = document.getElementById(dropdown); // Get the dropdown list element
  const listItems = dropdownElement.querySelectorAll('li');  // Get all list items within the dropdown

  // Toggle dropdown visibility when the selected element is clicked
  selectedElement.addEventListener('click', () => {
    dropdownElement.classList.toggle('hidden'); // Show/hide dropdown
    selectedElement.classList.toggle('active'); // Toggle active styling
  });

  // Handle selection of dropdown options
  listItems.forEach(item => {
    item.addEventListener('click', () => {
      // Set the selected option's text in the selected element
      selectedElement.querySelector('.selected-text').textContent = item.textContent;

      // Close the dropdown and style the selected element
      dropdownElement.classList.add('hidden');
      selectedElement.classList.add('active');

      // Remove previously selected styles and highlight the current one
      listItems.forEach(li => li.classList.remove('selected-option'));
      item.classList.add('selected-option');
    });
  });

  // Close dropdown if user clicks outside the dropdown area
  document.addEventListener('click', (e) => {
    if (!selectedElement.contains(e.target) && !dropdownElement.contains(e.target)) {
      dropdownElement.classList.add('hidden');
      selectedElement.classList.remove('active');
    }
  });
});
