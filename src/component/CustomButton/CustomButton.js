import Button from 'react-bootstrap/Button';

const CustomButton = (props) =>{
    const {title, variant="primary"} = props;
    return(
        <Button variant={variant}>{title}</Button>
    )
}

export default CustomButton;