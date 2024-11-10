const butInstall = document.getElementById('buttonInstall');

let installPromptEvt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()

  installPromptEvt = event;
});

// Click event handler implemented on the `butInstall` element
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

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  if(butInstall) {
    butInstall.style.display = 'none';
    console.log('PWS INSTALLED SUCESSFULLY')
  }
});
