<script>
    export let iconName = "";
    export let iconAlt = iconName + " Icon";
    export let title = "";
    export let description = "";
    export let href = "";
</script>

<a {href} class="block">
    <div class="border border-gray-300 rounded-md p-4 w-64 shadow-lg">
        <div class="flex items-center">
            <img src={`/${iconName}.png`} alt={iconAlt} class="w-8 h-8 mr-2" />
            <h2 class="text-xl font-bold">{title}</h2>
        </div>
        <p class="mt-2">{description}</p>
    </div>
</a>
