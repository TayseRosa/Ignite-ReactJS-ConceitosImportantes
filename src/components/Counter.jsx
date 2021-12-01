import { useState } from 'react';

//IMUTABILIDADE//

//Digamos - Forma tradicional -  Altera diretamente no array
//usuarios = ['Tayse Rosa', 'Joana', 'Maria']
//usuarios.push('Joaquim')

//Conceito de Imutabilidade
//Criar um novo array e adicionar a nova informação - usar o spread operator
//Exemplo;
//novoUsuario = [...usuarios, 'Joaquim']


export function Counter(){
  //let it change - deixe usso mudar
  const [ counter, setCounter ] = useState(0);

  function increment(){
    setCounter(counter+1);
  }

  return(
    <div>
      <h2> {counter} </h2>
      <button type="button" onClick={increment} >  
          Increment
      </button>
    </div>
  )
}