<script setup>
const props = defineProps({
    link: String,
    video: String,
    name: String,
    description: String
})
</script>

<template>
    <div class="card">
        <iframe :src="`https://youtube.com/embed/${video}?controls=0&autoplay=1&mute=1&loop=1&playlist=${video}`" title="Nyan Cat [original]" frameborder="0" allowfullscreen></iframe>
        <div class="data-container">
            <h1>{{ name }}</h1>
            <p>{{ description }}</p>
            <div class="buttons">
                <a target="_blank" :href="`${link}`">
                    <button>Website</button>
                </a>
                <a target="_blank" :href="`https://youtu.be/${video}`">
                    <button>Video</button>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 45%;
    aspect-ratio: 1.5;
    margin: 2%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    display: flex;
    position: relative;
}
iframe {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    pointer-events: none;
    cursor: pointer;
}
.data-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 1rem;
    background: linear-gradient(rgba(0,0,0,0.5), black);
    border-radius: 1rem;
}
h1, h2, h3, h4, h5, h6, p, span {
    margin: 0.6rem;
}
.hide {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}
.buttons {
    display: flex;
    padding: 1rem;
    gap: 0.5rem;
}
button {
    border: none;
    border-radius: 0.5rem;
    background-color: rgb(25,25,25);
    padding: 0.25 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
}
button:hover {
    background-color: rgb(55,55,55);
}
@media screen and (max-width: 700px) {
    .card {
        width: 100%;
        margin: 5% 0;
    }
}
</style>