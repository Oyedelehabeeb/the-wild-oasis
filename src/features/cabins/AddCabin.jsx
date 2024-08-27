import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <Modal>
      <div>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </div>

      <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpen((show) => !show)}>Add new cabin</Button>
//       {isOpen && (
//         <Modal onCloseModal={() => setIsOpen(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpen(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
