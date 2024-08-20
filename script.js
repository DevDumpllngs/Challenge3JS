function chooseArea(area) {
    let content = document.getElementById('content');
    content.innerHTML = `<p>Has elegido el área de ${area}.</p>`;

    if (area === 'Front-End') {
        content.innerHTML += `
            <p>¿Quieres aprender React o Vue?</p>
            <button onclick="chooseTechnology('React')">React</button>
            <button onclick="chooseTechnology('Vue')">Vue</button>
        `;
    } else if (area === 'Back-End') {
        content.innerHTML += `
            <p>¿Quieres aprender C# o Java?</p>
            <button onclick="chooseTechnology('C#')">C#</button>
            <button onclick="chooseTechnology('Java')">Java</button>
        `;
    }
}

function chooseTechnology(technology) {
    let content = document.getElementById('content');
    content.innerHTML = `<p>Has elegido aprender ${technology}.</p>`;
    content.innerHTML += `
        <p>¿Quieres seguir especializándote en ${technology} o desarrollarte para convertirte en Fullstack?</p>
        <button onclick="specialize('Especializarse en ${technology}')">Especializarse</button>
        <button onclick="specialize('Convertirse en Fullstack')">Fullstack</button>
    `;
}

function specialize(choice) {
    let content = document.getElementById('content');
    content.innerHTML = `<p>Has elegido: ${choice}.</p>`;
    askForTechnologies();
}

function askForTechnologies() {
    let content = document.getElementById('content');
    content.innerHTML += `
        <p>¿En qué tecnologías te gustaría especializarte o conocer?</p>
        <input type="text" id="techInput" placeholder="Escribe una tecnología" onkeypress="handleKeyPress(event)">
        <button onclick="addTechnology()">Añadir Tecnología</button>
        <ul id="techList"></ul>
    `;
}

let technologies = [];

function addTechnology() {
    let techInput = document.getElementById('techInput').value;
    if (techInput) {
        technologies.push(techInput);
        let techList = document.getElementById('techList');
        let newTech = document.createElement('li');
        newTech.textContent = techInput;
        techList.appendChild(newTech);
        document.getElementById('techInput').value = '';

        if (!confirm("¿Hay alguna otra tecnología que te gustaría aprender?")) {
            let content = document.getElementById('content');
            content.innerHTML += `<p>¡Gracias por participar! Has elegido las siguientes tecnologías: ${technologies.join(', ')}.</p>`;
        }
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTechnology();
    }
}
