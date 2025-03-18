function UserGreating(props){
          //cách 1:
          // if(props.isLoggedIn){
          //          return <h2>Welcome {props.username}</h2> 
          // }
          // else{
          //           return <h2>Please login to continue</h2>
          // }

          //cách 2:
          // return(props.isLoggedIn?<h2>Welcome {props.username}</h2>:
          // <h2>Please log in to continue</h2>
          // );

          //cách 3:
          const welcomeMessage = <h2>Welcome {props.username}</h2>
          const loginPrompt = <h2>Please log in to continue</h2>
          return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}
export default UserGreating