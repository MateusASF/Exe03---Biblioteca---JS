(() => {
    window.page = {};
    for (const pages of [
        'crud/create', 
        'crud/get',
        'info', 
        'basePage', 
        'common',
        'API',
        'style']) {
        const script = document.createElement('script');
        script.setAttribute("src", `./scripts/${pages}.js`);
        document.head.appendChild(script);
    }

    const link = document.createElement('link')
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    document.body.appendChild(link);


    window.addEventListener('load', () =>{
        page.base.addHeader ();
        window.main = document.createElement('main');

        const imagem = document.createElement('img');
        imagem.setAttribute('src', '../assets/biblioteca3.jpg')

        main.appendChild(imagem)

        document.body.appendChild(main);
    })
})()





