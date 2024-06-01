<script lang="ts">
  import cvDoc from './assets/CV_Joshua_Daniels.pdf'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div class="header">
    <nav><a href=".">About Me</a> | <a href="/cv">CV</a> | <a href={cvDoc} download>CV Download</a></nav>
    <h1>Joshua Daniels</h1>
    <h2>Software Engineer</h2>
  </div>

  <div class="card">
    <div class="description">
      <h1>School</h1>
      <p>I went to Wynberg Boys' Junior and High School in Cape Town</p>
    </div>
    <img alt="of me in school uniform" />
  </div>

  <div class="card">
    <img alt="of me in at UCT" />
    <div class="description">
      <h1>University</h1>
      <p>
        I attended the University of Cape Town, achieving a BSc. Majoring in
        Maths and Computer Science
      </p>
    </div>
  </div>

  <div class="card">
    <div class="description">
      <h1>Squash</h1>
      <p>
        I'm an avid squash player. I play normally three times a week, with
        matches on Thursdays.
      </p>
    </div>
    <img alt="of me playing squash" />
  </div>

  <div class="card">
    <img alt="of me with a surfboard and wetsuit" />
    <div class="description">
      <h1>Surfing</h1>
      <p>
        On Sunday mornings I like to head out Muizenberg side and get at least
        two hours of surfing in. It's an aspirational hobby of mine
      </p>
    </div>
  </div>

  <div class="card">
    <div class="description">
      <h1>Gaming</h1>
      <p>
        I'm a regular gamer with my usuals being Fifa, Call of Duty and Marvel's
        Spiderman
      </p>
    </div>
    <img alt="of me playing Playstation with a friend" />
  </div>

  <div class="card">
    <img alt="of me at Allan Gray" />
    <div class="description">
      <h1>Work</h1>
      <p>
        I started working at Allan Gray straight of varsity in January of 2021
      </p>
    </div>
  </div>

  <div class="card">
    <div class="description">
      <h1>Miscellaneous</h1>
      <p>Other hobbies...</p>
    </div>
    <img alt="of me drinking shots" />
  </div>
</main>

<style>
  .header {
    height: 75vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    color: black;
  }

  .card {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }


  .description {
    width: 50vw;

    background-color: #888;
  }

  img {
    width: 50vw;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    /* text-align: center; */

  }


</style>
