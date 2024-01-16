import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulir from './Formulir';
import Tabel from './Tabel';

export default class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {
        perpus : [],
        id : "",
        namaBuku : "",
        namaAuthor : "",
        deskripsi : "",
        harga : "",
        namaPeminjam : "",
        namaBuku : "",
        tanggalKeluar : "",
        tanggalMasuk : "",
    }
}

handleChange = (Event) => {
  this.setState({
      [Event.target.name] : Event.target.value
  })
}

handleSubmit = (Event) => {
  Event.preventDefault();

  if(this.state.id === ""){
      this.setState({
  perpus: [
      ...this.state.perpus,
      {
          id: this.state.perpus.length + 1,
          namaBuku: this.state.namaBuku,
          namaAuthor: this.state.namaAuthor,
          deskripsi: this.state.deskripsi,
          harga: this.state.harga,
          namaPeminjam: this.state.namaPeminjam,
          tanggalKeluar: this.state.tanggalKeluar,
          tanggalMasuk: this.state.tanggalMasuk,
      },
  ],
});
} else {
  const bukuYangSelainDipilih = this.state.perpus
  .filter((buku) => buku.id !== this.state.id)
  .map((filterBuku) => {
      return filterBuku
  });

  this.setState({
      perpus: [
          ...bukuYangSelainDipilih,
          {
            id: this.state.perpus.length + 1,
            namaBuku: this.state.namaBuku,
            namaAuthor: this.state.namaAuthor,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
            namaPeminjam: this.state.namaPeminjam,
            tanggalKeluar: this.state.tanggalKeluar,
            tanggalMasuk: this.state.tanggalMasuk,
          }
      ]
  })
}

this.setState({
  id : "",
  namaBuku : "",
  namaAuthor : "",
  deskripsi : "",
  harga : "0",
  namaPeminjam : "",
  namaBuku : "",
  tanggalKeluar : "",
  tanggalMasuk : "",
})
}

editData = (id) => {
  console.log("id buku", id);
  const bukuYangDipilih = this.state.perpus
  .filter((buku) => buku.id === id)
  .map((filterBuku) => {
      return filterBuku
  })

  this.setState({
      nama : bukuYangDipilih[0].nama,
      deskripsi : bukuYangDipilih[0].deskripsi,
      harga : bukuYangDipilih[0].harga,
      id : bukuYangDipilih[0].id,
  })

}

hapusData = (id) => {
  const bukuBaru = this.state.perpus
  .filter((buku) => buku.id !== id)
  .map((filterBuku) => {
      return filterBuku
  })

  this.setState({
      perpus : bukuBaru
  })
}

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className='container mt-4'>
        <Tabel perpus={this.state.perpus} editData={this.editData} hapusData={this.hapusData}/>
        <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        <h2>udin</h2>
      </div>
    )
  }
}
