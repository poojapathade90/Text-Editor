let editor = document.getElementById('editor');
let undoStack = [];
let redoStack = [];

// Add text to the undo stack
editor.addEventListener('input', () => {
    undoStack.push(editor.innerHTML); // Save the current state
    redoStack = []; // Clear redo stack after new input
});

// Undo functionality
document.getElementById('undo').addEventListener('click', () => {
    if (undoStack.length > 0) {
        redoStack.push(undoStack.pop()); // Move the last state to redo stack
        editor.innerHTML = undoStack[undoStack.length - 1] || ''; // Update editor
    }
});

// Redo functionality
document.getElementById('redo').addEventListener('click', () => {
    if (redoStack.length > 0) {
        undoStack.push(redoStack.pop()); // Move the last redo state back to undo stack
        editor.innerHTML = undoStack[undoStack.length - 1];
    }
});

// Font family change
document.getElementById('font-family').addEventListener('change', () => {
    document.execCommand('fontName', false, document.getElementById('font-family').value);
});

// Font size change
document.getElementById('font-size').addEventListener('change', () => {
    document.execCommand('fontSize', false, document.getElementById('font-size').value);
});

// Font style (italic/normal/oblique) change
document.getElementById('font-style').addEventListener('change', () => {
    document.execCommand('italic', false, document.getElementById('font-style').value === 'italic');
});

// Bold button functionality
document.getElementById('bold').addEventListener('click', () => {
    document.execCommand('bold', false, null); // Toggle bold on selected text
});

// Italic button functionality
document.getElementById('italic').addEventListener('click', () => {
    document.execCommand('italic', false, null); // Toggle italic on selected text
});

// Get the button and editor container elements
const addTextButton = document.getElementById('Text');
const editorContainer = document.getElementById('editor-container');
const saveButton = document.getElementById('save-text');


// Show the editor when the Add Text button is clicked
addTextButton.addEventListener('click', () => {
    editorContainer.style.display = 'block'; // Show the editor container
});