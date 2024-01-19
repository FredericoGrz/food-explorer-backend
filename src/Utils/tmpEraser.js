const fs = require("fs");
const path = require("path");
const uploadConfig = require("../configs/upload");

async function tmpEraser() {
  // Lê o conteúdo da pasta de forma assíncrona
  await fs.readdir(uploadConfig.TMP_FOLDER, (err, arquivos) => {
    if (err) {
      console.error("Erro ao ler a pasta:", err);
      return;
    }

    // Itera sobre a lista de arquivos
    arquivos.forEach(async (arquivo) => {
      if (arquivo !== "uploads" && arquivo !== ".gitkeep") {
        const caminhoArquivo = path.join(uploadConfig.TMP_FOLDER, arquivo);
        // Remove o arquivo de forma assíncrona
        await fs.unlink(caminhoArquivo, (err) => {
          if (err) {
            console.error(`Erro ao apagar o arquivo ${caminhoArquivo}:`, err);
          } else {
            console.log(`Arquivo ${caminhoArquivo} apagado com sucesso.`);
          }
        });
      }
    });
    console.log("Todos os arquivos foram apagados com sucesso!");
  });
}

module.exports = tmpEraser;
