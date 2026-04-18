(function () {
  const app = window.PortfolioApp || {};
  const imageLightboxStage = document.getElementById('imageLightboxStage');
  const imageLightboxImage = document.createElement('img');
  const imageLightboxVideo = document.createElement('video');
  const imageLightboxFrame = document.createElement('iframe');

  imageLightboxImage.className = 'image-lightbox-image';
  imageLightboxImage.alt = 'Project image preview';

  imageLightboxVideo.className = 'image-lightbox-video';
  imageLightboxVideo.controls = true;
  imageLightboxVideo.hidden = true;

  imageLightboxFrame.className = 'image-lightbox-frame';
  imageLightboxFrame.title = 'Project video preview';
  imageLightboxFrame.hidden = true;

  if (imageLightboxStage) {
    imageLightboxStage.append(imageLightboxImage, imageLightboxVideo, imageLightboxFrame);
  }

  app.elements = {
    modal: document.getElementById('infoModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalTitle: document.getElementById('modalTitle'),
    modalText: document.getElementById('modalText'),
    modalMedia: document.getElementById('modalMedia'),
    modalBasicContent: document.getElementById('modalBasicContent'),
    projectsBrowser: document.getElementById('projectsBrowser'),
    projectsBrowserHeading: document.querySelector('#projectsBrowser > h3'),
    projectsBrowserList: document.getElementById('projectsBrowserList'),
    projectsDetailTitle: document.getElementById('projectsDetailTitle'),
    projectsDetailText: document.getElementById('projectsDetailText'),
    projectsDetailVideoSlot: document.getElementById('projectsDetailVideoSlot'),
    projectsDetailVideo: document.getElementById('projectsDetailVideo'),
    projectsDetailGallery: document.getElementById('projectsDetailGallery'),
    imageLightbox: document.getElementById('imageLightbox'),
    imageLightboxStage,
    imageLightboxImage,
    imageLightboxVideo,
    imageLightboxFrame,
    imageLightboxClose: document.getElementById('imageLightboxClose'),
    imageLightboxPrev: document.getElementById('imageLightboxPrev'),
    imageLightboxNext: document.getElementById('imageLightboxNext'),
    projectsScroller: document.querySelector('.frosted-container'),
    openPanelButtons: document.querySelectorAll('.open-panel-btn, .nav-panel-btn'),
    projectCards: document.querySelectorAll('.frosted-container .card')
  };

  app.helpers = {
    parseImageList(rawImageList) {
      return (rawImageList || '')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
    }
  };

  window.PortfolioApp = app;
})();
