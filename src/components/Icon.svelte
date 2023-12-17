<script>
    export let name;
    export let focusable = false;
    let icons = [
        {
            box_x: 90,
            box_y: 90,
            name: "home",
            svg: `<path stroke-width="0" fill="rgb(250 250 249)" d="m13.85,39.12h62.02v35.04c0,2.3-1.87,4.17-4.17,4.17H18.02c-2.3,0-4.17-1.87-4.17-4.17v-35.04h0Z"/>
                <path stroke-width="0" fill="rgb(250 250 249)" d="m49.01,6.26c-2.2-1.79-5.28-1.8-7.49-.03L7.82,33.26c-2.54,2.04-.97,5.86,2.41,5.86h69.54c3.36,0,4.94-3.8,2.43-5.85L49.01,6.26Z"/>
                <rect stroke-width="0" fill="rgb(250 250 249)" x="59.46" y="8.25" width="11.12" height="23.36" rx="3.08" ry="3.08"/>
                <rect stroke-width="0" fill="rgb(12 10 9)" x="35.82" y="47.74" width="18.08" height="24.47"/>`
        }
    ];
    let displayIcon = icons.find((e) => e.name === name);
</script>

<svg
  class={$$props.class}
  {focusable}
  viewBox="0 0 {displayIcon.box_x} {displayIcon.box_y}">{@html displayIcon.svg}
</svg>