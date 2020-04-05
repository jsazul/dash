# #Session 
* **🍆ogin** `(POST: /session/)`


****

# #Busca 
* **#search Content** `(GET: /search/?s=term)`

****

# Series
* **List All** `(GET: /tvshow/)`
* **Add** `(POST: /tvshow/)`
* **Get data** `(GET: /tvshow/:idthemovie/)`
* **Delete** `(DELETE: /tvshow/:idthemovie/)`
* **Seasson**
    * **Add New** `(POST: /tvshow/:idthemovie/seasson)`
    * **List Only** `(GET: /tvshow/:idthemovie/seasson)`
    * **Delete** `(DELETE: /tvshow/:idthemovie/seasson/:numberseasson/)`
    * **Update data** `(PUT: /tvshow/:idthemovie/seasson/:numberseasson/)`
    * **episodes**
        * **list** `(GET: /tvshow/:idthemovie/seasson/:numberseasson/episode)`
        * **Add New** `(POST: /tvshow/:idthemovie/seasson/:numberseasson/episode)`
        * **Deletar** `(DELETE: /tvshow/:idthemovie/seasson/:numberseasson/episode)`
        * **Update** `(PUT: /tvshow/:idthemovie/seasson/:numberseasson/episode)`
- **Links**
    * **Add links** `(POST: /tvshow/:idthemovie/link/)`
    * **Add list of links** `(POST: /tvshow/:idthemovie/links/)`
    * **remove_link** `(DELETE: /tvshow/:idthemovie/link/:seasson/:episode/:link)`
    * **Edit** `(PUT: /tvshow/:idthemovie/link/:seasson/:episode/:link)`

# Seassons
* **List** `(GET: /tvshow/list/seassons/)`

# Episodes
* **List** `(GET: /tvshow/list/episodes/)`

****

# #Filmes
+ **🍆List** `(GET: /movie/)`
+ **🍆Add** `(POST: /movie/)`
- **🍆Get Data** `(GET: /movie/:idthemovie/)`
+ **🍆Delete** `(DELETE: /movie/:idthemovie/)`
* **🍆Update** `(PUT: /movie/:idthemovie/)`
- **Links**
    * **🍆List Only** `(GET: /movie/:idthemovie/link/)`
    * **🍆Add links** `(POST: /movie/:idthemovie/link/)`
    * **🍆Remove_link** `(DELETE: /movie/:idthemovie/link/:type/:language/:serverCode/)`
    * **#Edit** `(PUT: /movie/:idthemovie/link/)`


****

# #Dominios
* **#List** `(GET: /domains/)`
* **#Adiciona**
    * **#Principal / SubDominio** `(POST: /domains/)`
* **#Check Status** `(PACTH: /domains/:iddomain)`
* **#Select Default** `(PUT: /domains/:iddomain)`
* **#Delete Domain** `(DELETE: /domains/:iddomain)`

****
# Usuarios
* **🍆Create Accont** `(POST: /users/)`
* **🍆Update Status** `(POST: /users/:userId/)`
* **🍆List Users** `(GET: /users/)`
* **Search Users** `(GET: /users/search/)`



mongorestore --host embed-shard-0/embed-shard-00-00-4pp2l.gcp.mongodb.net:27017,embed-shard-00-01-4pp2l.gcp.mongodb.net:27017,embed-shard-00-02-4pp2l.gcp.mongodb.net:27017 --ssl --username dev --password XIcB9W0lzRS1nXRQ --authenticationDatabase admin