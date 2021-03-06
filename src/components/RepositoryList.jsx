import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

//https://api.github.com/orgs/rocketseat/repos

const repository = {
  name:'Unform4',
  description: 'Forms in React JS',
  link: 'https://github.com/tayserosa'
}

export function RepositoryList(){
  const [ repositories, setRepositories ] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}