export default function Message({msg, bgColor}) {
    let styles = {
        padding: "1rem",
        marginBottom: "1remn",
        textAlign: "center",
        backgroundColor: bgColor,
        color: "#fff",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "50vh"}
    return (
        <div style={styles}>
            <h2>{msg}</h2>
        </div>
    )
};  