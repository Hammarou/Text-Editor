const butInstall = document.getElementById('buttonInstall');

let installPromptEvt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()

  installPromptEvt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if(installPromptEvt) {
    installPromptEvt.prompt();

    installPromptEvt.userChoice
      .then((result) => {
        if(result.outcome === 'accepted') {
          console.log("User accepted the installation prompt")
        } else {
          console.log('User dimessed the installation prompt')
        }
        installPromptEvt = null;
      })
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  if(butInstall) {
    butInstall.style.display = 'none';
    console.log('PWS INSTALLED SUCESSFULLY')
  }
});
