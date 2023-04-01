<script setup>
import ProjectCard from '../components/ProjectCard.vue';
</script>

<template>
    <div class="container">
        <h1>Past work</h1>
        <div class="project-container">
            <ProjectCard
                link="https://agave.spb.ru"
                video="Awqv0aJAjlQ"
                name="agave.spb.ru"
                description="American restaurant in Saint Petersburg, Russia"
            />
        </div>
    </div>
</template>

<style scoped>
    .container {
        font-size: 2rem;
    }
    .container > h1 {
        margin: 0;
    }
    .project-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 4rem;
    }
    @media screen and (max-width: 700px) {
        .container {
            font-size: 1.5rem;
        }
    }
</style>