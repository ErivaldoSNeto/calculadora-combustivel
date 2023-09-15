/**
 * Esta função é responsável por calcular qual combustível é mais vantajoso 
 * financeiramente (álcool ou gasolina) e atualizar a interface do usuário com 
 * os resultados.
 * 
 * @param {Event} event - O evento disparado ao enviar o formulário.
 */
function calcular(event) {
    // Previne a ação padrão do formulário (que seria atualizar a página).
    event.preventDefault(); 

    // Obtém o valor inserido pelo usuário no campo do álcool.
    let alcoolInput = document.getElementById("alcool").value;

    // Obtém o valor inserido pelo usuário no campo da gasolina.
    let gasolinaInput = document.getElementById("gasolina").value;

    // Obtém a seção onde o resultado será exibido.
    let contentResult = document.getElementById("content-result");

    // Obtém o local onde o texto do resultado será inserido.
    let textResult = document.getElementById("text-result");

    // Obtém os locais onde os preços do álcool e da gasolina serão inseridos.
    let alcoolSpan = document.getElementById("alcool-result");
    let gasolinaSpan = document.getElementById("gasolina-result");

    // Realiza o cálculo para determinar a relação preço álcool/gasolina.
    let calculo = (alcoolInput / gasolinaInput);

    // Se a relação for menor que 0.7, o álcool é mais vantajoso. 
    // Caso contrário, a gasolina é mais vantajosa.
    if (calculo < 0.7) {
        textResult.innerHTML = "Compensa usar álcool";
    } else {
        textResult.innerHTML = "Compensa usar gasolina";
    }

    // Atualiza os preços do álcool e da gasolina na interface.
    alcoolSpan.innerHTML = "Álcool R$" + alcoolInput;
    gasolinaSpan.innerHTML = "Gasolina R$" + gasolinaInput;

    // Remove a classe 'hide', tornando o resultado visível na página.
    contentResult.classList.remove("hide");
}
