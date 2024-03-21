<script>
    import { page } from "$app/stores";
</script>


<nav class="flex gap-6 pt-4 px-10">
    {#if !$page.data.user}
        <a href="/login" class="text-stone-50 hover:underline">login</a>
    {/if}

    {#if $page.data.user}
        <a href="/tools" class="text-stone-50 hover:underline">tools</a>
        <form class="text-stone-50" action="/logout" method="POST">
            <button type="submit" class="hover:underline">logout</button>
        </form>
    {/if}
</nav>

<div class="font-display text-stone-50 p-10">
    <h1 class="text-2xl">SELECT USER</h1>
    <ul>
        <li>
            <span>{"> "}</span><a class="hover:underline" href="/@murmuur">murmuur</a>
        </li>
    </ul>
</div>
