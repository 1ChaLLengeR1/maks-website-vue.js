<template>
    <footer class="footer__container">
      <p>&copyCopyright 2023 Maks Kowalski. Wszystkie prawa zastrzeżone.</p>
    </footer>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped>
  .footer__container {
    width: 100%;
    min-height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: #161a1d;
    color: white;
    text-align: center;
    border-top: 2px solid #ba181b;

    p{
      font-size: 15px;
      margin: 0;
      padding: 0;
    }
  }
  </style>
  