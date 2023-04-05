<script>
    import { onMount } from "svelte";
    import Big2TinyLogo from "$lib/components/Big2TinyLogo.svelte";

    let title = "";
    let isHomePage = false;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    onMount(() => {
        const pathname = window.location.pathname;
        isHomePage = pathname === "/";
        const routeName = isHomePage
            ? "Big2Tiny Solutions"
            : pathname.split("/").pop() || "home";
        title =
            routeName === "Big2Tiny Solutions"
                ? routeName
                : capitalizeFirstLetter(routeName);
        document.title = title;
    });
</script>

<div class="text-center">
    <Big2TinyLogo />
    {#if !isHomePage}
        <h1 class="text-4xl font-extrabold uppercase mt-4">{title}</h1>
    {/if}
</div>
