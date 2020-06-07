
// spoiler
const spoiler = (() => {
  const root = document.querySelector('.js-spoiler');

  if (root !== undefined && root !== null) {
    const elements = (root) ? [...root.querySelectorAll('.js-spoiler-toggle')] : [];

    elements.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.parentNode.classList.toggle('is-active');
        document.querySelector('body').classList.toggle('open-spoiler');
        // document.querySelector('.font-download').classList.toggle('is-active');
        return false;
      });

    });
  }
})();


$(document).mouseup(function (e) {
  let $root = $(".js-spoiler"),
    $downloadBtn = $('.font-download'),
    $dino = $('.dino-image');
  if (!$root.is(e.target)
    && $root.has(e.target).length === 0 && !$downloadBtn.is(e.target) && $downloadBtn.has(e.target).length === 0 && !$dino.is(e.target) && $dino.has(e.target).length === 0) {

    $root.removeClass('is-active');
    $('body').removeClass('open-spoiler');
    // $downloadBtn.removeClass('is-active');
  }
});


// $(".js-spoiler").swipe({
//   swipeStatus: function (event, phase, direction, distance, duration, fingers) {
//     if (phase == "move" && direction == "right") {
//       $(".js-spoiler").addClass("is-active");
//       return false;
//     }
//     if (phase == "move" && direction == "left") {
//       $(".js-spoiler").removeClass("is-active");
//       return false;
//     }
//   }
// });

// upload image
document.getElementById('upload').addEventListener('change', readURL, true);
function readURL() {
  var file = document.getElementById("upload").files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    document.getElementById('art').style.backgroundImage = "url(" + reader.result + ")";
  }
  if (file) {
    reader.readAsDataURL(file);
  } else {
  }
}

// toolbar

// change text font-size
(function () {
  let rng = document.getElementById('myRange'),
    text = document.getElementById('arttext');
  if (rng) {
    rng.addEventListener("input",
      function () {
        text.style.fontSize = rng.value + 'px'
      });
  }
})();
//for mobile
(function () {
  let rng = document.getElementById('myRangeMob'),
    text = document.getElementById('arttext');
  if (rng) {
    rng.addEventListener("input",
      function () {
        text.style.fontSize = rng.value + 'px'
      });    
  }
})();

// change text align
const addHandlerBtns = () => {
  let btnLeft = document.getElementById('text-align-left'),
    btnRight = document.getElementById('text-align-right'),
    btnCenter = document.getElementById('text-align-center'),
    text = document.getElementById('arttext');
  
    btnCenter.classList.add('is-active');

    btnLeft.addEventListener('click', function (e) {
        this.classList.add('is-active');
        btnRight.classList.remove('is-active');
        btnCenter.classList.remove('is-active');

        text.style.textAlign='left';
    });
    btnRight.addEventListener('click', function (e) {
        this.classList.add('is-active');
        btnLeft.classList.remove('is-active');
        btnCenter.classList.remove('is-active');

        text.style.textAlign = 'right';
    });
    btnCenter.addEventListener('click', function (e) {
        this.classList.add('is-active');
        btnRight.classList.remove('is-active');
        btnLeft.classList.remove('is-active');

        text.style.textAlign = 'center';
    });
};

// change text color
const addHandlerToggle = () => {
  let toggleWhite = document.getElementById('toggle-white'),
    toggleBlack = document.getElementById('toggle-black'),
    toggleBtn = document.getElementById('toggle-btn'),
    text = document.getElementById('arttext');

    toggleWhite.classList.add('is-active');
    toggleBtn.classList.add('-white');

    toggleWhite.addEventListener('click', function (e) {
      this.classList.add('is-active');
      toggleBlack.classList.remove('is-active');

      toggleBtn.classList.add('-white');
      toggleBtn.classList.remove('-black');

      text.style.color = '#fff';
    });

    toggleBlack.addEventListener('click', function (e) {
      this.classList.add('is-active');
      toggleWhite.classList.remove('is-active');

      toggleBtn.classList.add('-black');
      toggleBtn.classList.remove('-white');

      text.style.color = '#000';
    });

    toggleBtn.addEventListener('click', function (e) {
      if (this.classList.contains('-white')) {
        this.classList.add('-black');
        this.classList.remove('-white');

        toggleBlack.classList.add('is-active');
        toggleWhite.classList.remove('is-active');
        
        text.style.color = '#000';
      } else if (this.classList.contains('-black')) {
        this.classList.add('-white');
        this.classList.remove('-black');

        toggleWhite.classList.add('is-active');
        toggleBlack.classList.remove('is-active');

        text.style.color = '#fff';
      }
      
      
    });

};

// change ratio
const changeRatio = () => {
  let ratio1 = document.getElementById('ratio1'),
    ratio9 = document.getElementById('ratio9'),
    container = document.getElementById('art-container');

  ratio1.classList.add('is-active');

  ratio1.addEventListener('click', function (e) {
    this.classList.add('is-active');
    ratio9.classList.remove('is-active');

    container.style.paddingBottom = '100%';
  });
  ratio9.addEventListener('click', function (e) {
    this.classList.add('is-active');

    ratio1.classList.remove('is-active');

    container.style.paddingBottom = '56.25%';
  });
};

const dino = () => {
  let dino = document.getElementById('dino-image');

  dino.addEventListener('click', function (e) {
    this.classList.toggle('is-active');
  });

};

addHandlerBtns();
addHandlerToggle();
changeRatio();
dino();

$('#funstarts').click(function() {
  $('#funstarts').hide();
})