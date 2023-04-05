<!-- svelte-ignore a11y-positive-tabindex -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<li tabindex="1">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="justify-between">
        Account
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
        <li><a href="/auth/register">Register</a></li>
        <li><a href="/auth/login">Login</a></li>
        <li><a href="/auth/logout">Logout</a></li>
        <li><a href="/auth/profile">Profile</a></li>
    </ul>
</li>
