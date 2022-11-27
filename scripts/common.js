window.common = {
    //CREATE
    createField: ({labelText, inputType = "text", field, required}) => {
        const fieldElement = common.createHtmlTag('fieldset',field);
        const labelElement = document.createElement('label');
        labelElement.textContent = labelText + ':';
        let inputElement = null;
        if (inputType.toLowerCase() === "textarea"){
            inputElement = document.createElement('textarea');
            inputElement.setAttribute('rows', 5);
        } else {
            inputElement = document.createElement('input');
            inputElement.setAttribute('type', inputType);
        }
        inputElement.setAttribute("required", required);
        fieldElement.appendChild(labelElement);
        fieldElement.appendChild(inputElement);
        
        return {field:fieldElement, input:inputElement};
    },

    createHtmlTag: (tag, className = "", idValue = "") => {
        const element = document.createElement(tag);
        element.classList.add(className);
        element.setAttribute("id", idValue);
        return element;
    },

    createButton: ({text, onClick =() =>{}}) =>{
        const button = document.createElement('button');
        button.innerText = text;
        button.addEventListener('click', onClick);
        return button;
    }, 

    //GET
    listarLivros: ({tituloDoLivro, uidDoLivro, tiragemDoLivro, autorDoLivro, descricaoDoLivro}) => {
        const divListarLivro = document.createElement('div');
        divListarLivro.classList.add('cardLivroLista')

        const divTituloLivro = document.createElement('div');
        divTituloLivro.classList.add('titleLivro')

        const linkDelete = document.createElement('a');
        const linkEdit = document.createElement('a');

        const spanLivro = document.createElement('span');
        const tituloLivro = document.createElement('h3');
        //const uidLivro = document.createElement('p');
        const autorLivro = document.createElement('p');
        const descricaoLivro = document.createElement('p');
        const tiragemLivro = document.createElement('p');

        const iconDelete = document.createElement('i');
        const iconEdit = document.createElement('i');
    
        iconDelete.classList.add('material-icons')
        iconDelete.classList.add('deleteIcon')
        iconEdit.classList.add('material-icons')
        iconEdit.classList.add('editIcon')
            
        iconDelete.textContent = 'delete';
        iconEdit.textContent = 'edit';

        // linkDelete.href = "#"
        // linkEdit.href = "#"

        linkEdit.setAttribute("id", uidDoLivro)
        linkEdit.addEventListener('click', common.updateLivro);
    
        linkDelete.setAttribute("id", uidDoLivro)
        linkDelete.addEventListener('click', common.deleteLivro); 

        linkDelete.appendChild(iconDelete)
        linkEdit.appendChild(iconEdit)

        divTituloLivro.appendChild(tituloLivro);

        spanLivro.appendChild(autorLivro);
        spanLivro.appendChild(descricaoLivro);
        spanLivro.appendChild(tiragemLivro);

        tituloLivro.textContent =  "Titulo: " + tituloDoLivro;

        autorLivro.textContent =  "Autor: " + autorDoLivro;
        descricaoLivro.textContent = "Descricao: " + descricaoDoLivro;
        tiragemLivro.textContent = "Tiragem: " + tiragemDoLivro;

        divListarLivro.appendChild(spanLivro);
        divTituloLivro.appendChild(linkDelete);
        divTituloLivro.appendChild(linkEdit);

        divListarLivro.appendChild(divTituloLivro);
        divListarLivro.appendChild(spanLivro);
        return divListarLivro;
    },

    createListaLivros: (children) => {
        const div = document.createElement('div');
        div.classList.add('containerCards')
        for (const child of children) {
            div.appendChild(child);
        }
        return div;
    },

    criaCardLivros: (data) => {
        console.log(data);
        const array = [];
        for (i in data) {
            const titulo = JSON.stringify(data[i], ['titulo']).replace(`{"titulo":"`, "").replace(`"}`, "")
            const uid = JSON.stringify(data[i], ['uid']).replace(`{"uid":"`, "").replace(`"}`, "")
            const tiragem = JSON.stringify(data[i], ['tiragem']).replace(`{"tiragem":`, "").replace(`}`, "")
            const autor = JSON.stringify(data[i], ['autor']).replace(`{"autor":"`, "").replace(`"}`, "")
            const descricao = JSON.stringify(data[i], ['descricao']).replace(`{"descricao":"`, "").replace(`"}`, "")
            
            const element = common.listarLivros({
                tituloDoLivro: titulo,
                uidDoLivro: uid,
                tiragemDoLivro: tiragem,
                autorDoLivro: autor,
                descricaoDoLivro: descricao,
            })
            
            array.push(element)
        }
        return array
    },

    //buscar
    buscar: () => {
        const divContainerBusca = document.createElement('div')

        divContainerBusca.classList.add('searchBusca')

        const busca = document.createElement('input')
        busca.setAttribute("placeholder", "Digite o Titulo do Livro")

        const buscaButton = document.createElement('input')
        buscaButton.setAttribute("type", "submit")
        buscaButton.setAttribute("value", "BUSCAR")

        
        divContainerBusca.appendChild(busca)
        divContainerBusca.appendChild(buscaButton)

        buscaButton.addEventListener('click', () => common.search(busca.value));
        
        return divContainerBusca
    },

    search: async (title) => {
        const newData = await API.listar(title)

        const limpeza = document.querySelector('.containerCards')
        limpeza.remove();

        main.appendChild(common.createListaLivros(common.criaCardLivros(newData)))
    },

    //DELETE
    deleteLivro: async (event) => { 
        console.log(event)

        const idValue = event.path[1].id
        console.log(idValue)

        await API.delete(idValue)

        document.location.reload(true);
    },

    //UPDATE
    updateLivro: async (event) => {
        console.log(event)

        const idValue = event.path[1].id

        const form = document.querySelector('.editForm')

        form.setAttribute('id', idValue)

        form.style.display = 'block';
    },

    //info 
    info: () => {
        const containerInfo = document.createElement('div')
        containerInfo.classList.add('divContainerInfo')

        const imgPessoal = document.createElement('img')
        const titulo = document.createElement('h1')
        const sobre = document.createElement('h3')

        imgPessoal.setAttribute('src', '../assets/foto.jpg')

        titulo.textContent = 'Atividade de Front Dinâmico em Vanilla JS'
        sobre.textContent = 'Atividade realizada por Mateus Augusto dos Santos Fonseca, com o projeto de realizar um modelo de cadastro de biblioteca'

        containerInfo.appendChild(imgPessoal)
        containerInfo.appendChild(titulo)
        containerInfo.appendChild(sobre)
        return containerInfo;
    }
}