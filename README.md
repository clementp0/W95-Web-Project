

# Windows 95 - Web project (Discontinued 2019)


Trying to recreate w95 experience, using only html/css and less js as possible.

This project was initialised summer 2018, to create an "virtual environment".
(Wich can be found on : https://x.clpo.net/). At the begening it was just a simple w95 looking desktop. 

But over the month its became a website with a near real windows 95 experience. This is why today i put my project on github
to find some people who can help me to dev. this website and add functionalities. 

Feel free to send feedback about your experience on my website. 

[BETA 1](#beta-1---the-pwa-update)
[BETA 2](#beta-2---the-beginning-of-a-new-era)
[BETA 3](#beta-3---look-at-my-code-im-sexy-now)
[BETA 4](#beta-4---sylvester-standalone)

<p align="center">
    <img src="https://github.com/clementp0/W95-Web-Project/assets/15802129/a62fae00-5e88-46e1-84eb-eb383d8ab0e0">
</p>

## BETA 1 - THE PWA UPDATE

- Its now a PWA ! progressive web app
- FINNALY COMPATIBLE WITH MOBILE / TAB
- This website is heavy, now cache management is implemented service worker
- IT NOW FEATURE NOTIFICATIONS !! service worker from OneSignal
- Restart fonctionnality Removed
- Feedback fonctionnality Added
- Change log Updated
- Somes minor changes
- Popup Added
- Iframe now target wikileaks
- Feedback form in the StartMenu

`<link media="only screen and (max-device-width: 915px)" href="/css/mobile.css" type="text/css" rel="stylesheet" />`

#### manifest.json

    {
        "name": "Windows 95 Mobile Experience",
          "short_name": "W95 PWA",
          "display": "fullscreen",
        "orientation":"portrait",
        "scope": "/",
          "start_url": "https://x.clpo.net",
          "theme_color": "#673ab6",
          "background_color": "#008080",
          "icons": [
            {
              "src": "icon.png",
              "sizes": "192x192",
              "type": "image/png"
        	      }
        	  ]
        }

## BETA 2 - THE BEGINNING OF A NEW ERA

- Im taking the project more and more seriously, so.. some class/id names needed to be changed. Thats the major point in this release. 
- Also i added an "Achievements" page.
- And the link to this github have been modified. One aim to the GitHub itself and the other one to this page, say Hi ! 
- All the music files as been removed and now only one can be found on the desktop.
- The README as been sligthy updated. 

- If you are curious you may find some "artifacts" in the code, i'm currently working on some features not included yet ; like a fullscreen mod, a windows crash or even a video player.

`https://github.com/clementp0/W95-Web-Project/releases`


## BETA 3 - LOOK AT MY CODE, IM SEXY NOW  

- W3C Css Validator : No error was found ! 
- W3C Html Validator : From ~300 errors to 1 :
https://validator.w3.org/nu/?doc=https://x.clpo.net/
- Some Randoms fix
- ContactEngine.php fixed
- "required" added to the contact form
- Massive compression (all images files) - From 24.2% to 64.8% Compression Ratio.
- Creation of a Github Pages : https://clementp0.github.io/W95-Web-Project/

<p>
    <a href="#">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss"
            alt="CSS Valide !" />
    </a>
</p>



## BETA 4 - SYLVESTER STANDALONE

- Fix : Microsoft Internet Explorer's iframe
-  Added : forward & back buttons for Microsoft Internet Explorer 
- New target for Microsoft Internet Explorer : 
 https://github.com/XXIIVV/Webring  //  [https://webring.xxiivv.com/](https://webring.xxiivv.com/)
- Fix : Notification system @Onesignal
- ####  New Progressive Web APP features :
- Compatible with all devices running GOOGLE CHROME.
- Compatible with stock Android devices web browser.
- Toggle a "pop-up" to install the app.
- New Manifest.json  
- #### Massive optimisation Work :
- Leverage Browser Caching
- Serve Scaled images
- Optimize Images
- Minify
- Defer parsing of JavaScript
- Enable Compression

Service Worker : 
https://developers.google.com/web/fundamentals/primers/service-workers/

Notification System : 
https://onesignal.com/

❤️ Clementp0

