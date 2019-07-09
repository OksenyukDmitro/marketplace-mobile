export function isBookmarks(productId) {
  const data = getBookmarks(viewerId);

  if (data) return data.includes(productId);
  return false;
}
