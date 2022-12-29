import axios from "axios";
import { error, success } from "../Help/FormHelper";
import { getToken, setToken, setUserDetails } from "../Help/SessionHelper";
import { count } from "../Redux/Slices/summary-task";
import { setCenceled, setCompleted, setNewTask, setProgress } from "../Redux/Slices/task-slice";
import store from "../Redux/Store/store";

const baseUrl = "http://localhost:2000";
const axiosHeader = {headers: {"token": getToken()}}    // postman header token

// Registration
export function registration(email, firstName, lastName, mobile, password) {
  const url = baseUrl + "/registration";
  const postData = {
    Email: email,
    FirstName: firstName,
    LastName: lastName,
    Mobile: mobile,
    Password: password,
  };

  return axios
    .post(url, postData)
    .then((res) => {
      if (res.status === 200) {
        if (res.data["massage"] === "Create Error") {
          if (res.data["err"]["keyPattern"]["Email"] === 1) {
            error("Email exist");
            return false;
          } else {
            error("something was wrong");
            return true;
          }
        } else {
          success("Registration success");
          return true;
        }
      } else {
        error("insert error");
        return false;
      }
    })
    .catch((e) => {
      error("Data insert Failed");
      return false;
    });
}

// Login
export function login(email, password) {
  const url = baseUrl + "/login";
  const postBody = {
    Email: email,
    Password: password,
  };

  return axios
    .post(url, postBody)
    .then((res) => {
      if (res.status === 200) {
        setToken(res.data["token"]);
        setUserDetails(res.data["data"][0]);

        success("Login Success");
        return true;
      } else {
        error("Invalided email or password");
        return false;
      }
    })
    .catch((e) => {
      error("Login Failed ...");
      console.log(e);
      return false;
    });
}


// Create Task
export function createTask(title, description) {

  const url = baseUrl + "/createtask";
  const postData = {
    Title: title,
    Description: description,
    Status: 'new'
  };

  return axios.post(url, postData, axiosHeader).then(res => {   // pass header token

    if(res.status === 200){
      success('create success')
      return true
    }
    else{
      error('something was wrong')
      return false
    }

  }).catch(e => {
    error('Create Failed')
    return false
  })
}


// find by Status
export function taskStatus(position){
  const url = baseUrl + '/tasklist/'+ position

  return axios.get(url, axiosHeader).then(res => {

    if(res.status === 200){

      if(position === 'new'){
        store.dispatch(setNewTask(res.data['data']))
      }
      else if(position === 'completed'){
        store.dispatch(setCompleted(res.data['data']))
      }
      else if(position === 'progress'){
        store.dispatch(setProgress(res.data['data']))
      }
      else if(position === 'cenceled'){
        store.dispatch(setCenceled(res.data['data']))
      }
      else{
        error('Not found')
      }

    }else{
      error('something was wrong')
      return false
    }

  }).catch(e => {
    error('Status not Found')
    return false
  })
}


// Total Count
export function totalCount(){
  let url = baseUrl + '/totalStatus' 
  
  return axios.get(url, axiosHeader).then((res) => {

    if(res.status === 200){
      store.dispatch(count(res.data['data']))
      return true
    }
    else{
      error('something was wrong')
      return false
    }

  }).catch((e) => {
    error('count Failed')
    return false
  })
}



