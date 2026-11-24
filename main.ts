const line = "One star. He fills my bowl, then sits in MY sunbeam and calls it 'his chair.' I knocked his phone off the table. He learned nothing.";

if (line.length > 199 || line.includes("\n")) {
  throw new Error(`Entry line must be a single line under 200 characters (got ${line.length}).`);
}

console.log(line);
