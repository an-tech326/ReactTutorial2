export const InlineStyle = () =>{
    const containerStyle={
        border:"solid 2px #392eff",
        borderRadius:"20px",
        padding:"8px",
        margin:"8px",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
    };
    const titleStyle={
        margin:0,
        color:"#3d84a8",
    };
    const buttonStyle={
        backGroundColor:"#abedd8",
        border:"none",
        padding:"8px",
        borderRadius:"8px",
    };
    return(
        <div div style={containerStyle}>
            <p style={titleStyle}>-Inline Styles-</p>
            <button style={buttonStyle}>FIGHT!</button>
        </div>
    )
}