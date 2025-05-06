
function closeBox() {
    const box_content = document.getElementById('box-content');
    const iframe = document.getElementById('iframe');

    if (box_content) {
        box_content.style.display = 'none';
    } else {
        console.error('Elemento com id "box-content" não encontrado.');
    }

}


const queijos = [
    {
        nome: "Canastra",
        imagem: "QueijoCanastra.jpg",
        peso: 500,
        preco: 70
    },
    {
        nome: "Minas",
        imagem: "QueijoMinas.jpg",
        peso: 400,
        preco: 23
    },
    {
        nome: "Coalho",
        imagem: "QueijoCoalho.jpg",
        peso: 500,
        preco: 40
    },
    {
        nome: "Gorgonzola",
        imagem: "QueijoGorgonzola.jpg",
        peso: 200,
        preco: 20
    },
    {
        nome: "Brie",
        imagem: "QueijoMinas.jpg",
        peso: 200,
        preco: 30
    }
];

function showProduct(qj) {

    document.querySelector(".iframe-area").innerHTML = `
    <h2>${queijos[qj].nome}</h2>
    <img src="Imagens/${queijos[qj].imagem}" alt="${queijos[qj].nome}" width="200" height="150">
    <p>Peso: ${queijos[qj].peso}g</p>
    <div style="align-items: baseline; display: flex; padding-left: 40px; gap: 5px;">
    <p>Preço:</p><strong style="color: red;">R$ ${queijos[qj].preco},00</strong>
    </div>
    `;
    return qj;
}
function alertCpf() {
    const cpfInput = document.getElementById("cpf-imp");
    const cpf = cpfInput.value;
    const cpfvetor = cpf.split("");
    if (cpfvetor.length === 11 && cpfvetor[3] === "." || cpfvetor[7] === "." || cpfvetor[11] === "-") {
        alert(`Insira apenas dígitos, caracter "." inválido!`);
        cpfInput.value = "";
    } else if (cpf.value === "12345678910") {
        alert("Dígitos verificadores inválidos!");
        cpfInput.value = "";
    } else if (isNaN(cpf)) {
        alert("CPF só pode ter números!");
        cpfInput.value = "";
    }
    else if (cpf.length === 11) {

    } else if (cpf.length != 11) {
        alert("CPF tem que ter 11 dígitos!");
        cpfInput.value = "";
    } else if (cpfvetor[10] == primeiro_digito || cpfvetor[11] == segundo_digito) {
        alert("CPF Válido");
        cpfInput.value = "";
    }
    else {
        alert("CPF Inválido");
        cpfInput.value = "";
    }


}
function calculaDV(num) {
    var resto = 0, soma = 0;
    for (i = 2; i < 11; i++) {
        soma = soma + ((num % 10) * i);
        num = parseInt(num / 10);
    }
    resto = (soma % 11);
    return (resto > 1) ? (11 - resto) : 0;
}


function adquirirValor() {
    const selectElement = document.getElementById("queijos_select");
    const selectedValue = selectElement.value;
    const selectedText = selectElement.options[selectElement.selectedIndex].text;
    const productBox = document.getElementById("comboBox");
    const valorBox = document.getElementById("valorArea");

    console.log("Valor selecionado:", selectedValue);
    console.log("Texto selecionado:", selectedText);

    if (selectedValue === "5") {
        alert("Nunhum produto selecionado!");
        return;
    }

    productBox.innerHTML += `${selectedText}\n`;

    const valorAtual = parseFloat(valorBox.value) || 0;
    valorBox.value += `${(queijos[selectedValue].preco)}\n`;
    const novoValor = valorAtual + queijos[selectedValue].preco;
    valorBox.value = novoValor.toFixed(2);
   
}