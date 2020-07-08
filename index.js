// PICTURE GALLERY
  // Initialize - image
  var indexImg = 1;
  var indexDiv = 1;

  var tempImg = new Image();

  tempImg.onload = function(){
    appendDiv();
    appendImage();
  }

  var tryLoadImage = function( index ){
     tempImg.src = 'images/pic-gallery/' + index + '.png';
  }

  // Image parent
  var appendDiv = function(){
    var div = document.createElement('div');
    var srcDiv = document.getElementById('pics');
    var idDiv = 'image' + indexDiv;

    srcDiv.appendChild( div )
    div.setAttribute('class', 'carousel-item col-12 col-sm-6 col-md-4 col-lg-3');
    div.setAttribute('id', idDiv);
    indexDiv++;
  }

  // Image
  var appendImage = function(){
     var img = document.createElement('img');
     var idImg = 'image' + indexImg;
     var srcImg = document.getElementById(idImg);
     img.src = tempImg.src;

     srcImg.appendChild( img )
     img.setAttribute('id', idImg)
     img.setAttribute('class', 'img-fluid mx-auto d-block')
     tryLoadImage( indexImg++ )
  }

  tryLoadImage( indexImg );

  // Image slider
  $('#carousel-pic').on('slide.bs.carousel', function (e) {
      /*
          CC 2.0 License Iatek LLC 2018 - Attribution required
      */
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 4;
      var totalItems = $('#carousel-pic .carousel-item').length;

      if (idx >= totalItems-(itemsPerSlide-1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i=0; i<it; i++) {
              // append slides to end
              if (e.direction=="left") {
                  $('#carousel-pic .carousel-item').eq(i).appendTo('#carousel-pic .carousel-inner');
              }
              else {
                  $('#carousel-pic .carousel-item').eq(0).appendTo('#carousel-pic .carousel-inner');
              }
          }
      }
  });
// ------------------------------------------------------------------------------------------------------
// VIDEO GALLERY
  // Initialize - video
  // var indexVid = 1;
  // var indexDiv = 1;
  //
  // var tempImg = new Image();
  //
  // tempImg.onload = function(){
  //   appendDiv();
  //   appendVid();
  // }
  //
  // var tryLoadImage = function( index ){
  //    tempImg.src = 'images/pic-gallery/' + index + '.png';
  // }

  // Video parent
  // var appendDiv = function(){
  //   var div = document.createElement('div');
  //   var srcDiv = document.getElementById('vids');
  //   var idDiv = 'video' + indexDiv;
  //
  //   srcDiv.appendChild( div )
  //   div.setAttribute('class', 'carousel-item col-12 col-sm-6 col-md-4 col-lg-3');
  //   div.setAttribute('id', idDiv);
  //   indexDiv++;
  // }

  // Video
  // var appendImage = function(){
  //    var img = document.createElement('img');
  //    var idImg = 'video' + indexVid;
  //    var srcImg = document.getElementById(idImg);
  //    img.src = tempImg.src;
  //
  //    srcImg.appendChild( img )
  //    img.setAttribute('id', idImg)
  //    img.setAttribute('class', 'img-fluid mx-auto d-block')
  //    tryLoadImage( indexImg++ )
  // }
  //
  // tryLoadImage( indexImg );

  // Video slider
  $('#carousel-vids').on('slide.bs.carousel', function (e) {
      /*
          CC 2.0 License Iatek LLC 2018 - Attribution required
      */
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 4;
      var totalItems = $('#carousel-vids .carousel-item').length;

      if (idx >= totalItems-(itemsPerSlide-1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i=0; i<it; i++) {
              // append slides to end
              if (e.direction=="left") {
                  $('#carousel-vids .carousel-item').eq(i).appendTo('#carousel-vids .carousel-inner');
              }
              else {
                  $('#carousel-vids .carousel-item').eq(0).appendTo('#carousel-vids .carousel-inner');
              }
          }
      }
  });

  // Instagram post slider
  $('#carousel-ig').on('slide.bs.carousel', function (e) {
      /*
          CC 2.0 License Iatek LLC 2018 - Attribution required
      */
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 5;
      var totalItems = $('#carousel-ig .carousel-item').length;

      if (idx >= totalItems-(itemsPerSlide-1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i=0; i<it; i++) {
              // append slides to end
              if (e.direction=="left") {
                  $('#carousel-ig .carousel-item').eq(i).appendTo('#carousel-ig .carousel-inner');
              }
              else {
                  $('#carousel-ig .carousel-item').eq(0).appendTo('#carousel-ig .carousel-inner');
              }
          }
      }
  });
