function loadScript(e,t,n,o,i,r){var a=document.createElement("script");a.src=e,t&&(a.integrity=t),n&&(a.crossOrigin=n),o&&(a.referrerPolicy=o),i&&(a.async=i),r&&(a.defer=r),document.head.appendChild(a)}loadScript("https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js","sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==","anonymous","no-referrer",!0),loadScript("https://cdnjs.cloudflare.com/ajax/libs/emojione/4.5.0/lib/js/emojione.min.js","sha512-E2Ai/A9+KcoBm0lvfnd5krbr7TWUigQGWTfcoMToNpfmCvQKkZdTbpwyIM4PFbCGMtSmMjE/DAXGjVXpWGdFaQ==","anonymous","no-referrer",!0),loadScript("https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js","sha512-b4rL1m5b76KrUhDkj2Vf14Y0l1NtbiNXwV+SzOzLGv6Tz1roJHa70yr8RmTUswrauu2Wgb/xBJPR8v80pQYKtQ==","anonymous","no-referrer",!0);function loadDependentScripts(){loadScript("https://cdn.jsdelivr.net/gh/hu6amini/perve_avenue_2054@main/pa_scripts.js",null,"anonymous",null,!0,!0),loadScript("https://nb.forumfree.it/scripts/ace/slider.js",null,null,null,!0,!0)}document.querySelector(".container")?loadDependentScripts():new MutationObserver((e,t)=>{document.querySelector(".container")&&(loadDependentScripts(),t.disconnect())}).observe(document.body,{childList:!0,subtree:!0});
