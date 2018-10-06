import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'src/DexieOpenedDatabasesAddon.js',
  output: [
    {
      file: 'dist/DexieOpenedDatabasesAddon.es.js',
      format: 'es',
      name: 'DexieOpenedDatabasesAddon',
      sourcemap: true
    },
  ],
  external: ['babel-runtime/core-js/map', 'babel-runtime/helpers/typeof'],
  plugins: [ sourcemaps() ]
};
