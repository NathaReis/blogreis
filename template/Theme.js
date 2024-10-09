const template = document.createElement("template");
template.innerHTML = `
    <style>
        li#theme-box.dark {
            transform: rotateX(180deg);

            .moon::after {
                transform: rotateZ(-180deg);
                position: absolute;
                content: '';
                top: -5px;
                left: 4px;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background: url(./assets/globe-americas.svg);
            }
        }

        li#theme-box {
            height: 50px;
            width: 50px;
            margin-top: 20px;
            cursor: pointer;
            transition: .3s;
            display: grid;
            align-items: center;
            justify-content: center;

            .moon {
                position: relative;
                width: 24px;
                height: 24px;
                background-color: white;
                border-radius: 50%;
            }
            
            .moon::before {
                position: absolute;
                content: '';
                top: -1px;
                left: 0;
                width: 24px;
                height: 15px;
                border-radius: 50%;
                background-color: var(--secundary);
            }
            
            .moon::after {
                position: absolute;
                content: '';
                top: -5px;
                left: 4px;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background: url(./assets/globe-americas.svg);
                transition: .3s;
            }
        }
    </style>

    <li id="theme-box">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="yellow" class="bi bi-brightness-alt-high-fill" viewBox="0 0 16 16">
            <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 1 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4"/>
        </svg>
        <div class="moon"></div>
    </li>
`

export class LiTheme extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const $html = document.querySelector("html");
        const $li = this.shadowRoot.querySelector("#theme-box");

        $li.onclick = () => {
            $html.classList.toggle("dark");
            $li.classList.toggle("dark");
        
            const theme = !sessionStorage.getItem("theme") ? '0' : sessionStorage.getItem("theme") === '1' ? '0' : '1';
            sessionStorage.setItem("theme", theme);
        }
        
        (() => {
            const theme = +sessionStorage.getItem("theme");
            if(!theme) {
                $html.classList.add("dark");
                $li.classList.add("dark");
            }
        })()
    }
}