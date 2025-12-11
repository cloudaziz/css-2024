const r = document.querySelector('#interactive-swatch-hero');

// =========================== Sofa Card Variable ======================
let sofaCircleGroups = r.querySelectorAll('.sofa-circle-group');
const sofaPrice = r.querySelector('.sofa-price');
const sofaBtn = r.querySelector('.sofa-btn');

// =========================== Dual Color Card Variable ======================
const circleSolidAndDualColors = r.querySelectorAll(
  '.circle-group-dual, .circle-group-solid'
);
const dualColorName = r.querySelector('.dual-color-name');

// =========================== Shoe Card Variable ======================
const circleShoeSolids = r.querySelectorAll('.circle-shoe-solid');
const shoeNumbers = r.querySelectorAll('.shoe-number');
const shoePrice = r.querySelector('.shoe-price');
const shoeColor = r.querySelector('.shoe-color');

// ===========================Filter Card Variable ======================
const filterSolidBorders = r.querySelectorAll('.filter-solid-border');
const circleFilters = r.querySelectorAll('.circle-filter');

// ================== Watch Card Variable================================ */
const tooltipCircles = r.querySelectorAll('.tooltip-circle');
const toolTips = r.querySelectorAll('.tooltip');
const watchDial = r.querySelector('.watch-dial');
const watchBelt = r.querySelector('.watch-belt');
const watchPrice = r.querySelector('.watch-price');
const tooltipButton = r.querySelector('.tooltip-button text');

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
// const rootSvg = r.querySelector('#interactive-swatch-hero');
const myCursor = r.querySelector('#my-cursor');
const motionPathOne = r.getElementById('cursorPositionOne');
const motionPathTwo = r.getElementById('cursorPositionTwo');
const motionPathThree = r.getElementById('cursorPositionThree');
const motionPathFour = r.getElementById('cursorPositionFour');
const motionPathFive = r.getElementById('cursorPositionFive');
const motionPathSix = r.getElementById('cursorPositionSix');
const motionPathSeven = r.getElementById('cursorPositionSeven');
const motionPathEight = r.getElementById('cursorPositionEight');
const motionPathNine = r.getElementById('cursorPositionNine');
const motionPathTen = r.getElementById('cursorPositionTen');
const handCursor = r.getElementById('hand');
const actionTiming = 500;

const triggerClickEvent = (element) => {
  myCursor.classList.add('active');
  handCursor.addEventListener(
    'animationend',
    (event) => {
      element.dispatchEvent(new Event('click'));
    },
    { signal: AbortSignal.timeout(actionTiming) }
  );
};

motionPathOne.addEventListener('endEvent', (event) => {
  triggerClickEvent(sofaCircleGroups[1]);
});

motionPathTwo.addEventListener('endEvent', (event) => {
  triggerClickEvent(sofaCircleGroups[3]);
});

motionPathThree.addEventListener('endEvent', (event) => {
  triggerClickEvent(filterSolidBorders[0]);
});

motionPathFour.addEventListener('endEvent', (event) => {
  triggerClickEvent(filterSolidBorders[4]);
});

motionPathFive.addEventListener('endEvent', (event) => {
  tooltipCircles[2].dispatchEvent(new Event('mouseenter'));
  triggerClickEvent(tooltipCircles[2]);
});

motionPathSix.addEventListener('beginEvent', (event) => {
  tooltipCircles[2].dispatchEvent(new Event('mouseleave'));
});

motionPathSix.addEventListener('endEvent', (event) => {
  tooltipCircles[0].dispatchEvent(new Event('mouseenter'));
  triggerClickEvent(tooltipCircles[0]);
});

motionPathSeven.addEventListener('beginEvent', (event) => {
  tooltipCircles[2].dispatchEvent(new Event('mouseleave'));
});

motionPathSeven.addEventListener('endEvent', (event) => {
  triggerClickEvent(circleSolidAndDualColors[2]);
});

motionPathEight.addEventListener('endEvent', (event) => {
  triggerClickEvent(circleSolidAndDualColors[4]);
});

motionPathNine.addEventListener('endEvent', (event) => {
  triggerClickEvent(circleShoeSolids[4]);
});
motionPathTen.addEventListener('endEvent', (event) => {
  triggerClickEvent(circleShoeSolids[1]);
});

// ============================= Change Cursor ======================

const allMotionPaths = [
  motionPathOne,
  motionPathTwo,
  motionPathThree,
  motionPathFour,
  motionPathFive,
  motionPathSix,
  motionPathSeven,
  motionPathEight,
  motionPathNine,
  motionPathTen,
];

allMotionPaths.forEach((path) => {
  path.addEventListener('beginEvent', () => {
    myCursor.classList.remove('active');
  });
});
// ============================= End Change Cursor ======================
r.addEventListener('mouseenter', (e) => {
  r.pauseAnimations();
  myCursor.style.display = 'none';
});
r.addEventListener('mouseleave', (e) => {
  myCursor.style.display = 'block';
  r.unpauseAnimations();
});
