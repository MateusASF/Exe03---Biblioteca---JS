
window.page.base  = {
    addHeader: () => {
        const header = document.createElement('header');
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');

        const arrayHeader = [
            {nome:"create", onClick: () => {page.create()}},
            {nome:"get", onClick: () => {page.get()}},
            {nome:"info", onClick: () => {page.info()}}
        ];

        arrayHeader.forEach(page => {
            const item = document.createElement("li");
            item.textContent = page.nome;
            item.addEventListener("click", page.onClick)
            ul.appendChild(item);

        });

        nav.appendChild(ul);
        header.appendChild(nav);
        document.body.appendChild(header);

    }
}