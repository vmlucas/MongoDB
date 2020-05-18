db.getCollection('estoque').find({})
db.getCollection('estoque').find( { categoria: { $in: [ 'eletrônicos'] } } ).pretty()

db.getCollection('estoque').find( { "itensestoque.qtde": { $lt: 5 } } ).pretty()


#update
db.getCollection('estoque').update(
    { item: "MNO2" },
    {
      $set: {
        categoria: "eletrônicos",
        detalhes: { modelo: "14Q3", fabricante: "XYZ Empresa" }
      },
      $currentDate: { lastModified: true }
    }
)
    
db.getCollection('estoque').update(
   { categoria: "roupas" },
   {
     $set: { categoria: "eletrônicos" },
     $currentDate: { lastModified: true }
   },
   { multi: true }
) 
   
#Bulk
var bulk = db.getCollection('estoque').initializeUnorderedBulkOp();

bulk.insert(
   {
     item: "BE10",
     detalhes: { modelo: "14Q2", fabricante: "XYZ Empresa" },
     itensestoque: [ { tamanho: "L", qtde: 5 } ],
     categoria: "roupas"
   }
);

bulk.insert(
   {
     item: "ZYT1",
     detalhes: { modelo: "14Q1", fabricante: "ABC Empresa"  },
     itensestoque: [ { tamanho: "S", qtde: 5 }, { tamanho: "M", qtde: 5 } ],
     categoria: "utensílios domésticos"
   }
);

bulk.execute();
   
   