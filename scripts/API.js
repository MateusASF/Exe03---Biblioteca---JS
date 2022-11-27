const urlBase = 'http://livros.letscode.dev.netuno.org:25390/services/'

window.API = {
    register: async ({ tiragem, titulo, autor, descricao }) => {
        try {
            const response = await fetch(urlBase + 'livro', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    aluno: {
                        uid: "bd29827c-2282-4f59-ad04-17a5349304fc"
                    },
                    tiragem,
                    titulo,
                    autor,
                    descricao
                })
            });
            if (response.ok) {
                alert("Cadastrado com sucesso!");
            } else {
                alert("Falha ao cadastrar!");
            }
        } catch (error) {
            console.error("deu erro", error)
        }
    },


    delete: async (uid) => {
        const response = await fetch(`${urlBase + 'livro'}`, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            aluno: {
                uid: "bd29827c-2282-4f59-ad04-17a5349304fc",
            },
            uid
            }),
        }).catch((error) => {
            console.log("Erro na comunicação:", error);
        });  

        if(response.ok) {
            alert('Item Excluído')
            document.location.reload(true);
        } else {
            alert('Erro inesperado')
        }

        if (!response) {
            errorHandler();
            return [];
        }

        return await response.json();
    },


    listar: async (nomeLivro = "") => {
        let response;
        try {
            response = await fetch(urlBase + 'livro/lista', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        "text": nomeLivro,
                        "aluno": {
                            "uid": "bd29827c-2282-4f59-ad04-17a5349304fc"
                        }
                    }
                )
            });
        } catch (error) {
            console.error("deu erro", error)
        }

        if (!response) {
            errorHandler();
            const booksStorage = JSON.parse(sessionStorage.getItem('initalBooks'));
            return booksStorage;
        }

        const initialBooks = await response.json();
        sessionStorage.setItem('initialBooks', JSON.stringify(initialBooks));
        return initialBooks;
    },

    update: async ({id, tiragem, titulo, autor, descricao}) => {
        const response = await fetch(urlBase + 'livro', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uid: id,
                aluno: {
                    uid: "bd29827c-2282-4f59-ad04-17a5349304fc",
                },
                tiragem: tiragem,
                titulo: titulo,
                autor: autor,
                descricao: descricao,
            }),
        }).catch((error) => {
            alert("Erro na comunicação:", error);
        });

        if(response.ok) {
            alert('Item Editado')
            document.location.reload(true);
        } else {
            alert('Erro inesperado')
        }

        if (!response) {
            errorHandler(response);
            return [];
        }

        return await response.json();
    },
}