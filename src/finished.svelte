<script>
    import { fly } from 'svelte/transition';
    export let finished;
    export let clearFinished;
</script>

<style>
    .finished {
        min-width: 40rem;
        background-color: #fff;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
        position: relative;
        overflow: hidden;
    }

    h1 {
        margin-bottom: 3rem;
        text-align: center;
    }
</style>

<div class="finished">
    <h1>Done</h1>
    <ul>
        {#each finished as finish}
            <li in:fly>{finish}</li>
        {/each}
    </ul>
    <button on:click={clearFinished}>clear</button>
</div>
