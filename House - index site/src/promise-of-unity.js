const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'TemplateData/style.css');
document.getElementsByTagName('head')[0].appendChild(link);

const loadScript = function (src) {
  // Initialize scripts queue
  if (loadScript.scripts === undefined) {
    loadScript.scripts = [];
    loadScript.index = -1;
    loadScript.loading = false;
    loadScript.next = function () {
      if (loadScript.loading) return;

      // Load the next queue item
      loadScript.loading = true;
      const item = loadScript.scripts[++loadScript.index];
      const head = document.getElementsByTagName('head')[0];
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = item.src;
      // When complete, start next item in queue and resolve this item's promise
      script.onload = () => {
        loadScript.loading = false;
        if (loadScript.index < loadScript.scripts.length - 1) loadScript.next();
        item.resolve();
      };
      head.appendChild(script);
    };
  }

  // Adding a script to the queue
  if (src) {
    // Check if already added
    for (let i = 0; i < loadScript.scripts.length; i++) {
      if (loadScript.scripts[i].src == src) return loadScript.scripts[i].promise;
    }
    // Add to the queue
    const item = { src };
    item.promise = new Promise((resolve) => { item.resolve = resolve; });
    loadScript.scripts.push(item);
    loadScript.next();
  }

  // Return the promise of the last queue item
  return loadScript.scripts[loadScript.scripts.length - 1].promise;
};

export const promise = () => loadScript('TemplateData/UnityProgress.js')
  .then(() => loadScript('Build/UnityLoader.js'))
  .then(() => loadScript('unity-start.js'));
