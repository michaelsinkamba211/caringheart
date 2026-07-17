import { BASE_URL } from "../../config";

const getRelativePath = (fullPath) => {
  if (!fullPath) return null;
  const idx = fullPath.indexOf("uploads/");
  return idx !== -1 ? fullPath.substring(idx) : fullPath;
};

export function getImageUrl(path) {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  const rel = getRelativePath(path);
  return `${BASE_URL.replace(/\/$/, "")}/${rel.replace(/^\//, "")}`;
}