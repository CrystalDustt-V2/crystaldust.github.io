// Get all input cells in the crossword grid
const cells = document.querySelectorAll('.crossword input');

// Function to move focus based on current cell coordinates and arrow key direction
function moveFocus(currentRow, currentCol, direction) {
    let newRow = currentRow;
    let newCol = currentCol;

    // Update row and column based on the arrow key direction
    switch (direction) {
        case 'ArrowUp':
            newRow = currentRow > 0 ? currentRow - 1 : currentRow; // Move up
            break;
        case 'ArrowDown':
            newRow = currentRow < 25 ? currentRow + 1 : currentRow; // Move down
            break;
        case 'ArrowLeft':
            newCol = currentCol > 0 ? currentCol - 1 : currentCol; // Move left
            break;
        case 'ArrowRight':
            newCol = currentCol < 25 ? currentCol + 1 : currentCol; // Move right
            break;
    }

    // Get the next cell by ID based on updated coordinates
    const nextCell = document.getElementById(`cell-${newRow}-${newCol}`);
    
    // Focus on the next cell if it exists and is not disabled
    if (nextCell && !nextCell.disabled) {
        nextCell.focus();
    }
}

// Add event listeners to all cells to listen for arrow key presses
cells.forEach(cell => {
    cell.addEventListener('keydown', (e) => {
        // Check if the pressed key is an arrow key
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault(); // Prevent the default arrow key behavior (scrolling)
            
            // Get the current cell's row and column from its ID (formatted as 'cell-row-col')
            const [ , row, col] = cell.id.split('-').map(Number);
            
            // Call moveFocus to change focus to the next cell in the direction of the arrow key
            moveFocus(row, col, e.key);
        }
    });
});
