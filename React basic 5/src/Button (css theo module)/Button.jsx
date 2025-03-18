import style from './Button.module.css'
function Button(){
          const styles = {
                    backgroundColor: "hsl(200, 100%, 50%)",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  };

          return(
                    <div>
                              <button className="button">CSS external</button>        {/* css theo internal */}
                              <br /><br />
                              <button className={style.button}>CSS module</button>    {/* css theo module */}
                              <br /><br />
                              <button style={styles}>CSS inline</button>              {/* css theo inline */}
                    </div>          
          );
}
export default Button