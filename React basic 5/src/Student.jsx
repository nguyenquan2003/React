import PropTypes from 'prop-types'
function Student(props){
          return(
                    <div className="student">
                              <p>Name: {props.name}</p>
                              <p>Age: {props.age}</p>
                              <p>Student: {props.isStudent ? "Yes" : "No"}</p>
                    </div>
          );
}
Student.propTypes={
          name: PropTypes.string,
          age: PropTypes.number,
          isStudent: PropTypes.bool,
}
Student.defaultProps={
          name: "Guest",
          age: 0,
          isStudent: false,
}
export default Student

//vì defaultProps không còn hoạt động trong React 19+ nên  không có giá trị nào cả (các giá trị rỗng)
//sử dụng destructuring với giá trị mặc định, không cần gọi props trực tiếp.
// function Student({name="Guest", age=0, isStudent=false}){
//           return(
//                     <div className="student">
//                               <p>Name: {name}</p>
//                               <p>Age: {age}</p>
//                               <p>Student: {isStudent ? "Yes" : "No"}</p>
//                     </div>
//           );
// }
// export default Student