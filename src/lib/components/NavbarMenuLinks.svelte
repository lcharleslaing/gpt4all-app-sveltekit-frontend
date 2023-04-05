<script>
    import AccountMenuLinks from "./AccountMenuLinks.svelte";
    import AppsMenuLinks from "./AppsMenuLinks.svelte";
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- APPS Menu Links -->
<AppsMenuLinks />
<li><a href="/about">About</a></li>
<li><a href="/contact">Contact</a></li>
<li><a href="/legal">Legal</a></li>

<li><a href="/settings">Settings</a></li>
<!-- svelte-ignore a11y-positive-tabindex -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- Account Menu Links -->
<AccountMenuLinks />
