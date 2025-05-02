
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

function showProduct(qj){
    
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


