import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'src/DexieOpenedDatabasesAddon.js',
  output: [
    {
      file: 'dist/dexieOpenedDatabasesAddon.es.js',
      format: 'es',
      name: 'DexieOpenedDatabasesAddon',
      sourcemap: true
    },
  ],
  external: ['babel-runtime/core-js/map'],
  plugins: [ sourcemaps() ]
};
