<template>
   <nav class="nav" id="home">
    <a href="#home">Home</a> |
    <a href="#about">About me</a> |
    <a href="#portfolio">Portfolio</a> |
    <a href="#contact">Contact me</a>

  </nav>
</template>

<style>

.nav {
  display: flex;
  justify-content: center;
  gap: 6px;
  
}

.nav a {
color: black;
text-decoration: none;
transition: color .3s ease;


  
}

.nav a:hover {
color: red;

  
}
  
</style>
