const cl = console.log;

const imgbike = document.getElementById('imgbike');
const alldiv = [...document.querySelectorAll('.all')];

const onbikeimg = eve => {
    let getbikeval = eve.target.value;
    cl(getbikeval)
    alldiv.forEach(eve => eve.classList.add('d-none'));
    const selectbike = [...document.getElementsByClassName(getbikeval)];
    selectbike.forEach(eve => eve.classList.remove('d-none'));
}

imgbike.addEventListener('change',onbikeimg)