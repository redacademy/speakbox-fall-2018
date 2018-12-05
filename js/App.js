import React, { Component } from "react";
import AppNavigator from "./navigation/RootStackNavigator";

export default class App extends Component {
  // callingAPI = async () => {
  //   const token =
  //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNwZWFrYm94LXN0YWdpbmcuY2FcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE1NDM5NjIwODksImV4cCI6MTU0Mzk2NTY4OSwibmJmIjoxNTQzOTYyMDg5LCJqdGkiOiJwUHp5aVBpR3VCSUJ4N2ZGIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.C0VmOTeAcS8J32AgAsXLWPPyK_19UgTLuUdJENGdYms";
  //   const res = await apiPromise("/me", {
  //     //   method: 'POST',
  //     headers: {
  //       Authorization: `Bearer${[token]}`
  //     }
  //     //   body: JSON.stringify({
  //     //     email: 'user@example.com',
  //     //     password: 'user@example.com',
  //     //   }),
  //   });
  //   console.log(res);
  // };

  // componentDidMount() {
  //   this.callingAPI();
  // }

  render() {
    return <AppNavigator />;
  }
}
