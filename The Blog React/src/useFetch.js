import { useState,useEffect } from "react";
const useFetch=(url)=>{ //custom Hook
          //Khởi tạo các trạng thái với các giá trị
          const [data, setData] = useState(null); 
          const [isPending, setIsPending] = useState(true);
          const [error, setError] = useState(null);
          
          useEffect(() => {
                    const abortCont=new AbortController(); //khởi tạo 1 instance
                    //bất cứ khi nào url thay đổi nó sẽ chạy lại hàm này để lấy dữ liệu
                    setTimeout(() => { //set thời gian reaload lại trang là 1000s trang sẽ hiển thị trang thái loading....
                              // xử lý các lỗi khi tải dữ liệu từ một API
                              fetch(url,{signal:abortCont.signal})
                                        .then(res => {
                                                  if (!res.ok) { // nếu lỗi in ra thông báo
                                                            throw Error('could not fetch the data for that resource');
                                                  }
                                                  return res.json(); //nếu ko lỗi chuyển dữ liệu phản hồi sang file JSON.
                                        })
                                        .then(data => { //Khi dữ liệu JSON đã sẵn sàng, cập nhật trạng thái.
                                                  setIsPending(false); //tải dữ liệu đã hoàn tất.
                                                  setData(data); //cập nhật status data
                                                  setError(null); //đắt error về null vì ko có lỗi
                                        })
                                        .catch(err => {
                                                  if(err.name==='AbortError'){
                                                            console.log('fetch aborted')
                                                  }
                                                  else{
                                                            // tự động bắt lỗi mạng/kết nối       
                                                  setIsPending(false);
                                                  setError(err.message);
                                                  }
                                        })
                    }, 1000);
                    // hàm clean-up để hủy yêu cầu fetch nếu thành phần bị gỡ bỏ hoặc url thay đổi
                    return()=>abortCont.abort();
          }, [url])
          // thuộc tích này sẽ hoạt động trở lại mỗi khi có lỗi và đang ở trạng thái chờ xử lý
          return {data,isPending,error} //trả về đối tượng chứa 3 trạng thái
}
export default useFetch;