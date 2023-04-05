<script>
    export let href = "";
    export let iconName = "";
    export let iconAlt = iconName + " Icon";
    export let label = "";
</script>

<li class="">
    <a {href} class="flex items-center w-full">
        <img src={`/${iconName}.png`} alt={iconAlt} class="h-4" />
        {label}
    </a>
</li>
