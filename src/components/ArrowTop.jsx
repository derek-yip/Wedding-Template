import '../scss/ArrowTop.scss'

function ArrowTop() {
    const btnScrollToUp=()=>{
        window.scrollTo({
           top:0,
           left:0,
           behavior:"smooth"
        })
        const header = document.querySelector('.header');
        header.style.transform = 'translateY(0%)';
      }
  return (
    <div className="arrow_wrapper">
        <div className='arrow_top center_center' onClick={btnScrollToUp}></div>
    </div>
  )
}

export default ArrowTop