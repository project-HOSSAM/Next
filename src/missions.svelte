<script>
    import { fly } from 'svelte/transition';
    export let missions;
    export let addItemToMissions;
    export let addItemToOnProcess;
</script>

<style>
    .missions {
        min-width: 40rem;
        height: 100%;
        background-color: #fff;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
        height: 100%;
        position: relative;
        overflow: hidden;
        /* display: flex;
        flex-direction: column; */
    }
    h1 {
        text-align: center;
        margin-bottom: 3rem;
    }
</style>

<div class="missions">
    <h1>missions</h1>
    {#each missions as mission, i}
        <li in:fly index={i} on:click={() => addItemToOnProcess(i)}>
            {mission}
        </li>
    {/each}
    <button on:click={addItemToMissions}>add</button>
</div>
