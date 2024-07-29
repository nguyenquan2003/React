import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //import thư viện React Router
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    //react router
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>

            {/* exact là một thuộc tính (prop) được sử dụng để đảm bảo rằng một tuyến đường chỉ khớp chính xác với URL hiện tại */}
            <Route exact path="/">
              <Home />
            </Route>

            {/* Định nghĩa một tuyến đường, khi URL là /create, component Create sẽ được render. */}
            <Route path="/create">
              <Create />
            </Route>

            {/* Định nghĩa một tuyến đường cho BlogDetails. */}
            {/* :id là một tham số động trong URL. Khi URL là /blogs/some-id thành phần BlogDetails sẽ được render và truy cập giá trị id thông qua các props */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            {/* Định nghĩa một tuyến đường cho notfound . */}
            {/* (*) là một wildcard, biểu thị rằng mọi đường dẫn không khớp với các tuyến đường cụ thể đã được định nghĩa trước đó sẽ khớp với tuyến đường này. */}
            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;