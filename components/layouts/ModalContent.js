import ListAllWidget from '../widgets/ListAllWidget';
import CardNone from '../template/CardNone';
const ModalContent = ({
  initialWidget,
  listAllWidgets,
  setListAllWidgets,
  zero,
  setZero,
  openModal,
  showModalEditJustSay,
  setShowModalEditJustSay,
  error,
  setError,
  setShowModalJustSay,
}) => {
  if (!initialWidget) {
    const sort = listAllWidgets.sort((a, b) => {
      return b.id - a.id;
    });
    return (
      <ListAllWidget
        setShowModalJustSay={setShowModalJustSay}
        getAllListWidgets={sort}
        listAllWidgets={listAllWidgets}
        setListAllWidgets={setListAllWidgets}
        zero={zero}
        setZero={setZero}
        openModal={openModal}
        showModalEditJustSay={showModalEditJustSay}
        setShowModalEditJustSay={setShowModalEditJustSay}
        error={error}
        setError={setError}
      />
    );
  } else {
    return <CardNone openModal={openModal} />;
  }
};
export default ModalContent;
