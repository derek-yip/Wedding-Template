import '../scss/Poster.scss'

function Button(props) {
    const{
        layout,
        height,
        width,
        content,
        background_img,
        color,
        onClick
    } = props;
    
    const styles={
        height: height,
        width: width,
        backgroundImage:`url('${background_img}')`,
        color:color,
    };
  return (
    <div>
        <button className={`button ${layout}`} style={styles} data-aos="fade-top" data-aos-delay="1000" onClick={onClick} >
            {content}
        </button>
    </div>
  )
}
export default Button