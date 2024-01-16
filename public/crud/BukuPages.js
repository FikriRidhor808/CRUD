import React from "react";

const BukuList = ({ bukuData }) => {
  return (
    <ul>
      {bukuData.map((buku, index) => (
        <li key={index}>
          <strong>{buku.namaBuku}</strong> - {buku.namaAuthor} (Rp {buku.harga})
        </li>
      ))}
    </ul>
  );
};

const BukuPage = () => {
  const buku = [
    {
      namaBuku: "Jujutsu kaisen",
      namaAuthor: "Gege Akutami",
      harga: 12000
    },
    {
      namaBuku: "Masashi kisimoto",
      namaAuthor: "Naruto",
      harga: 15000
    },
    {
      namaBuku: "One piece",
      namaAuthor: "Oda sensei",
      harga: 20000
    },
    {
      namaBuku: "silver metal",
      namaAuthor: "Gege Akutami",
      harga: 22000
    },
  ];

  return (
    <div>
      <h1>Daftar Buku</h1>
      <BukuList bukuData={buku} />
    </div>
  );
};

export default BukuPage;
