console.log('app.js is connected')

$('.plus').on('click', ()=>{
    // console.log(typeof parseInt($('input').val()))
    // console.log(typeof parseInt($('.sum').text()))
    let newSum = parseInt($('input').val()) + parseInt($('.sum').text())
    // console.log(newSum)
    $('.sum').text(newSum)
})

$('.minus').on('click', ()=>{
    let newSubtract = parseInt($('.sum').text()) - parseInt($('input').val())
    // console.log(newSubtract)
    $('.sum').text(newSubtract)
})