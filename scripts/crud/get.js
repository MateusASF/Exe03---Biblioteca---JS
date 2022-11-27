window.page.get = async () => {
    main.innerHTML = "";

    let data = await API.listar()


    const form = common.createHtmlTag('form', 'editForm')

    const titulo = common.createField ({
        labelText: 'Titulo',
        field: 'titulo',
        required: 'true'
    });

    const autor = common.createField ({
        labelText: 'Autor',
        field: 'autor',
        required: 'true'
    });

    const desc = common.createField ({
        labelText: 'Descrição',
        inputType:'textarea',
        field: 'descricao',
        required: 'true'
    });

    const tiragem = common.createField ({
        labelText: 'Tiragem',
        inputType: 'number',
        field: 'tiragem',
        required: 'true'
    });

    
    //tiragem.input.
    
    form.append(titulo.field, autor.field, desc.field, tiragem.field);

    form.appendChild(common.createButton({
        text: "Atualizar",
        onClick: async (addEvent) => {
            addEvent.preventDefault();
            
            if (!form.checkValidity()){
                return;
            }

            const loadId = form.id

            await API.update({
                id: loadId,
                tiragem: parseInt(tiragem.input.value), 
                titulo: titulo.input.value, 
                autor: autor.input.value, 
                descricao: desc.input.value
            });

        }
    }));    
    main.appendChild(form);

    form.style.display = 'none';


    main.appendChild(common.buscar())

    main.appendChild(common.createListaLivros(common.criaCardLivros(data)))

    //main.appendChild(common.listarLivros(common.criaCardLivros(data)))
}