const r = document.querySelector('#interactive-swatch-hero');

// =========================== Sofa Card Variable ======================
let sofaCircleGroups = document.querySelectorAll('.sofa-circle-group');
const sofaPrice = document.querySelector('.sofa-price');
const sofaBtn = document.querySelector('.sofa-btn');

// =========================== Dual Color Card Variable ======================
const circleSolidAndDualColors = document.querySelectorAll(
  '.circle-group-dual, .circle-group-solid'
);
const dualColorName = document.querySelector('.dual-color-name');

// =========================== Shoe Card Variable ======================
const circleShoeSolids = document.querySelectorAll('.circle-shoe-solid');
const shoeNumbers = document.querySelectorAll('.shoe-number');
const shoePrice = document.querySelector('.shoe-price');
const shoeColor = document.querySelector('.shoe-color');

// ===========================Filter Card Variable ======================
const filterSolidBorders = document.querySelectorAll('.filter-solid-border');
const circleFilters = document.querySelectorAll('.circle-filter');

// ================== Watch Card Variable================================ */
const tooltipCircles = document.querySelectorAll('.tooltip-circle');
const toolTips = document.querySelectorAll('.tooltip');
const watchDial = document.querySelector('.watch-dial');
const watchBelt = document.querySelector('.watch-belt');
const watchPrice = document.querySelector('.watch-price');
const tooltipButton = document.querySelector('.tooltip-button text');

// =========================== Sofa Card ======================

sofaCircleGroups.forEach((sofaCircleGroup) => {
  sofaCircleGroup.addEventListener('click', (e) => {
    sofaCircleGroups.forEach((sofaCircleGroup) => {
      sofaCircleGroup.classList.remove('active');
    });
    sofaCircleGroup.classList.add('active');
    sofaPrice.innerHTML = sofaCircleGroup.dataset.sofaPrice;
    sofaBtn.innerHTML = 'Add to Card';

    r.style.setProperty('--sofa-color', sofaCircleGroup.dataset.sofaColor);
  });
});

// =========================== Dual Color Card ======================

circleSolidAndDualColors.forEach((circleSolidAndDualColor) => {
  circleSolidAndDualColor.addEventListener('click', (e) => {
    circleSolidAndDualColors.forEach((circleSolidAndDualColor) => {
      circleSolidAndDualColor.classList.remove('active');
    });
    circleSolidAndDualColor.classList.add('active');
    dualColorName.innerHTML = circleSolidAndDualColor.dataset.dualColor;
  });
});
// =========================== Shoe Card ======================

circleShoeSolids.forEach((circleShoeSolid) => {
  circleShoeSolid.addEventListener('click', (e) => {
    circleShoeSolids.forEach((circleShoeSolid) => {
      circleShoeSolid.classList.remove('active');
    });
    circleShoeSolid.classList.add('active');
    shoeColor.style.fill = circleShoeSolid.dataset.shoeColor;
    shoePrice.innerHTML = circleShoeSolid.dataset.shoePrice;
  });
});
shoeNumbers.forEach((shoeNumber) => {
  shoeNumber.addEventListener('click', (e) => {
    shoeNumbers.forEach((shoeNumber) => {
      shoeNumber.classList.remove('active');
    });
    shoeNumber.classList.add('active');
  });
});

// ===========================Filter Card ======================

filterSolidBorders.forEach((filterSolidBorder) => {
  filterSolidBorder.addEventListener('click', (e) => {
    filterSolidBorders.forEach((filterSolidBorder) => {
      filterSolidBorder.classList.remove('active');
    });
    filterSolidBorder.classList.add('active');
  });
});
circleFilters.forEach((circleFilter) => {
  circleFilter.addEventListener('click', (e) => {
    circleFilters.forEach((circleFilter) => {
      circleFilter.classList.remove('active');
    });
    circleFilter.classList.add('active');
  });
});

// ================== Watch Card ================================ */

tooltipCircles.forEach((tooltipCircle, tooltipCircleIndx) => {
  tooltipCircle.addEventListener('mouseleave', (e) => {
    toolTips.forEach((toolTip, toolTipIndx) => {
      toolTip.classList.remove('show');
    });
  });
});

tooltipCircles.forEach((tooltipCircle, tooltipCircleIndx) => {
  tooltipCircle.addEventListener('mouseenter', (e) => {
    toolTips.forEach((toolTip, toolTipIndx) => {
      if (tooltipCircleIndx == toolTipIndx) {
        toolTip.classList.add('show');
      }
    });
  });
});
tooltipCircles.forEach((tooltipCircle) => {
  tooltipCircle.addEventListener('click', (e) => {
    tooltipCircles.forEach((tooltipCircle) => {
      tooltipCircle.classList.remove('active');
    });

    tooltipCircle.classList.add('active');
    r.style.setProperty('--watch-color', tooltipCircle.dataset.tooltipColor);
    watchPrice.innerHTML = tooltipCircle.dataset.tooltipPrice;
    tooltipButton.innerHTML = 'Add to Card';
  });
});

