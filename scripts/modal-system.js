(function () {
  const app = window.PortfolioApp;
  const {
    modal,
    modalTitle,
    modalText,
    modalMedia,
    modalBasicContent,
    projectsBrowser,
    projectsDetailVideo
  } = app.elements;

  function renderMediaList(container, mediaList) {
    container.innerHTML = '';

    (mediaList || []).forEach((mediaItem, index) => {
      const itemData = typeof mediaItem === 'string' ? { type: 'image', src: mediaItem } : mediaItem;

      if (itemData.type === 'video') {
        const videoButton = document.createElement('button');
        videoButton.type = 'button';
        videoButton.className = 'modal-media-item modal-media-video-item';
        videoButton.setAttribute('aria-label', `Open video ${index + 1}`);
        videoButton.innerHTML = `
          <span class="modal-media-video-icon">&#9658;</span>
          <span class="modal-media-video-label">Video ${index + 1}</span>
        `;
        container.appendChild(videoButton);
        return;
      }

      const imageButton = document.createElement('button');
      imageButton.type = 'button';
      imageButton.className = 'modal-media-item modal-media-image-item';
      imageButton.setAttribute('aria-label', `Open image ${index + 1}`);

      const image = document.createElement('img');
      image.src = itemData.src;
      image.alt = `Project media ${index + 1}`;
      image.className = 'modal-media-image';

      imageButton.appendChild(image);
      container.appendChild(imageButton);
    });
  }

  function showBasicPanelMode() {
    modalBasicContent.hidden = false;
    projectsBrowser.hidden = true;
    modal.querySelector('.modal-panel').classList.remove('projects-browser-mode');
  }

  function showProjectsBrowserMode() {
    modalBasicContent.hidden = true;
    projectsBrowser.hidden = false;
    modal.querySelector('.modal-panel').classList.add('projects-browser-mode');
  }

  function openShell() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function openBasicPanel(title, text, mediaList, htmlContent) {
    showBasicPanelMode();
    modalTitle.textContent = title || 'Project Info';

    if (htmlContent) {
      modalText.innerHTML = htmlContent;
    } else {
      modalText.textContent = text || 'Add your information here.';
    }

    renderMediaList(modalMedia, mediaList || []);
    openShell();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    projectsDetailVideo.pause();
    document.body.classList.remove('modal-open');
  }

  app.modal = {
    renderMediaList,
    showBasicPanelMode,
    showProjectsBrowserMode,
    openBasicPanel,
    openShell,
    closeModal
  };
})();
