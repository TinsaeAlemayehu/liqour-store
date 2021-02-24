const productsdb = (dbname, table) => {
    const db = new Dexie(dbname);
    db.version(1).stores(table);
    db.open()}
    
let db = prodb("Productdb", {
    products: `++id, name, seller, price`
    });
