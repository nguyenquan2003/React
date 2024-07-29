import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
          //lấy dữ liệu từ URL http://localhost:8000/blogs. Hook này trả về một đối tượng chứa data, isPending, và error
          const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

          return (
                    <div className="home">
                              {/* Nếu biến error có giá trị (không rỗng), thẻ div thông báo lỗi sẽ được hiển thị */}
                              {error && <div>{error}</div>}
                              {isPending && <div>Loading...</div>}
                              {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
                    </div>
          );
}

export default Home;