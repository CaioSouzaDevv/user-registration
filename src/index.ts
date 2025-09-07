let content = document.getElementById('content');
const button: HTMLButtonElement = document.querySelector('button[id="add"]');

button.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o submit do formulário
    addEmployee();
});

function addEmployee() {
    let fullName: HTMLInputElement = document.querySelector('#fullName');
    let register: HTMLInputElement = document.querySelector('#register');
    let admin: HTMLInputElement = document.querySelector('input[name="admin"]:checked');
    let active: HTMLInputElement = document.querySelector('#active');

    if (!content || !fullName || !register || !admin || !active) {
        alert('Algum campo está faltando!');
        return;
    }

    content.innerHTML += createLine(
        fullName.value,
        +register.value,
        admin.value,
        active.checked
    );
}

function createLine(
    fullName: string,
    register: number,
    admin: string,
    active: boolean
) {
    return `
   
        ${fullName}</br>
        ${register}</br>
        ${admin}</br>
        ${active ? 'Sim' : 'Não'}</br>

    `;
}