// ========================== Animation Start =================
const rootSvg = document.querySelector('#interactive-swatch-hero');
const myCursor = document.querySelector('#my-cursor');
const motionPathOne = document.getElementById('cursor-position-1');
const motionPathTwo = document.getElementById('cursor-position-2');
const motionPathThree = document.getElementById('cursor-position-3');
const motionPathFour = document.getElementById('cursor-position-4');
const motionPathFive = document.getElementById('cursor-position-5');
const motionPathSix = document.getElementById('cursor-position-6');
const motionPathSeven = document.getElementById('cursor-position-7');
const motionPathEight = document.getElementById('cursor-position-8');
const motionPathNine = document.getElementById('cursor-position-9');
const motionPathTen = document.getElementById('cursor-position-10');
const actionTiming = 500;

motionPathOne.addEventListener('endEvent', (event) => {
  myCursor.classList.add('active');
  setTimeout(() => {
    sofaCircleGroups[1].dispatchEvent(new Event('click'));
  }, actionTiming);
});

motionPathTwo.addEventListener('endEvent', (event) => {
  myCursor.classList.add('active');
  setTimeout(() => {
    sofaCircleGroups[3].dispatchEvent(new Event('click'));
  }, actionTiming);
});
motionPathThree.addEventListener('endEvent', (event) => {
  myCursor.classList.add('active');
  setTimeout(() => {
    filterSolidBorders[0].dispatchEvent(new Event('click'));
  }, actionTiming);
});
motionPathFour.addEventListener('endEvent', (event) => {
  myCursor.classList.add('active');
  setTimeout(() => {
    filterSolidBorders[4].dispatchEvent(new Event('click'));
  }, actionTiming);
});
motionPathFive.addEventListener('endEvent', (event) => {
  myCursor.classList.add('active');
  tooltipCircles[2].dispatchEvent(new Event('mouseenter'));

  setTimeout(() => {
    tooltipCircles[2].dispatchEvent(new Event('click'));
  }, actionTiming);
});

motionPathSix.addEventListener('beginEvent', (event) => {
  tooltipCircles[2].dispatchEvent(new Event('mouseleave'));
});

motionPathSix.addEventListener('endEvent', (event) => {
  myCursor.classList.add('active');
  setTimeout(() => {
    tooltipCircles[0].dispatchEvent(new Event('click'));
  }, actionTiming);
  tooltipCircles[0].dispatchEvent(new Event('mouseenter'));
});
motionPathSeven.addEventListener('beginEvent', (event) => {
  tooltipCircles[2].dispatchEvent(new Event('mouseleave'));
});
motionPathSeven.addEventListener('endEvent', (event) => {
  myCursor.classList.add('active');
  setTimeout(() => {
    circleSolidAndDualColors[2].dispatchEvent(new Event('click'));
  }, actionTiming);
});

motionPathEight.addEventListener('endEvent', (event) => {
  myCursor.classList.add('active');
  setTimeout(() => {
    circleSolidAndDualColors[4].dispatchEvent(new Event('click'));
  }, actionTiming);
});

motionPathNine.addEventListener('endEvent', (event) => {
  myCursor.classList.add('active');
  setTimeout(() => {
    circleShoeSolids[4].dispatchEvent(new Event('click'));
  }, actionTiming);
});
motionPathTen.addEventListener('endEvent', (event) => {
  myCursor.classList.add('active');
  setTimeout(() => {
    circleShoeSolids[1].dispatchEvent(new Event('click'));
  }, actionTiming);

  setTimeout(() => {
    motionPathOne.beginElement();
  }, actionTiming);
});

// motionPathTen.addEventListener('endEvent', (event) => {
//    myCursor.classList.add('active');
//    setTimeout(() => {
//       motionPathOne.beginElement()

//    }, 500);
// });

// ============================= Change Cursor ======================
motionPathOne.addEventListener('beginEvent', (event) => {
  myCursor.classList.remove('active');
});

motionPathTwo.addEventListener('beginEvent', (event) => {
  myCursor.classList.remove('active');
});

motionPathThree.addEventListener('beginEvent', (event) => {
  myCursor.classList.remove('active');
});
motionPathFour.addEventListener('beginEvent', (event) => {
  myCursor.classList.remove('active');
});
motionPathFive.addEventListener('beginEvent', (event) => {
  myCursor.classList.remove('active');
});
motionPathSix.addEventListener('beginEvent', (event) => {
  myCursor.classList.remove('active');
});
motionPathSeven.addEventListener('beginEvent', (event) => {
  myCursor.classList.remove('active');
});
motionPathEight.addEventListener('beginEvent', (event) => {
  myCursor.classList.remove('active');
});
motionPathNine.addEventListener('beginEvent', (event) => {
  myCursor.classList.remove('active');
});
motionPathTen.addEventListener('beginEvent', (event) => {
  myCursor.classList.remove('active');
});

rootSvg.addEventListener('mouseenter', (e) => {
  rootSvg.pauseAnimations();
  myCursor.style.display = 'none';
});
rootSvg.addEventListener('mouseleave', (e) => {
  myCursor.style.display = 'block';
  rootSvg.unpauseAnimations();
});
