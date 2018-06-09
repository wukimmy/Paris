var slider = document.getElementById('test-slider');
noUiSlider.create(slider, {
 start: [10],
 connect: true,
 step: 1,
 orientation: 'horizontal', // 'horizontal' or 'vertical'
 range: {
   'min': 0,
   'max': 10
 },
 format: wNumb({
   decimals: 0
 })
});
    