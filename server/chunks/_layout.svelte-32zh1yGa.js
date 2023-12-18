import { c as create_ssr_component, a as subscribe, v as validate_component, e as each, b as escape } from './ssr-BfCb-ShB.js';
import { p as page } from './stores-_1IFJcSK.js';

const log = [
  "Initializing Wicked Earth Kernel",
  "Booting on Wicked Earth Hardware Platform",
  "Kernel Version: 5.10.0-WickedEarth",
  "Loading initial ramdisk...",
  "Setting up the System Control Blocks",
  "Detecting CPU architecture and features",
  "CPU: WickedCore X-5000 @ 2.5 GHz",
  "Memory: 8 GB DDR4 RAM @ 2400 MHz",
  "Initializing CPU cores...",
  "Configuring Basic System Parameters",
  "System timezone set to UTC-5:00",
  "Network Hostname: wicked-earth-2.0",
  "Configuring network interfaces...",
  "eth0: Link is up at 1 Gbps, full duplex",
  "IPv6 enabled, configuring addresses...",
  "Initializing Storage Devices",
  "Detected WickedDrive SSD - /dev/wickeddrive0",
  "Partition table found, mounting root filesystem...",
  "Enabling Core System Services",
  "Starting udev for dynamic device management",
  "Configuring local loopback interface",
  "Activating swap partition...",
  "Swap: 4 GB allocated",
  "Loading Kernel Modules",
  "Loading wickedfs module for Wicked Earth File System",
  "Loading network drivers...",
  "Wireless interface wlan0 detected",
  "Initializing User Space",
  "Starting init process (PID 1)",
  "Mounting /proc, /sys, /dev in the new root...",
  "Starting System Services",
  "Bringing up network interfaces...",
  "Configuring DNS settings...",
  "DNS servers: 8.8.8.8, 8.8.4.4",
  "Starting Wicked Earth Security Daemon (wickedsec)...",
  "Firewall rules applied successfully",
  "Launching User Sessions",
  "Display Manager: wickeddm",
  "Starting X Server...",
  "Display resolution set to 1920x1080",
  "Loading desktop environment: wickedDE",
  "Finalizing Boot Process",
  "Cleaning up temporary files...",
  "/tmp cleared"
];
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randInt2 = Math.floor(Math.random() * (max - min + 1)) + min;
  return randInt2;
}
const Startup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let time;
  let start_date = /* @__PURE__ */ new Date();
  let start_min = start_date.getMinutes();
  let start_sec = start_date.getSeconds();
  let start_mil = start_date.getMilliseconds();
  var date = /* @__PURE__ */ new Date();
  let shown_log = [];
  var i = 0;
  function logLoop() {
    let delay = [
      0,
      50,
      100,
      800,
      0,
      50,
      100,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      50,
      50,
      50,
      50,
      500,
      50
    ];
    let choice = randInt(0, delay.length);
    date = /* @__PURE__ */ new Date();
    setTimeout(
      function() {
        shown_log = [...shown_log, { "message": log[i], time }];
        i++;
        if (i == log.length) {
          shown_log = [
            ...shown_log,
            {
              "message": `System boot completed in ${date.getSeconds() - start_sec}.${Math.round(Math.abs(date.getMilliseconds() - start_mil) * 0.1)} seconds.`,
              time
            }
          ];
          return;
        }
        logLoop();
      },
      delay[choice]
    );
  }
  logLoop();
  time = Math.abs(date.getMinutes() - start_min).toString().padStart(2, "0") + ":" + Math.abs(date.getSeconds() - start_sec).toString().padStart(2, "0") + ":" + Math.round(Math.abs(date.getMilliseconds() - start_mil) * 0.1).toString().padStart(2, "0");
  return `<div class="flex flex-col absolute bottom-0 left-0">${each(shown_log, (item) => {
    return `<p class="text-white text-xs flex-none">[${escape(item.time)}] ${escape(item.message)}</p>`;
  })}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let date = /* @__PURE__ */ new Date();
  let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    dayNames[date.getDay()] + " " + monthNames[date.getMonth()] + " " + date.getDate();
    Math.abs(date.getHours()).toString().padStart(2, "0") + ":" + Math.abs(date.getMinutes()).toString().padStart(2, "0") + ":" + Math.abs(date.getSeconds()).toString().padStart(2, "0");
    currPage = $page.url.pathname.split("/");
    currPage.slice(1);
    $$rendered = `${`<div class="absolute h-full w-full">${validate_component(Startup, "Startup").$$render($$result, {}, {}, {})}</div>`}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-32zh1yGa.js.map
