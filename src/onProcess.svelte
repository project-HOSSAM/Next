<script>
    import { fly } from 'svelte/transition';
    export let onProcess;
    export let addItemToFinished;
</script>

<style>
    .on-process {
        min-width: 40rem;
        background-color: #fff;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }
    h1 {
        text-align: center;
        margin-bottom: 3rem;
    }
</style>

<div class="on-process">
    <h1>In progress</h1>
    <ul>
        {#each onProcess as proces, i}
            <li in:fly {i} on:click={() => addItemToFinished(i)}>{proces}</li>
        {/each}
    </ul>
</div>
