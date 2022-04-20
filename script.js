const closedf = document.querySelector('.closed')
const openf = document.querySelector('.open')

// add event listener
closedf.addEventListener('click', () => {
    if (openf.classList.contains('open')) {
        openf.classList.add('active');
        closedf.classList.remove('active');
    }
});

openf.addEventListener('click', () => {
    if (closedf.classList.contains('closed')) {
        closedf.classList.add('active');
        openf.classList.remove('active');
    }
});