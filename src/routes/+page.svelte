<script lang="ts">
  import { onMount } from "svelte";
  import PersonCard from "../components/PersonCard.svelte";
  import { loadNewPeople, peopleStore } from "../state/people";

  let loadingRef: HTMLElement | undefined;

  let sentRequest = false;

  onMount(() => {
    if (!loadingRef) {
      return;
    }

    const loadingObserver = new IntersectionObserver((entries) => {
      const element = entries[0];

      console.log(element.isIntersecting);

      if (element.isIntersecting) {
        loadNewPeople();
      }
    });

    loadingObserver.observe(loadingRef);
  });
</script>

<div class="app">
  <section class="title">
    <h1>Infinite Scroll Using Svelte</h1>
  </section>

  <div class="grid">
    {#each $peopleStore as person}
      <PersonCard {person} />
    {/each}
  </div>

  <div class="loading-indicator" bind:this={loadingRef}>Loading...</div>
</div>

<style>
  h1 {
    font-size: 32px;
  }

  .app {
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 16px;
  }

  .title {
    background-color: white;
    position: sticky;
    top: 0;
    width: 100%;

    display: grid;
    place-items: center;
  }

  .grid {
    width: 90%;

    display: grid;
    gap: 16px;
  }

  .loading-indicator {
    padding: 16px;
    font-size: 24px;
  }

  @media (min-width: 700px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1000px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
