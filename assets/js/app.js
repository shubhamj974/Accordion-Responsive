let cl = console.log;

const heading = [...document.querySelectorAll('.card-header h2')];
const AccoContent = [...document.querySelectorAll('.shubham')]



const OnClick = (e) => {
    let getAttribute = e.target.getAttribute('data-id');
    cl(getAttribute);
    AccoContent.forEach(div => div.classList.add('d-none'));
    document.getElementById(getAttribute).classList.remove('d-none')
    heading.forEach(h => h.classList.remove('active'));
    e.target.classList.add('active');
}

heading.forEach(h2 => h2.addEventListener('click' , OnClick));
