<script>
    import { fly } from 'svelte/transition';
    import { signInWithGoogle, auth } from './firebase/firebase.utils';
    export let user;
    let isVisible = false;
</script>

<style>
    .login {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .avatar {
        background-image: url(./../User-01.svg);
        height: 7rem;
        width: 7rem;
        margin: 1rem;
        cursor: pointer;
    }
    .google-login {
        background-color: #4285f4;
        color: #fff;
        width: 24rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }
    .google-login:hover {
        background-color: #357ae8;
    }
    img {
        height: 3rem;
        width: 3rem;
        background-color: #fff;
    }
    .user-data {
        position: relative;
        z-index: 1;
        width: 35rem;
        background-color: #fff;
        height: 40rem;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button {
        margin-top: auto;
    }
</style>

<div class="login">
    {#if !user}
        <div on:click={signInWithGoogle} class="google-login">
            <img alt="google logo" src="./../google.png" />
            login with Google
        </div>
    {:else}
        <div class="avatar" on:click={() => (isVisible = !isVisible)} />
    {/if}
    {#if isVisible}
        <div in:fly out:fly class="user-data">
            <p>name: {user.displayName}</p>
            <p>email: {user.email}</p>
            <button
                on:click={() => {
                    auth.signOut();
                    isVisible = !isVisible;
                }}>
                sign out
            </button>
        </div>
    {/if}
</div>
