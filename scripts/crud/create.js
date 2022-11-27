window.page.create = () => {
    main.innerHTML = "";

    const form = common.createHtmlTag('form', 'createForm')

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
        text: "Cadastrar",
        onClick: async (addEvent) => {
            addEvent.preventDefault();
            
            if (!form.checkValidity()){
                return;
            }

            await API.register({
                tiragem: parseInt(tiragem.input.value), 
                titulo: titulo.input.value, 
                autor: autor.input.value, 
                descricao: desc.input.value
            });

            tiragem.input.value = ""
            titulo.input.value = ""
            autor.input.value = ""
            desc.input.value = ""
        }
    }));   
    

    main.appendChild(form);   
}