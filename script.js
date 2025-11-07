// Input accepts only characters defined in the array
document.querySelector('input').addEventListener('keydown', e => {
    const allowedChars = ['+', '-', '/', '*', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
        'Backspace', 'ArrowLeft', 'ArrowRight']; // Define characters to prevent
    if (!allowedChars.includes(e.key)) {
        e.preventDefault(); // Prevent the character from being typed
    }
})

