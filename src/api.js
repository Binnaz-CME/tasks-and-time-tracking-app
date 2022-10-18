import axios from "axios";
import { API_URL } from "./config";

export async function getProjects() {
  const { data } = await axios.get(`${API_URL}/projects`);
  console.log(data);
  return data;
}

export async function getTasks() {
  const { data } = await axios.get(`${API_URL}/tasks`);
  console.log(data);
  return data;
}

export async function getCalendar() {
  const { data } = await axios.get(`${API_URL}/timelogs`);
  console.log(data);
  return data;
}
