                let opcoes = document.querySelectorAll(".opcoes");
                let teste = document.querySelector("#cores");
                let body = document.body;
        
                body.style.background = "white";
        
                teste.onclick =() => {
                    if (opcoes[0].selected) {
                        body.style.background = "#B22222";
                    }
        
                    else if (opcoes[1].selected) {
                        body.style.background = "#3CB371";
                    }
        
                    else if (opcoes[2].selected) {
                        body.style.background = "#1E90FF";
                    }
                    else if (opcoes[3].selected) {
                        body.style.background = "#FFD700";
                    }
                }