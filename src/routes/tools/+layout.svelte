<script>
  import { page } from "$app/stores";
</script>

{#if !$page.data.user}
  <h1 class="text-stone-50 text-7xl">You're not logged in</h1>
  <a href="/login" class="text-stone-50 hover:underline">login</a>
{/if}

{#if $page.data.user}
  <h1 class="text-stone-50 text-7xl">WELCOME</h1>
  <form class="text-stone-50" action="/logout" method="POST">
    <button type="submit" class="hover:underline">logout</button>
  </form>
{/if}

<slot />