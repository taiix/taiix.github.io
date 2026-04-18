(function () {
  const app = window.PortfolioApp;
  const { modal, modalCloseBtn, openPanelButtons } = app.elements;

  function bindModalCloseEvents() {
    modalCloseBtn.addEventListener('click', app.modal.closeModal);

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        app.modal.closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (app.projectsBrowser && typeof app.projectsBrowser.isLightboxOpen === 'function' && app.projectsBrowser.isLightboxOpen()) {
        return;
      }

      if (event.key === 'Escape' && modal.classList.contains('is-open')) {
        app.modal.closeModal();
      }
    });
  }

  function bindPanelOpenEvents() {
    openPanelButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.dataset.panelType === 'projects-browser') {
          app.projectsBrowser.openProjectsBrowserPanel();
          return;
        }

        if (button.classList.contains('open-panel-btn')) {
          app.projectsBrowser.openProjectDetailPanel(button.dataset.panelTitle);
          return;
        }

        app.modal.openBasicPanel(
          button.dataset.panelTitle,
          button.dataset.panelText,
          app.helpers.parseImageList(button.dataset.panelImages),
          button.dataset.panelHtml
        );
      });
    });
  }

  bindModalCloseEvents();
  bindPanelOpenEvents();
  app.projectsScroll.initProjectsWheelScroll();
})();
