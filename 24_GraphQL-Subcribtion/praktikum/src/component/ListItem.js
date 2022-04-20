import "./Home.css"
const ListItem = (props) => {

    const { Id, nama, umur, jenisKelamin } = props.data

    return (
        <tr>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenisKelamin}</td>
            <td className="removeBorder" onClick={() => props.hapusPengunjung(Id)}><button>Hapus</button></td>
            <td className="removeBorder" onClick={() => props.editPengunjung(props.data)}><button>Edit</button></td>
        </tr>
    )
}

export default ListItem;