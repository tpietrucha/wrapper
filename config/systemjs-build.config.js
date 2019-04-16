(function (global) {
  System.config({
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true,
      rootDir: null,
      module: 'system'
    },
    meta: {
      typescript: {
        exports: 'ts'
      }
    },
    paths: {
      'npm:': 'https://unpkg.com/'
    },
    map: {
      'app': 'src/',
      '@angular/cdk': 'npm:@angular/cdk/bundles/cdk.umd.js',
      '@angular/cdk/bidi': 'npm:@angular/cdk/bundles/cdk-bidi.umd.js',
      '@angular/cdk/coercion': 'npm:@angular/cdk/bundles/cdk-coercion.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/flex-layout': 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',
      '@angular/flex-layout/core': 'npm:@angular/flex-layout/bundles/flex-layout-core.umd.js',
      '@angular/flex-layout/flex': 'npm:@angular/flex-layout/bundles/flex-layout-flex.umd.js',
      '@angular/flex-layout/grid': 'npm:@angular/flex-layout/bundles/flex-layout-grid.umd.js',
      '@angular/flex-layout/extended': 'npm:@angular/flex-layout/bundles/flex-layout-extended.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      'rxjs': 'npm:rxjs',
      'rxjs-compat': 'npm:rxjs-compat',
      'rxjs/operators': 'npm:rxjs/operators',
      'ts': 'npm:plugin-typescript/lib/plugin.js',
      'typescript': 'npm:typescript/lib/typescript.js',
      'quill': 'npm:quill/dist/quill.js',
      'ngx-quill-wrapper': 'npm:ngx-quill-wrapper/bundles/ngx-quill-wrapper.umd.js'
    },
    packages: {
      'app': {
        main: 'main.ts',
        defaultExtension: 'ts',
        meta: {
          '*.ts': {
            loader: 'ts'
          }
        }
      },
      'rxjs': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      'rxjs-compat': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      'rxjs/operators': {
        main: 'index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
