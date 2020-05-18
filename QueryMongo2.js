db.getCollection('Postagens').find({}).pretty()
db.getCollection('Postagens').find({}).limit(2)
db.getCollection('Postagens').find({}).sort({titulo: -1})
db.getCollection('Postagens').find({titulo: 'Terceira Postagem'})
db.getCollection('Postagens').find({}, {titulo: true,_id:false}).sort({titulo: -1})

db.getCollection('Postagens').insert( {titulo: 'Primeira Postagem', conteudo: 'Conteudo 01', tags: []} );
db.getCollection('Postagens').insert( {titulo: 'Segunda Postagem', conteudo: 'Conteudo 02', tags: []} );
db.getCollection('Postagens').insert( {titulo: 'Terceira Postagem', conteudo: 'Conteudo 03', tags: ['esporte', 'cinema', 'praia']} );

