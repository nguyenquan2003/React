import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs }) => { //khai báo một component hàm BlogList sử dụng arrow function. 
          //các props title và blogs được lấy từ component cha từ file Home.js.
          return (
                    <div className="blog-list">
                              {blogs.map(blog => (
                                        <div className="blog-preview" key={blog.id} >
                                                   {/* Tạo URL động dựa trên id của blog. Khi người dùng nhấp vào liên kết, họ sẽ được điều hướng đến trang chi tiết của blog đó. */}
                                                  <Link to={`/blogs/${blog.id}`}>
                                                            <h2>{blog.title}</h2>
                                                            <p>Written by {blog.author}</p>
                                                  </Link>

                                        </div>
                              ))}
                    </div>
          );
}

export default BlogList;