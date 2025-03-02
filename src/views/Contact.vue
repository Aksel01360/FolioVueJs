<template>
    <div>
      <h1>Contactez-moi</h1>
      <p>Remplissez le formulaire ci-dessous pour me contacter.</p>
      <form>
        <label for="name">Nom :</label>
        <input type="text" id="name" required />
  
        <label for="email">Email :</label>
        <input type="email" id="email" required />
  
        <label for="message">Message :</label>
        <textarea id="message" required></textarea>
  
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Contact",
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
  }
  input, textarea {
    margin-bottom: 10px;
    padding: 8px;
  }
  button {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  