const doList = document.getElementById('do-list');
const doInput = document.getElementById('new-do');
doInput.addEventListener('keypress', (e) =>
{
    if (e.key === 'Enter') {
        addDo();
    }
});

function addDo() {
    
    const doText = doInput.value.trim();

    if (doText === "") return;

    const doItem = document.createElement('li');
    doItem.innerHTML = `
        <input type="checkbox" class="do-checkbox">
        <span class="do-text">${doText}</span>
        <button class="update" onclick="updateDo(this)">Update</button>
        <button onclick="deleteDo(this)">Delete</button>
    `;

    doList.appendChild(doItem);
    doInput.value = "";
}

function deleteDo(button) {
    const doItem = button.parentElement;
    doList.removeChild(doItem);
}

function deleteSelectedDo() {
    const checkboxes = document.querySelectorAll('.do-checkbox:checked');
    checkboxes.forEach(checkbox => {
        const doItem = checkbox.parentElement;
        doList.removeChild(doItem);
    });
}

function updateDo(updateButton) {
    const doItem = updateButton.parentElement;
    const doTextElement = doItem.querySelector('.do-text');
    const newText = prompt("Update Task", doTextElement.innerText);

    if (newText !== null && newText.trim() !== "") {
        doTextElement.innerText = newText.trim();
    }}
