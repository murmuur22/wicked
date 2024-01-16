<script>
    import { fly } from "svelte/transition";
    import { backOut } from "svelte/easing";
    import Desktop from "../components/Desktop.svelte";
    import NavItem from "../components/NavItem.svelte";
    import Window from "../components/Window.svelte";

</script>

<Desktop>
    <div in:fly={{y: 100,duration:200,delay:100,easing:backOut}}>
        <NavItem dest="/studio">
            Studio
        </NavItem>
    </div>
    <div in:fly={{y: 100,duration:200,delay:200,easing:backOut}}>
    <NavItem dest="/cgi">
        CGI
    </NavItem>
    </div>
    <div in:fly={{y: 100,duration:200,delay:300,easing:backOut}}>
    <NavItem dest="/environmental">
        Environmental
    </NavItem>
    </div>
</Desktop>

<Window title="welcome" width={600} height={400} >
    <div class="p-5 text-stone-50">
        <p class="">Hello welcome to my portfolio :). Thanks for visiting! This version of my site is still in development. Feel free to look around but know that some things may not work. For now please visit my old site to view my work.</p>
        <br>
        <span>click me {"->"} </span><a href="https://old.wicked.earth" target="_blank" class="text-display text-blue-400">old.wicked.earth</a>    
    </div>
</Window>

