window.page.get = async () => {
    main.innerHTML = "";

    let data = await API.listar()

    main.appendChild(common.createListaLivros(common.criaCardLivros(data)))

    //main.appendChild(common.listarLivros(common.criaCardLivros(data)))
}