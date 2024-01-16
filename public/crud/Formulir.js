import { Col, Container, FormControl, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Formulir = ({namaBuku, namaAuthor, deskripsi, harga, namaPeminjam, tanggalKeluar, tanggalMasuk, handleChange, handleSubmit, id}) => {
  return (
    <Container className="mt-5"> 
      <Row>
  
<Col>
        <h4>{id ? "Edit Data" : "Data Buku"}</h4>
        <hr />
  
        
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="namaBuku">
        <Form.Label>Nama Buku</Form.Label>
        <Form.Control
        type="text"
        name="namaBuku" 
        value={namaBuku}
        onChange={(Event) => handleChange(Event)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="namaAuthor">
        <Form.Label>Nama Author</Form.Label>
        <Form.Control
        type="text"
        name="namaAuthor" 
        value={namaAuthor}
        onChange={(Event) => handleChange(Event)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="deskripsi">
        <Form.Label>Deskripsi</Form.Label>
        <Form.Control
        as="textarea"
        rows="1"
        name="deskripsi"
        value={deskripsi}
        onChange={(Event) => handleChange(Event)}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="harga">
        <Form.Label>Harga buku</Form.Label>
        <Form.Control
        type="number"
        name="harga" 
        value={harga}
        onChange={(Event) => handleChange(Event)}/>
      </Form.Group>
      </Form>
</Col>
<Col>
        <h4>{id ? "Edit Data" : "Data Peminjaman"}</h4>
        <hr />
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="namaPeminjam">
        <Form.Label>Nama Peminjam</Form.Label>
        <Form.Control
        type="text"
        name="namaPeminjam" 
        value={namaPeminjam}
        onChange={(Event) => handleChange(Event)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="namaBuku">
        <Form.Label>Nama Buku</Form.Label>
        <Form.Control
        type="text"
        name="namaBuku" 
        value={namaBuku}
        onChange={(Event) => handleChange(Event)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="tanggalKeluar">
        <Form.Label>Tanggal Keluar</Form.Label>
        <Form.Control
        type="date"
        name="tanggalKeluar" 
        value={tanggalKeluar}
        onChange={(Event) => handleChange(Event)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="tanggalMasuk">
        <Form.Label>Tanggal Masuk</Form.Label>
        <Form.Control
        type="date"
        name="tanggalMasuk" 
        value={tanggalMasuk}
        onChange={(Event) => handleChange(Event)}/>
        </Form.Group>
        </Form>
</Col>

<Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

<Form onSubmit={handleSubmit} className=''>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</Row>
</Container>
  );
}

export default Formulir;