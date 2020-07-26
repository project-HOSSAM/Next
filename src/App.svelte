<script>
    import { onMount, onDestroy } from 'svelte';
    import { auth } from './firebase/firebase.utils';
    import Missions from './missions.svelte';
    import OnProcess from './onProcess.svelte';
    import Finished from './finished.svelte';
    import User from './login.svelte';
    import Login from './login.svelte';
    const state = {
        missions: [],
        onProcess: [],
        finished: [],
        user: null,
    };
    let unsubscribeFromAuth = null;
    onMount(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(
            (user) => (state.user = user)
        );
    });
    onDestroy(() => {
        unsubscribeFromAuth();
    });

    const addItemToMissions = () => {
        const item = prompt('please enter in item');
        state.missions = [...state.missions, item];
    };
    const addItemToOnProcess = (index) => {
        const item = state.missions.splice(index, 1);
        state.onProcess = [...state.onProcess, item];
    };
    const addItemToFinished = (index) => {
        const item = state.onProcess.pop();
        state.finished = [...state.finished, item];
    };
    const clearFinished = () => {
        state.finished = [];
    };
</script>

<style>
    .App {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2rem;
        background-color: rgba(238, 238, 238, 0.4);
        color: #114b5f;
    }
    .content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 3rem;
        height: 100%;
    }
    .title {
        font-weight: bold;
        font-size: 1.5;
        border-bottom: 2px solid #114b5f;
        margin-bottom: 5rem;
    }

    :global(button) {
        position: absolute;
        bottom: 0;
        left: 50%;
        font-size: 1.8rem;
        transform: translateX(-50%);
        width: 50%;
        background-color: #f45b69;
        color: #fff;
        border: none;
        border-radius: 10px;
        height: 4rem;
        margin-bottom: 2rem;
        cursor: pointer;
        transition: width 0.3s ease-in-out;
        outline: none;
    }
    :global(button):hover {
        width: 90%;
    }

    :global(li) {
        width: 90%;
        height: 4rem;
        /* border: 1px solid black; */
        list-style: none;
        text-align: center;
        cursor: pointer;
        margin: 0 auto 1.4rem auto;
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
        transition: transform 0.5s ease-in-out;
    }
    :global(li):hover {
        transform: scale(1.2);
    }
</style>

<main class="App">
    <h1 class="title">Next</h1>
    <User user={state.user} />
    <div class="content">
        <Missions
            class="component"
            {addItemToMissions}
            {addItemToOnProcess}
            missions={state.missions} />
        <OnProcess
            class="component"
            onProcess={state.onProcess}
            {addItemToFinished} />
        <Finished class="component" finished={state.finished} {clearFinished} />
    </div>
</main>
