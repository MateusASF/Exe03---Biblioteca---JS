(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        *{
            border: 0;
            margin: 0;
            padding: 0;
            box-sizing:border-box;
            font-family: arial;
            background: lightblue;
        }

        main {
            height: 100%;
            background: lightblue;
        }

        header {
            background: darkblue;
            height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        main img{
            repeat: no-repeat;
            width: 100%;
            height: 100%;
        }
        
        header nav {
            width: 100%;
            background: darkblue;
        }

        header nav ul {
            display: flex;
            justify-content: space-around;
            background: darkblue;
        }

        header nav ul li {
            list-style: none;
            text-transform: uppercase;
            font-weight: bold;
            color: white;
            background: darkblue;
        }

        fieldset {
            display: flex;
            flex-direction: column;
            margin: .7rem;
            font-weight: bold;
        }

        fieldset input, textarea {
            padding: .5rem;
            border: 2px solid black;
            border-radius: 5px;
            background: white;
        }

        .createForm {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center
        }

        .createForm button {
            margin: .7rem;
            padding: .5rem;
            font-weight: bold;
            border: 2px solid black;
            border-radius: 5px;
            background: lightgray;
        }

        .containerCards {
            padding-top: 2rem;
            margin: 0 3rem;
        }

        .cardLivroLista {
            padding: 2rem;
            background: #9999e6;
            border: 2px solid black;
            border-radius: 5px;
            color: white;
            margin-bottom: 2rem; 
        }

        .titleLivro h3, a, p {
            background: #9999e6;
        }

        .titleLivro {
            color: #141452;
            display: flex;
            background: #9999e6;
        }

        .deleteIcon {
            color: darkred;
            background: #9999e6;
        }

        .deleteIcon:hover {
            cursor: pointer
        }

        .editIcon {
            color: darkgreen;
            background: #9999e6;
        }

        .editIcon:hover {
            cursor: pointer
        }

        .editForm {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center
        }

        .editForm button {
            margin: .7rem;
            padding: .5rem;
            font-weight: bold;
            border: 2px solid black;
            border-radius: 5px
        }

        .searchBusca {
            display: flex;
            margin: 3rem;
            margin-top: 0;
            padding-top: 3rem; 
            justify-content: center;
            flex-direction: column;
        
        }

        .searchBusca input {
            padding: 1rem;
            border: 2px solid black;
            border-radius: 5px;
            text-align: center;
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
            background: white;
        }

        .searchBusca input[type="submit"] {
            background: lightgray;
        }

        .searchBusca input[type="submit"]:hover {
            cursor: pointer
        }

        .divContainerInfo {
            margin: 2 rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        .divContainerInfo img {
            margin: 2rem;
            width: 25%;
            border-radius: 30px;
        }
        `;
        document.body.appendChild(style);
})();    