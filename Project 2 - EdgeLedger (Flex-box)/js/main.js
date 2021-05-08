// AIzaSyC5rrnVxDz5VGuylLJ_2LV_7gcz7C-OglA

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 17.385044, lng: 78.486671 },
    zoom: 14,
  });
}


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 110
        },
        800
      );
    }
  }
);

// Navbar Opacity
window.addEventListener('scroll', () => {
    if (window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
})