#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';

const program = new Command();

function toPascalCase(str: string) {
  return str.replace(/(^\w|-\w)/g, (clear) =>
    clear.replace('-', '').toUpperCase()
  );
}

program
  .name('nave-ui')
  .description('CLI para instalar Componentes UI en distintos frameworks')
  .version('1.0.0');

program
  .command('install <component>')
  .description('Instala un componente en el framework deseado')
  .option('--publicKey <key>', 'Public key para cargar el tema remoto')
  .option(
    '--framework <framework>',
    'Framework de salida (react | next | native)',
    'react'
  ).option(
    '--platform <platform>',
    'Plataforma de destino (web | native)',
    'web'
  )
  .action((component, options) => {
    const framework = options.framework as 'react' | 'next' | 'native';
    const publicKey = options.publicKey as string;
    const platform = options.platform as 'web' | 'native';

    if (!publicKey) {
      console.error('❌ Error: Debes pasar --publicKey=pk_xxx');
      process.exit(1);
    }

    const pascalName = toPascalCase(component);

    // Directorios destino
    const outputPaths = {
      react: '../../ui-react/src',
      next: '../../ui-next/src',
      native: '../../ui-native/src',
    };

    // Plantillas disponibles
    const templates = {
      react: 'react-component.template.tsx',
      next: 'next-component.template.tsx',
      native: 'native-component.template.tsx',
    };

    const templateFile = templates[framework];
    const outputDir = outputPaths[framework];

    if (!templateFile) {
      console.error(`❌ Framework no soportado: ${framework}`);
      console.error('   Usa: react | next | native');
      process.exit(1);
    }

    // Ruta absoluta real
    const templatePath = path.join(__dirname, 'templates', templateFile);
    const destFolder = path.join(__dirname, outputDir);
    const outputFile = path.join(destFolder, `${pascalName}.tsx`);

    // Validación existencia de template
    if (!fs.existsSync(templatePath)) {
      console.error('❌ No existe la plantilla: ' + templatePath);
      process.exit(1);
    }

    // Crear carpeta si no existe
    if (!fs.existsSync(destFolder)) {
      fs.mkdirSync(destFolder, { recursive: true });
    }

    // Leer y reemplazar variables
    let content = fs.readFileSync(templatePath, 'utf8');
    const lowerName = component.toLowerCase();
    content = content
      .replace(/{{pascalName}}/g, pascalName)
      .replace(/{{lowerName}}/g, lowerName)
      .replace(/{{publicKey}}/g, publicKey)
      .replace(/{{platform}}/g, platform ?? 'web');

    // Guardar archivo destino
    fs.writeFileSync(outputFile, content.trim());

    console.log(`✔ Componente generado: ${pascalName}`);
    console.log(`📁 Ubicación: ${outputFile}`);
    console.log(`⚡ Framework: ${framework}`);
    console.log(`🔑 Public Key: ${publicKey}`);
    console.log(`🌐 Platform: ${platform}`);
  });

program.parse();
