(() => {
    window.page = {};
    for (const pages of [
        'crud/create', 
        'crud/get',
        'info', 
        'basePage', 
        'common',
        'API',]) {
        const script = document.createElement('script');
        script.setAttribute("src", `./scripts/${pages}.js`);
        document.head.appendChild(script);
    }

    window.addEventListener('load', () =>{
        page.base.addHeader ();
        window.main = document.createElement('main');
        document.body.appendChild(main);

        //const footer = document.createElement('footer');
        // document.body.appendChild(footer);

    })
})()





