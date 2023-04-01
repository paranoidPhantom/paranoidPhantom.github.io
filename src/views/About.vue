<template>
    <div class="container">
        <h1>About</h1>
        <ul>
            <li>🗺️I live in Russia</li>
            <li>🗣️I speak English and Russian fluently</li>
            <li>🖥️Learning frontend and backend development</li>
            <li>⌛6 years of experience in lua</li>
        </ul>
    </div>
</template>

<style scoped>
    .container {
        height: calc(65vh - 1rem);
        font-size: 2rem;
    }
    @media screen and (max-width: 700px) {
        .container {
            font-size: 1.5rem;
        }
        li {
            margin: 1rem;
        }
    }
</style>