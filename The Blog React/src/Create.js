import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

//khi người dùng nhấn vào "New Blog", thành phần này sẽ được render
const Create = () => {
          //  // Khai báo state để quản lý các giá trị của biểu mẫu
          const [title,setTitle]=useState(' ');
          const [body,setBody]=useState(' ');
          const [author,setAuthor]=useState(' ');
          const[isPending,setIsPending]=useState(false);

          const history=useHistory();// Sử dụng hook useHistory để điều hướng
          const handleSubmit=e=>{ //Hàm xử lý sự kiện khi biểu mẫu được gửi:
                    e.preventDefault();//ngăn cho trang k dc làm mới
                    const blog={title,body,author}; //tạo một đối tượng blog chứa các giá trị từ biểu mẫu.
                    setIsPending(true); // Đặt trạng thái isPending thành true khi bắt đầu gửi dữ liệu
                    fetch('http://localhost:8000/blogs',{ //thực hiện yêu cầu HTTP POST để gửi dữ liệu blog mới đến server
                              method:'POST',
                              headers:{"Content-Type":"application/json"},
                              body: JSON.stringify(blog)
                    }).then(()=>{
                              console.log('new blog added');
                              setTimeout(() => {
                                        setIsPending(false); // Cập nhật trạng thái isPending thành false sau 1 giây
                                        // history.go(-1);Điều hướng quay lại trang trước đó
                                        // history.go(1); Điều hướng tới trang tiếp theo trong lịch sử
                                        history.push('/'); // Điều hướng người dùng trở lại Home sau khi thêm blog thành công
                              }, 1000);
                    })
          } 

          return (
                    <div className="create">
                              <h2>Add a new Blog</h2>
                              <form onSubmit={handleSubmit}> {/*gọi hàm handleSubmit khi biểu mẫu được gửi*/}

                                        {/* Hàm onChange khi người dùng nhập liệu, giá trị mới sẽ được cập nhật vào state body. */}
                                        <label>Blog title:</label>
                                        <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>

                                        <label>Blog body: </label>
                                        <textarea required value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>
 
                                        <label>Blog author: </label>
                                        <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                                                  <option value="mario">mario</option>
                                                  <option value="yoshi">yoshi</option>
                                        </select>
                                        {!isPending&&<button>Add blog</button>}
                                        {isPending&&<button>Adding blog...</button>}
                                        
                              </form>
                    </div>
          );
}

export default Create;