<template>
    <div class="container">
        <a href="https://github.com/paranoidPhantom" target="_blank">
            <img class="primary" src="/images/github.webp" alt="GitHub">
            <img class="shadow" src="/images/github.webp" alt="GitHub">
            <img class="shadow" src="/images/github.webp" alt="GitHub">
            <img class="shadow" src="/images/github.webp" alt="GitHub">
            <img class="shadow" src="/images/github.webp" alt="GitHub">
        </a>
        <a href="https://t.me/andrei_hudalla" target="_blank">
            <img class="primary" src="/images/telegram.webp" alt="Telegram">
            <img class="shadow" src="/images/telegram.webp" alt="Telegram">
            <img class="shadow" src="/images/telegram.webp" alt="Telegram">
            <img class="shadow" src="/images/telegram.webp" alt="Telegram">
            <img class="shadow" src="/images/telegram.webp" alt="Telegram">
        </a>
        <a href="https://discordapp.com/users/689356130127708214" target="_blank">
            <img class="primary" src="/images/discord.webp" alt="Discord">
            <img class="shadow" src="/images/discord.webp" alt="Discord">
            <img class="shadow" src="/images/discord.webp" alt="Discord">
            <img class="shadow" src="/images/discord.webp" alt="Discord">
            <img class="shadow" src="/images/discord.webp" alt="Discord">
        </a>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 5vw;
}
a {
    height: 90%;
    transition: all 0.15s;
    position: relative;
}
img {
    height: 100%;
}
.primary {
    position: absolute;
    aspect-ratio: 1;
    transform: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    z-index: 2;
}
.primary:hover {
    transform: rotate3d(1, -1, 0.5, 25deg);
    transition: all 0.3s ease-in-out;
}

.shadow {
    position: absolute;
    transform: none;
    transition: all 1s;
    pointer-events: none;
    opacity: 0;
    aspect-ratio: 1;
    pointer-events: none;
}
a:has(.primary:hover) .shadow:nth-child(2) {
    transition-delay: 50ms;
    transform: rotate3d(1, -1, 0.5, 25deg) translate(-8%, -8%);
    opacity: 0.4;
}
a:has(.primary:hover) .shadow:nth-child(3) {
    transition-delay: 100ms;
    transform: rotate3d(1, -1, 0.5, 25deg) translate(-16%, -16%);
    opacity: 0.3;
}
a:has(.primary:hover) .shadow:nth-child(4) {
    transition-delay: 150ms;
    transform: rotate3d(1, -1, 0.5, 25deg) translate(-24%, -24%);
    opacity: 0.2;
}
a:has(.primary:hover) .shadow:nth-child(5) {
    transition-delay: 200ms;
    transform: rotate3d(1, -1, 0.5, 25deg) translate(-32%, -32%);
    opacity: 0.1;
}

@media screen and (max-width: 700px) {
    a {
        width: 15vw;
    }
}
</style>