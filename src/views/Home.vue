<template>
    <div class="container">
        <h1>Welcome.</h1>
        <ul>
            <li>
                <router-link to="/about">About me</router-link>
            </li>
            <li>
                <router-link to="/works">Past work</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 4rem;
        height: calc(65vh - 1rem);
        font-size: 2rem;
    }
    li {
        transition: all 0.3s ease-in-out;
    }
    li:hover {
        transform: translateX(1rem);
    }
    @media screen and (max-width: 700px) {
        .container {
            font-size: 2.4rem;
            padding: 0;
        }
    }
</style>