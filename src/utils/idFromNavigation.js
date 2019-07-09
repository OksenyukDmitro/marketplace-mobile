export default function getIdFromNavigation(props) {
  const { navigation } = props;
  const id = navigation.getParam('id', 'NO-ID');
  return id;
}
