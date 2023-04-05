<script>
    import NavbarIconLink from "./NavbarIconLink.svelte";
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<li tabindex="0">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="justify-between">
        <NavbarIconLink href="/apps" iconName="apps" label="Apps" />
        <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            /></svg
        >
    </a>
    <ul class="p-2 shadow bg-base-100 rounded-box">
        <NavbarIconLink
            href="/apps/gpt4all-ui"
            iconName="computer-chat"
            label="Gpt4All Chat"
        />
    </ul>
</li>
