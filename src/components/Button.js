import PropTypes from 'prop-types';
//put r arrow function to get self fill in
const Button = ({color, text, onClick}) => {
     
    return( 
    <button 
    onClick={onClick}
     style={{backgroundColor: color}}
      className='btn'>{text}</button> 
      )

}
Button.defaultProps = {
    color: 'black',
    text: 'default',
}
Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
      