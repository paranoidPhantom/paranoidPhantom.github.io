<template>
    <div class="text-container">
        <h1 class="primary-text">404</h1>
        <h1>Page does not exist...</h1>
        <router-link to="/">
            <button>Go home</button>
        </router-link>
    </div>
</template>

<style scoped>
.text-container {
    margin: 0 4rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.primary-text {
    font-size: 10vw;
    margin: 0;
    transition: all 0.3s;
    cursor: pointer;
}
.primary-text:hover {
    transform: scale(1.1) rotate(5deg);
}
h1 {
    user-select: none;
    text-align: center;
}
button {
    transition: all 0.3s;
    font-size: 2rem;
    background-color: rgb(255,255,255);
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    padding: 0.2em 0.5em;
    color: black;
}

button:hover {
    background-color: rgba(255,255,255, 0.5);
}
@media screen and (max-width: 700px) {
h1 {
    width: 90vw;
}
.primary-text {
    font-size: 25vw;
}
}
</style>