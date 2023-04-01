<script setup>

</script>

<template>
    <div class="container">
        <img class="primary" src="/images/Logo.webp" alt="Logo">
        <img class="shadow" src="/images/Logo.webp" alt="Logo">
        <img class="shadow" src="/images/Logo.webp" alt="Logo">
        <img class="shadow" src="/images/Logo.webp" alt="Logo">
        <img class="shadow" src="/images/Logo.webp" alt="Logo">
    </div>
</template>

<style scoped>
.container {
    position: relative;
    overflow: visible;
    width: 4vw;
    aspect-ratio: 1;
}
.primary {
    position: absolute;
    width: 100%;
    transform: none;
    transition: all 0.3s;
    cursor: pointer;
    z-index: 2;
}
.primary:hover {
    transform: rotate3d(1, -1, 0.5, 25deg);
    transition: all 0.3s, filter 0.6s ease-in-out;
}

.shadow {
    position: absolute;
    transform: none;
    transition: all 1s;
    pointer-events: none;
    opacity: 0;
    width: 100%;
    pointer-events: none;
}
.container:has(.primary:hover) .shadow:nth-child(2) {
    transition-delay: 50ms;
    transform: rotate3d(1, -1, 0.5, 25deg) translate(-4%, -4%);
    opacity: 0.4;
}
.container:has(.primary:hover) .shadow:nth-child(3) {
    transition-delay: 100ms;
    transform: rotate3d(1, -1, 0.5, 25deg) translate(-8%, -8%);
    opacity: 0.3;
}
.container:has(.primary:hover) .shadow:nth-child(4) {
    transition-delay: 150ms;
    transform: rotate3d(1, -1, 0.5, 25deg) translate(-12%, -12%);
    opacity: 0.2;
}
.container:has(.primary:hover) .shadow:nth-child(5) {
    transition-delay: 200ms;
    transform: rotate3d(1, -1, 0.5, 25deg) translate(-16%, -16%);
    opacity: 0.1;
}

@media screen and (max-width: 700px) {
    .container {
        width: 15vw;
    }
}
</style>