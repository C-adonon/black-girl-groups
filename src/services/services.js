import data from "./data.json";

export function getAllGroups() {
  let resp = data.groups;
  return resp;
}

export function getGroup(url) {
  let resp = data.groups.find((group) => group.url === url);
  return resp;
}
