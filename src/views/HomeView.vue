<template>
  <div class="home">

  </div>

  <div class="hero-container container-fluid">
    <div class="row">
      <div class="bg-hero col">
        <img class="hero-img" alt="Vue logo" src="../assets/mylogo1.svg">
        <h1 class="hero-text">Leifur Nielsen</h1>
        <p class="hero-subtext h3">Multimedia design </p>

      </div>
    </div>
  </div>


  <div class="about-me container p-5" id="about">

    <h2>ABOUT ME</h2>
    <p>
      Hi, my name is Leifur Nielsen and I want to work as a frontend developer. I am a goal-oriented multimedia designer
      with experience from both as a salesman and graphical designer. I enjoy all aspects of designing and coding.
      Designing with a clear plan to achieve all my goals for a project.

    </p>



  </div>

  <div class="portfolio" id="portfolio">
    <div class="portfolio-headline text-center p-4">
      <h2>PORTFOLIO</h2>
    </div>

    <div class="portfolio-cards container p-5 ">
      <div class="row g-2">

        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="portfolio-card card">
            <img src="/assets/trap.jpg" class="card-image-top"/>
            
            <div class="card-body">
              <h5 class="card-title">Trapholt</h5>
              <p class="card-text">
                This was an assignment to redesign the Trapholt website.
              </p>


              <a href="https://trapholt.leifurnielsen.com/" target="_blank">VISIT</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="portfolio-card card">
            <img src="/assets/security.jpg" class="card-image-top">
            
            <div class="card-body">
              <h5 class="card-title">Telesikring</h5>
              <p class="card-text">
                This was an assignment to redesign the Telesikring website I and a teammate recreated it in Adobe Xd.
              </p>


              <a href="/assets/tele.pdf" target="_blank">PDF</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="portfolio-card card">

            <img src="/assets/billiard.jpg" class="card-image-top"/>
            
            <div class="card-body">
              <h5 class="card-title">Billiard</h5>
              <p class="card-text">
                This was a personal project. I wanted to create a game and host it on the web.
              </p>


              <a href="https://www.leifurnielsen.com/games/billiard" target="_blank">VISIT</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="portfolio-card card">

            <img src="/assets/Chicken.jpg" class="card-image-top"/>

            


            <div class="card-body">
              <h5 class="card-title">Chicken statue</h5>
              <p class="card-text">
                This was a personal project I made using photogrammetry then I retopologized the model and textured it.
                I wanted to learn to make models for games using photogrammetry.
              </p>


              <a href="/assets/Chicken.jpg" target="_blank">IMAGE</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="portfolio-card card">
            <img src="/assets/Gamebattle.jpg" class="card-image-top"/>

            


            <div class="card-body">
              <h5 class="card-title">Online game</h5>
              <p class="card-text">
                This was an assignment to create a game I chose to create a Online game where players fight for victory.
              </p>


              <a href="https://youtu.be/TbVaNi-znzw" target="_blank">VIDEO</a>
            </div>
          </div>
        </div>




      </div>

    </div>


  </div>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'HomeView',
    components: {}
  }
</script>

<style>
  .hero-container {
    background-color: black;
    padding: 100px 50px;

  }

  .bg-hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


  }

  .hero-img {
    margin-bottom: 25px;

    max-width: 250px;



  }

  .hero-text {
    color: white;
    font-weight: bold;
    font-family: Roboto, sans-serif;


  }

  .hero-subtext {
    color: white;
    font-weight: normal;
    font-family: Roboto, sans-serif;


  }

  .about-me p {
    font-size: 24px;
  }

  .portfolio-headline {
    background-color: black;
    color: white;
  }

  .card-image-top {
    width: 100%;
    height: auto;
    display: block;


  }

  .card a {
    display: block;
    color: gray;
    text-decoration: none;
    transition: color .3s ease;

  }

  .card a:hover {
    color: red;

  }
</style>