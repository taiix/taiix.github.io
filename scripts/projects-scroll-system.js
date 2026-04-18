(function () {
  const app = window.PortfolioApp;
  const { projectsScroller } = app.elements;

  function initProjectsWheelScroll() {
    if (!projectsScroller) {
      return;
    }

    let wheelVelocity = 0;
    let wheelAnimationFrame = null;
    const wheelFriction = 0.88;
    const wheelImpulse = 8;
    const maxWheelVelocity = 80;

    function animateHorizontalWheelScroll() {
      if (Math.abs(wheelVelocity) < 0.25) {
        wheelVelocity = 0;
        wheelAnimationFrame = null;
        return;
      }

      projectsScroller.scrollLeft += wheelVelocity;
      wheelVelocity *= wheelFriction;
      wheelAnimationFrame = requestAnimationFrame(animateHorizontalWheelScroll);
    }

    projectsScroller.addEventListener('wheel', (event) => {
      const hasHorizontalOverflow = projectsScroller.scrollWidth > projectsScroller.clientWidth;

      if (!hasHorizontalOverflow) {
        return;
      }

      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

      if (delta === 0) {
        return;
      }

      event.preventDefault();

      wheelVelocity += Math.sign(delta) * wheelImpulse;
      wheelVelocity = Math.max(-maxWheelVelocity, Math.min(maxWheelVelocity, wheelVelocity));

      if (!wheelAnimationFrame) {
        wheelAnimationFrame = requestAnimationFrame(animateHorizontalWheelScroll);
      }
    }, { passive: false });
  }

  app.projectsScroll = {
    initProjectsWheelScroll
  };
})();
