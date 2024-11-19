import { query } from "../database/sqlite.js";

async function Listar() {

  const sql = 'select * from doctors order by name'

  const doctors = await query(sql, []);
    
  return doctors;
}

export default { Listar };
  