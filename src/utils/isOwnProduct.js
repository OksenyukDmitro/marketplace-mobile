export default function isOwnProduct(owner, viewer) {
  return owner && viewer && owner.id === viewer.id;
}
