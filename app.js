/* ----------------------------------------------------------------------------

Exercício: 005
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES - VERSÃO CÓDIGO REDUZIDO
    
    O exercício anterior, mas com quantidade de código JS reduzida.

---------------------------------------------------------------------------- */
// //para pegarmos todos os elementos de 1 a três vamos usar um for
// // variavel r começa com 1 enquanto ela for menor ou igual 3 acrecente um a ela
for(let r = 1; r <=3 ; r++){
    // // concatenar o numero de r ao fim do elemento ex: value_ + 1,2,3 range_+ 1,2,3
    let elemento = document.querySelector("#range_" + r)
    // // especificar a quantidade do range vai de 0 a 100
    elemento.setAttribute('min', 0)
    elemento.setAttribute('max', 100)
    // // agora definiremos o valor inicial do range
    elemento.value = 0;
    // // cria o evento listener para o valor ser atualizado no html
    // // quando ele for mudado com input vai disparar uma arow function
    // // o parametro dentro da arow funtion pode ser qualquer nome e provisório
    elemento.addEventListener('input', (ksks)=>{
        // //concatena o value com o r ex value_ + 1,2,3
        // // busca o elemento e concatena com 1 2 ou 3 da variavel r
        // // textContent recebe o valor atualizado do input pelo target ksks.target.value e atualiza o html com o novo valor 
        document.querySelector("#value_" + r).textContent = ksks.target.value
    });

}