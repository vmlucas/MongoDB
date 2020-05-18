db.getCollection('estoque').find({})



db.getCollection('estoque').insert(
   {
     item: "ABC1",
     detalhes: {
        modelo: "14Q3",
        fabricante: "XYZ Empresa"
     },
     itensestoque: [ { tamanho: "S", qtde: 25 }, { tamanho: "M", qtde: 50 } ],
     categoria: "roupas"
   }
)

var meusdocumentos =
    [
      {
        item: "ABC2",
        detalhes: { modelo: "14Q3", fabricante: "M1 Corporation" },
        itensestoque: [ { tamanho: "M", qtde: 50 } ],
        categoria: "roupas"
      },
      {
        item: "MNO2",
        detalhes: { modelo: "14Q3", fabricante: "ABC Empresa" },
        itensestoque: [ { tamanho: "S", qtde: 5 }, { tamanho: "M", qtde: 5 }, { tamanho: "L", qtde: 1 } ],
        categoria: "roupas"
      },
      {
        item: "IJK2",
        detalhes: { modelo: "14Q2", fabricante: "M5 Corporation" },
        itensestoque: [ { tamanho: "S", qtde: 5 }, { tamanho: "L", qtde: 1 } ],
        categoria: "utensílios domésticos"
      } 
    ]; 

db.getCollection('estoque').insert(meusdocumentos);