import axios from "axios";
import { API_URL } from "./config";

export async function getProjects() {
  const { data } = await axios.get(`${API_URL}/projects`);
  return data;
}

export async function addProject(project) {
  const { data } = await axios.post(`${API_URL}/projects`, project);
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
  const { data } = await axios.post(`${API_URL}/tasks`, task);
  return data;
}

export async function deleteTask(id) {
  await axios.delete(`${API_URL}/tasks/${id}`);
}

export async function getTimelogs() {
  const { data } = await axios.get(`${API_URL}/timelogs`);
  return data;
}

export async function addTimelog(timelog) {
  const { data } = await axios.post(`${API_URL}/timelogs`, timelog);
  return data;
}

export async function getTimelog(id) {
  const { data } = await axios.get(`${API_URL}/timelogs/${id}`);
  return data;
}

export async function deleteTimelog(id) {
  await axios.delete(`${API_URL}/timelogs/${id}`);
}
