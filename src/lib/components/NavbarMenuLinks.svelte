<script>
    import AccountMenuLinks from "./AccountMenuLinks.svelte";
    import AppsMenuLinks from "./AppsMenuLinks.svelte";
    import NavbarIconLink from "./NavbarIconLink.svelte";
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- APPS Menu Links -->
<AppsMenuLinks />
<NavbarIconLink href="/about" iconName="about" label="About" />
<NavbarIconLink href="/contact" iconName="contact" label="Contact" />
<NavbarIconLink href="/legal" iconName="legal" label="Legal" />
<NavbarIconLink href="/settings" iconName="settings" label="Settings" />

<!-- svelte-ignore a11y-positive-tabindex -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- Account Menu Links -->
<AccountMenuLinks />
