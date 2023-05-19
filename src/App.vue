<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- Navbar -->
    <nav id="navbar">
      <RouterLink class="nav-link" to="/about">About</RouterLink>
      <a class="nav-link" href="https://cadonon.esd-monsite.fr/portfolio/" target="_blank"> A musical experience by Chloé
        Adonon</a>
    </nav>

    <!-- Title -->
    <RouterLink to="/">
      <h1>Black girl groups</h1>
    </RouterLink>

    <!-- Description -->
    <div class="description">
      <p>
        Black girl magic in motion: A visual tribute to iconic girl groups!
      </p>
      <p>Celebrating black girl groups from the 60&#8217; to now</p>
    </div>
  </header>

  <!-- Image -->
  <img src="/record-player-40.png" class="record-player" alt="record-player" />

  <RouterView />
</template>
 
<script>
window.onload = (event) => {
  if (window.location.pathname === '/') {
    let header = document.querySelector('header')
    let headerHeight = header.offsetHeight
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)
    let recordPlayer = document.querySelector('.record-player')
    recordPlayer.style.top = `${headerHeight}px`
  }
};
</script>

<style scoped lang="scss">
@use 'assets/main.scss' as *;

nav#navbar {
  width: 100%;
  padding: 35px 0px;
  border-bottom: 5px solid $white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 35px;

  .nav-link {
    color: $white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

  }

}

a {
  text-decoration: none;

  h1 {
    font-size: 150px;
    font-weight: 900;
    text-align: center;
    padding: 20px 0px;
    text-decoration: none;
    color: $white;
  }
}

div.description {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

div.description p {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
}
</style>
