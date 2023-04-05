<script>
    import PageTitle from "$lib/components/PageTitle.svelte";
    import { goto } from "$app/navigation";
    import Card from "../../lib/components/Card.svelte";
</script>

<PageTitle customTitle="Applications" />

<div
    class="flex flex-col md:flex-row items-center justify-center mt-6 space-y-4 md:space-y-0 md:space-x-4"
>
    <Card
        href="/apps/gpt4all-ui"
        iconName="computer-chat"
        title="Gpt4All Chat"
        description="Open Source version of GPT-4 with a Web interface"
    />
    <Card
        href="/apps/fof"
        iconName="legal"
        title="Friend of the Families"
        description="Helping One Family at a Time with a variety of resouces"
    />
    <!-- Add more Card components here -->
</div>
