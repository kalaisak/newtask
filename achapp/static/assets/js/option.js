function updateOptions() {
    var numberDropdown = document.getElementById("numbers");
    var letterDropdown = document.getElementById("letters");
    
    // Clear previous options
    letterDropdown.innerHTML = '';

    // Get the selected value of the number dropdown
    var selectedValue = numberDropdown.value;

    // Define options for the second dropdown based on selected number
    var options = [
        ['A', 'B', 'C'],
        ['E', 'F', 'G'],
        ['H', 'I', 'J'],
        ['K', 'L', 'M'],
        ['N', 'O', 'P']
    ];

    // Add options to the second dropdown based on selected number
    for (var i = 0; i < options[selectedValue - 1].length; i++) {
        var option = document.createElement("option");
        option.text = options[selectedValue - 1][i];
        option.value = options[selectedValue - 1][i];
        letterDropdown.add(option);
    }

    // Call the function to update the third dropdown
    updateThirdOptions();
}

function updateThirdOptions() {
    var letterDropdown = document.getElementById("letters");
    var thirdOptionsDropdown = document.getElementById("thirdOptions");
    
    // Clear previous options
    thirdOptionsDropdown.innerHTML = '';

    // Get the selected value of the second dropdown
    var selectedLetter = letterDropdown.value;

    // Define options for the third dropdown based on selected letter
    var options = {
        'A': [1, 2, 3],
        'B': [4, 5, 6],
        'C': [7, 8, 9],
        'E': [10, 11, 12],
        'F': [13, 14, 15],
        'G': [16, 17, 18],
        'H': [19, 20, 21],
        'I': [22, 23, 24],
        'J': [25, 26, 27],
        'K': [27, 28, 29],
        'L': [30, 31, 32],
        'M': [33, 34, 35],
        'N': [36, 37, 38],
        'O': [40, 41, 42],
        'P': [43, 44, 45]
    };

    // Add options to the third dropdown based on selected letter
    for (var i = 0; i < options[selectedLetter].length; i++) {
        var option = document.createElement("option");
        option.text = options[selectedLetter][i];
        option.value = options[selectedLetter][i];
        thirdOptionsDropdown.add(option);
    }
}

// Call the function initially to populate the dropdowns
updateOptions();