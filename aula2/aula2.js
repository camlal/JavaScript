        let aspasSimples = 'Estamos criando uma string com aspas simples'; //String em resumo são textos que podem ultilizados no JavaScript e 
        //para utiliza-lo podemos usar aspas simples, duplas, ou string tamplate

        console.log(aspasSimples);

        let aspasDupla = "Estamos criando uma string com aspas duplas"; //Exemplo de string com aspas Duplas

        console.log(aspasDupla);
    
        let templateLateral = `String interpolation allows embedding expressions like ${1 + 1}.`; //Essa string tamplate,. basicamente usados em casos

        console.log(templateLateral);
        //onde há necessidade de realizar uma ação aritimetica (como no exemplo) quando guardamos um variavel dentro dela. O simbulo ${} em 
        //javascript é usado para interpolar variaveis, ou seja, para retornar o valor dela 

        //Veja abaixo exemplo de como e quando usar as crases
        let nome = 'pingu' ;
        let idade = 15; //Número usados sem aspas (simples ou duplas),

        let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos` ;

        console.log(mensagem);

        let primeiroNome = 'Pingu' ;
        let ultimoNome = 'Fogli' ;
        let nomeCompleto = primeiroNome + ' ' + ultimoNome; // Usando o +
        let nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}` ; // Using template lietral

        console.log(nomeCompletoTemplate);

