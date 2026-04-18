(function () {
  const app = window.PortfolioApp;
  const {
    projectCards,
    projectsBrowserList,
    projectsBrowserHeading,
    projectsDetailTitle,
    projectsDetailText,
    projectsDetailVideoSlot,
    projectsDetailVideo,
    projectsDetailGallery,
    imageLightbox,
    imageLightboxStage,
    imageLightboxImage,
    imageLightboxVideo,
    imageLightboxFrame,
    imageLightboxClose,
    imageLightboxPrev,
    imageLightboxNext
  } = app.elements;

  let activeGalleryMedia = [];
  let activeLightboxIndex = 0;

  function isProjectsModeActive() {
    return !projectsBrowser.hidden;
  }

  const projectsData = Array.from(projectCards).map((card) => {
    const title = card.querySelector('.card-title')?.textContent?.trim() || 'Project';
    const text = card.querySelector('.card-desc')?.textContent?.trim() || 'Project details coming soon.';
    const coverImage = card.querySelector('.card-image')?.getAttribute('src') || '';
    const moreInfoBtn = card.querySelector('.open-panel-btn');
    const imagesFromData = app.helpers.parseImageList(moreInfoBtn?.dataset.panelImages || '');
    const videosFromData = app.helpers.parseImageList(moreInfoBtn?.dataset.panelVideos || '');

    return {
      title,
      text,
      images: imagesFromData.length > 0 ? imagesFromData : (coverImage ? [coverImage] : []),
      videos: videosFromData
    };
  });

  function isLightboxOpen() {
    return imageLightbox && !imageLightbox.hidden;
  }

  function hideAllLightboxMedia() {
    imageLightboxStage.innerHTML = '';
    imageLightboxImage.removeAttribute('src');
    imageLightboxVideo.pause();
    imageLightboxVideo.removeAttribute('src');
    imageLightboxFrame.removeAttribute('src');
  }

  function getMediaKind(mediaItem) {
    return mediaItem && mediaItem.type === 'video' ? 'video' : 'image';
  }

  function isYouTubeUrl(url) {
    return /(?:youtube\.com|youtu\.be)/i.test(url || '');
  }

  function getYouTubeEmbedUrl(url) {
    const parsedVideoUrl = new URL(url);
    const videoId = parsedVideoUrl.searchParams.get('v') || parsedVideoUrl.pathname.split('/').filter(Boolean).pop() || '';
    const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);

    parsedVideoUrl.searchParams.forEach((value, key) => {
      if (key !== 'v') {
        embedUrl.searchParams.set(key, value);
      }
    });

    return embedUrl.toString();
  }

  function updateLightboxMedia() {
    if (!activeGalleryMedia.length) {
      return;
    }

    hideAllLightboxMedia();

    const mediaItem = activeGalleryMedia[activeLightboxIndex];

    if (getMediaKind(mediaItem) === 'video') {
      if (isYouTubeUrl(mediaItem.src)) {
        imageLightboxFrame.src = getYouTubeEmbedUrl(mediaItem.src);
        imageLightboxStage.appendChild(imageLightboxFrame);
      } else {
        imageLightboxVideo.src = mediaItem.src;
        imageLightboxStage.appendChild(imageLightboxVideo);
      }
      return;
    }

    imageLightboxImage.src = mediaItem.src;
    imageLightboxImage.alt = mediaItem.alt || `Project image ${activeLightboxIndex + 1}`;
    imageLightboxStage.appendChild(imageLightboxImage);
  }

  function closeImageLightbox() {
    if (!imageLightbox) {
      return;
    }

    hideAllLightboxMedia();
    imageLightbox.hidden = true;
    imageLightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  }

  function openImageLightbox(startIndex) {
    if (!imageLightbox || !activeGalleryMedia.length || !isProjectsModeActive()) {
      return;
    }

    activeLightboxIndex = Math.max(0, Math.min(startIndex, activeGalleryMedia.length - 1));
    updateLightboxMedia();
    imageLightbox.hidden = false;
    imageLightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  function goToPreviousImage() {
    if (!activeGalleryMedia.length) {
      return;
    }

    activeLightboxIndex = (activeLightboxIndex - 1 + activeGalleryMedia.length) % activeGalleryMedia.length;
    updateLightboxMedia();
  }

  function goToNextImage() {
    if (!activeGalleryMedia.length) {
      return;
    }

    activeLightboxIndex = (activeLightboxIndex + 1) % activeGalleryMedia.length;
    updateLightboxMedia();
  }

  function bindGalleryMediaClicks(mediaItems) {
    if (!isProjectsModeActive()) {
      return;
    }

    const renderedMedia = projectsDetailGallery.querySelectorAll('.modal-media-item');

    renderedMedia.forEach((mediaElement, index) => {
      mediaElement.classList.add('project-gallery-clickable');
      mediaElement.addEventListener('click', () => {
        if (!isProjectsModeActive()) {
          return;
        }

        activeGalleryMedia = mediaItems;
        openImageLightbox(index);
      });
    });
  }

  function bindLightboxEvents() {
    if (!imageLightbox) {
      return;
    }

    imageLightboxClose.addEventListener('click', closeImageLightbox);
    imageLightboxPrev.addEventListener('click', (event) => {
      event.stopPropagation();
      goToPreviousImage();
    });
    imageLightboxNext.addEventListener('click', (event) => {
      event.stopPropagation();
      goToNextImage();
    });

    imageLightbox.addEventListener('click', (event) => {
      if (event.target === imageLightbox) {
        closeImageLightbox();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (!isLightboxOpen()) {
        return;
      }

      if (event.key === 'Escape') {
        closeImageLightbox();
      }

      if (event.key === 'ArrowLeft') {
        goToPreviousImage();
      }

      if (event.key === 'ArrowRight') {
        goToNextImage();
      }
    });
  }

  function findProjectByTitle(title) {
    return projectsData.find((project) => project.title === title);
  }

  function setProjectsBrowserDetail(project) {
    if (!project) {
      return;
    }

    projectsDetailTitle.textContent = project.title;
    projectsDetailText.textContent = project.text;
    const projectMedia = [
      ...(project.images || []).map((src) => ({ type: 'image', src })),
      ...(project.videos || []).map((src) => ({ type: 'video', src }))
    ];
    app.modal.renderMediaList(projectsDetailGallery, projectMedia);
    bindGalleryMediaClicks(projectMedia);

    projectsDetailVideoSlot.innerHTML = '';
    projectsDetailVideo.pause();
    projectsDetailVideo.removeAttribute('src');
    projectsDetailVideo.hidden = true;
  }

  function renderProjectsBrowserList() {
    projectsBrowserList.innerHTML = '';
    projectsBrowserList.hidden = false;
    projectsBrowserHeading.textContent = 'All Projects';
    projectsBrowser.classList.remove('single-project-view');

    projectsData.forEach((project, index) => {
      const projectButton = document.createElement('button');
      projectButton.type = 'button';
      projectButton.className = 'projects-list-item';
      projectButton.textContent = project.title;

      projectButton.addEventListener('click', () => {
        setProjectsBrowserDetail(project);
        projectsBrowserList.querySelectorAll('.projects-list-item').forEach((button) => {
          button.classList.remove('is-active');
        });
        projectButton.classList.add('is-active');
      });

      if (index === 0) {
        projectButton.classList.add('is-active');
      }

      projectsBrowserList.appendChild(projectButton);
    });

    setProjectsBrowserDetail(projectsData[0]);
  }

  function openProjectsBrowserPanel() {
    app.modal.showProjectsBrowserMode();
    projectsBrowser.hidden = false;
    renderProjectsBrowserList();
    app.modal.openShell();
  }

  function openProjectDetailPanel(projectOrTitle) {
    const project = typeof projectOrTitle === 'string'
      ? findProjectByTitle(projectOrTitle)
      : projectOrTitle;

    if (!project) {
      return;
    }

    app.modal.showProjectsBrowserMode();
    projectsBrowser.hidden = false;
    projectsBrowserList.innerHTML = '';
    projectsBrowserList.hidden = true;
    projectsBrowserHeading.textContent = project.title;
    projectsBrowser.classList.add('single-project-view');
    setProjectsBrowserDetail(project);
    app.modal.openShell();
  }

  function resetProjectsBrowserView() {
    projectsBrowserList.hidden = false;
    projectsBrowserHeading.textContent = 'All Projects';
    projectsBrowser.classList.remove('single-project-view');
  }

  app.projectsBrowser = {
    openProjectsBrowserPanel,
    openProjectDetailPanel,
    resetProjectsBrowserView,
    isLightboxOpen,
    closeImageLightbox
  };

  bindLightboxEvents();
})();
