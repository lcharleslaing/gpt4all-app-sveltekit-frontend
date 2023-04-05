<script>
  import "../app.postcss";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<!-- to set a custom title, use the commented version below -->
<!-- <PageTitle customTitle="Your Custom Title" /> -->

<Navbar />
<slot />
