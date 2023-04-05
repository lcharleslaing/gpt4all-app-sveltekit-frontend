<script>
    import PageTitle from "$lib/components/PageTitle.svelte";
    import { goto } from "$app/navigation";
    import Card from "../../lib/components/Card.svelte";
</script>

<PageTitle customTitle="Account" />

<div
    class="flex flex-col md:flex-row items-center justify-center mt-6 space-y-4 md:space-y-0 md:space-x-4"
>
    <Card
        href="/auth/register"
        iconName="register"
        title="Register"
        description="Create a new account"
    />
    <Card
        href="/auth/login"
        iconName="login"
        title="Login"
        description="Access your account"
    />
    <Card
        href="/auth/logout"
        iconName="logout"
        title="Logout"
        description="Sign out from your account"
    />
    <Card
        href="/auth/profile"
        iconName="profile"
        title="Profile"
        description="View and edit your profile"
    />
</div>
