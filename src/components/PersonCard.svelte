<script lang="ts">
  import type { Person } from "../models/person";

  export let person: Person;
</script>

<div class="card">
  <img src={person.imageURL} alt={person.name} />

  <div class="card-content">
    <div class="title">
      <div>{person.name}</div>
      <div>{person.age} years</div>
    </div>

    <div class="bio">{person.bio}</div>
  </div>
</div>

<style>
  .card {
    width: 100%;
    background-color: white;
    box-shadow: gray 0 1px 2px;
    border-radius: 4px;
    display: flex;
    gap: 4px;
    flex-direction: column;
    font-size: 24px;
  }

  img {
    object-fit: cover;
  }

  .card-content {
    padding: 16px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .bio {
    padding: 16px;
  }
</style>
