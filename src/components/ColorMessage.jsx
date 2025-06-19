export const ColorMessage = (props) =>{
    const {color,children,message}=props;
    const cstyle={
            color,
            fontSize:"18px"
        };
    return (
        <p style={cstyle}>{children ??message}</p>
    );
}