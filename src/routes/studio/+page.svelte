<script>
    import Window from "../../components/Window.svelte";
    import WindowManager from "../../components/WindowManager.svelte";
    import NavItem from "../../components/NavItem.svelte";
    import Desktop from "../../components/Desktop.svelte";


    let images = [
        {
            title: 'bennett.jpg', 
            url: '/WORK/bennett.jpg',
            x: 33,
            y: 68,
            width: 504,
            height: 648
        },
        {
            title: 'jacob.jpg', 
            url: '/WORK/jacob.jpg',
            x: 914,
            y: 37,
            width: 486,
            height: 735,
        },
        {
            title: 'jacob2.jpg', 
            url: '/WORK/jacob2.jpg',
            x: 567,
            y: 149,
            width: 381,
            height: 410,
        },

    ]

</script>

<WindowManager>
    {#each images as image}
    <Window title={image.title} left={image.x} top={image.y} width={image.width} height={image.height}>
        <img src={image.url} alt={image.title} class="rounded-sm select-none"/>
    </Window>
    {/each}
</WindowManager>