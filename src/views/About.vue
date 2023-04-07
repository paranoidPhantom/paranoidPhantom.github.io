<script setup>
import {ref} from "vue"
const skills = ref([
    {
        link: "https://www.blender.org",
        id: "blender"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        id: "html"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        id: "css"
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        id: "js"
    },
    {
        link: "https://nodejs.org",
        id: "nodejs"
    },
    {
        link: "https://vuejs.org",
        id: "vue"
    },
    {
        link: "https://code.visualstudio.com",
        id: "vscode"
    },
    {
        link: "https://vercel.com",
        id: "vercel"
    },
    {
        link: "https://www.electronjs.org",
        id: "electron"
    },
    {
        link: "https://discord.com/developers/docs/intro",
        id: "discord"
    },
    {
        link: "https://github.com",
        id: "github"
    },
    {
        link: "https://www.markdownguide.org",
        id: "md"
    },
])

</script>

<template>
    <div class="container">
        <h2>About me</h2>
        <ul>
            <li>I speak English and Russian fluently</li>
            <li>Learning full stack development</li>
            <li>Did game development in the past</li>
        </ul>
        <h2>Skills</h2>
        <div class="skill-container">
            <a v-for="skill in skills" :href='`${skill.link}`' target="_blank">
                <img :src='`https://skillicons.dev/icons?i=${skill.id}`' :alt="`${skill.id}`">
            </a>
        </div>
        <h2>Primary stack</h2>
        <ul>
            <li>Vue.js</li>
            <li>Node.js</li>
            <li>TypeScript</li>
        </ul>
        <p>Electron if building an electron app</p>
    </div>
</template>

<style scoped>
    .container {
        height: calc(65vh - 1rem);
        font-size: 1.5rem;
    }
    .skill-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
    }
    .skill-container > a {
        border-radius: 0.7rem;
        box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.3);
        width: 2.5rem;
        height: 2.5rem;
        transition: all 0.3s;
    }
    .skill-container > a:hover {
        border-radius: 0.7rem;
        box-shadow: 0 0 1rem rgba(255, 255, 255,1);
        transform: scale(1.2);
    }
    .skill-container > a > img {
        width: 100%;
        height: 100%;
        aspect-ratio: 1;
        object-fit: cover;
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