import axios from "axios";
import { API_URL } from "./config";

export async function getProjects() {
  const { data } = await axios.get(`${API_URL}/projects`);
  return data;
}

export async function deleteProject(id) {
  await axios.delete(`${API_URL}/projects/${id}`);
}

export async function getTasks() {
  const { data } = await axios.get(`${API_URL}/tasks`);
  return data;
}

export async function addTask(task) {
  await axios.post(`${API_URL}/tasks`, task);
}

export async function getCalendar() {
  const { data } = await axios.get(`${API_URL}/timelogs`);
  return data;
}

export async function addProject(project) {
  const { data } = await axios.post(`${API_URL}/projects`, project);
  return data;
}
