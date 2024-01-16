import Table from 'react-bootstrap/Table';
// import {Tabel} from 'react-bootstrap'


const Tabel = ({perpus, editData, hapusData}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Buku</th>
          <th>Nama Author</th>
          <th>Deskripsi</th>
          <th>Harga Buku</th>
          <th>Nama Peminjam</th>
          <th>Nama Buku</th>
          <th>Tanggal Keluar</th>
          <th>Tanggal Masuk</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
      {perpus.map((buku, index) => {
      return(
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{buku.namaBuku}</td>
          <td>{buku.namaAuthor}</td>
          <td>{buku.deskripsi}</td>
          <td>{buku.harga}</td>
          <td>{buku.namaPeminjam}</td>
          <td>{buku.namaBuku}</td>
          <td>{buku.tanggalKeluar}</td>
          <td>{buku.tanggalMasuk}</td>
          <td>
            <button className="btn btn-warning mr-1" onClick={() => editData(buku.id) }>Edit</button>
            <button className="btn btn-danger mr-1" onClick={() => hapusData(buku.id) }>Hapus</button>
          </td>
        </tr>
        );
    })}  
      </tbody>
    </Table>
  );
}

export default Tabel;