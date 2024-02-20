export default function ProgramList() {
    const list = ["String","Variables","Operators"];
    const styles = {
      container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      listItem: {
        marginBottom: "8px", // Adjust this value to change the spacing between items
      },
    };
  
    return (
      <div style={styles.container}>
        {list.map((item, index) => (
          <div key={index} style={styles.listItem}>
            {item}
          </div>
        ))}
  </div>
    );
  }