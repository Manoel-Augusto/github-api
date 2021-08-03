import './styles.css';

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Card from 'components/Card';

type FormData = {
  url: string;
};

type AddressGitHub = {
  avatar_url:string;
  url: string;
  followers: string;
  location:string;
  name:string;
};

const GithubSearch = () => {
  const [addressGitHub, setAddressGitHub] = useState<AddressGitHub>();
  const [formData, setFormData] = useState<FormData>({
    url: '',
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${formData.url}`)
      
      .then((response) => {
        setAddressGitHub(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        setAddressGitHub(undefined);
        console.log(error);
      });
  };
  return (
    <div className="github-search-container">
     
      <div className="container search-container">
      <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="url"
              value={formData.url}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />

            <button type="submit" className=" search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {addressGitHub && (
            <Card  avatar={addressGitHub.avatar_url}perfil={addressGitHub.url} seguidores={addressGitHub.followers} localidade={addressGitHub.location} nome={addressGitHub.name}/>
        )}
    </div>
  );
};

export default GithubSearch;
