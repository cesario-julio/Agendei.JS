import respoDoctor from "../repositories/respository.doctor.js";

async function Listar() {

  const doctors = await respoDoctor.Listar();

  return doctors;
}
export default { Listar };
