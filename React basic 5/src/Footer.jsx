function Footer(){
          return(
                    <footer>
                              <p>&copy; {new Date().getFullYear()} web test</p>
                              {/* new Date() tạo một đối tượng Date lấy thời gian hiện tại.
                              .getFullYear() lấy năm hiện tại. */}
                    </footer>
          );
}
export default Footer