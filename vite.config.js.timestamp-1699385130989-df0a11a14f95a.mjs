// vite.config.js
import { defineConfig } from "file:///C:/laragon/www/MS-laravel/CMS-Ecommerce-Agrupec/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/laragon/www/MS-laravel/CMS-Ecommerce-Agrupec/node_modules/laravel-vite-plugin/dist/index.mjs";
import vue from "file:///C:/laragon/www/MS-laravel/CMS-Ecommerce-Agrupec/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { fileURLToPath, URL } from "url";
import tailwindcss from "file:///C:/laragon/www/MS-laravel/CMS-Ecommerce-Agrupec/node_modules/tailwindcss/lib/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/laragon/www/MS-laravel/CMS-Ecommerce-Agrupec/vite.config.js";
var vite_config_default = defineConfig({
  base: "/public/",
  plugins: [
    laravel(
      //     [
      //     'resources/css/app.css',
      //     'resources/js/app.js',
      //     // 'resources/js/msj.js',
      //     // '/public/js/msj.js',
      // ]
      {
        input: ["resources/css/app.css", "resources/js/app.js"],
        refresh: true
      }
    ),
    // react(),
    // viteSingleFile(),
    // autoprefixer(),
    vue(),
    tailwindcss()
    // autoprefixer(),
    // WindiCSS(),
    // vue({
    //     template: {
    //         transformAssetUrls: {
    //             base: null,
    //             includeAbsolute: false,
    //         },
    //     },
    // }),
  ],
  // this is adding for las rutas relativa, el cual sera el alias dentro del resolve
  resolve: {
    alias: {
      "@promo": fileURLToPath(new URL("../../public/", __vite_injected_original_import_meta_url)),
      //   "@promo":fileURLToPath(new URL("/storage/img/SlayderPromocion/", import.meta.url)),
      //   "@": fileURLToPath(new URL("../src/", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", __vite_injected_original_import_meta_url))
      // puedes agregar otros alias aquí
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxNUy1sYXJhdmVsXFxcXENNUy1FY29tbWVyY2UtQWdydXBlY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcTVMtbGFyYXZlbFxcXFxDTVMtRWNvbW1lcmNlLUFncnVwZWNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L2xhcmFnb24vd3d3L01TLWxhcmF2ZWwvQ01TLUVjb21tZXJjZS1BZ3J1cGVjL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBsYXJhdmVsIGZyb20gJ2xhcmF2ZWwtdml0ZS1wbHVnaW4nO1xyXG4vLyBpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG4vLyBzZSBhZ3JlZ2EgcGFyYSBlbCBwbHVnaW4gZGUgIHZ1ZSBlbiB2aXRlIFxyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XHJcbi8vIHBhcmEgaW1wb3J0YXIgbGFzIGltYWdlbmVzXHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJ1cmxcIjtcclxuLy8gdGFpbHdpbmQgY3NzXHJcbi8vIHRoaXMgaXMgZm9yIHRhbHdpbmQuY3NzXHJcbi8vIGltcG9ydCBXaW5kaUNTUyBmcm9tICd2aXRlLXBsdWdpbi13aW5kaWNzcydcclxuLy8gaW1wb3J0IHsgdml0ZVNpbmdsZUZpbGUgfSBmcm9tICd2aXRlLXBsdWdpbi1zaW5nbGVmaWxlJ1xyXG4vLyBpbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ3RhaWx3aW5kY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBiYXNlOiAnL3B1YmxpYy8nLFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIGxhcmF2ZWwoXHJcbiAgICAgICAgLy8gICAgIFtcclxuICAgICAgICAvLyAgICAgJ3Jlc291cmNlcy9jc3MvYXBwLmNzcycsXHJcbiAgICAgICAgLy8gICAgICdyZXNvdXJjZXMvanMvYXBwLmpzJyxcclxuICAgICAgICAvLyAgICAgLy8gJ3Jlc291cmNlcy9qcy9tc2ouanMnLFxyXG4gICAgICAgIC8vICAgICAvLyAnL3B1YmxpYy9qcy9tc2ouanMnLFxyXG4gICAgICAgIC8vIF1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlucHV0OiBbJ3Jlc291cmNlcy9jc3MvYXBwLmNzcycsICdyZXNvdXJjZXMvanMvYXBwLmpzJ10sXHJcbiAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICAgICksXHJcbiAgICAgICAgLy8gcmVhY3QoKSxcclxuICAgICAgICAvLyB2aXRlU2luZ2xlRmlsZSgpLFxyXG4gICAgICAgIC8vIGF1dG9wcmVmaXhlcigpLFxyXG4gICAgICAgIHZ1ZSgpLFxyXG4gICAgICAgIHRhaWx3aW5kY3NzKCksXHJcbiAgICAgICAgLy8gYXV0b3ByZWZpeGVyKCksXHJcbiAgICAgICAgLy8gV2luZGlDU1MoKSxcclxuICAgICAgICAvLyB2dWUoe1xyXG4gICAgICAgIC8vICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgIC8vICAgICAgICAgdHJhbnNmb3JtQXNzZXRVcmxzOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYmFzZTogbnVsbCxcclxuICAgICAgICAvLyAgICAgICAgICAgICBpbmNsdWRlQWJzb2x1dGU6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyB9KSxcclxuICAgIF0sXHJcbiAgICAvLyB0aGlzIGlzIGFkZGluZyBmb3IgbGFzIHJ1dGFzIHJlbGF0aXZhLCBlbCBjdWFsIHNlcmEgZWwgYWxpYXMgZGVudHJvIGRlbCByZXNvbHZlXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgIFwiQHByb21vXCI6ZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi4vLi4vcHVibGljL1wiLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgICAvLyAgIFwiQHByb21vXCI6ZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiL3N0b3JhZ2UvaW1nL1NsYXlkZXJQcm9tb2Npb24vXCIsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICAgIC8vICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4uL3NyYy9cIiwgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICAgICAgICBcIkBhc3NldHNcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmMvYXNzZXRzXCIsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICAgICAgLy8gcHVlZGVzIGFncmVnYXIgb3Ryb3MgYWxpYXMgYXF1XHUwMEVEXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxufSk7XHJcblxyXG5cclxuXHJcbi8vIGltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJ1cmxcIjtcclxuLy8gaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuLy8gaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcblxyXG4vLyBbNl0oaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy8pXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbi8vICAgcGx1Z2luczogW3Z1ZSgpXSxcclxuLy8gICByZXNvbHZlOiB7XHJcbi8vICAgICBhbGlhczoge1xyXG4vLyAgICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXHJcbi8vICAgICAgIFwiQGFzc2V0c1wiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyYy9hc3NldHNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXHJcbi8vICAgICAgIC8vIHB1ZWRlcyBhZ3JlZ2FyIG90cm9zIGFsaWFzIGFxdVx1MDBFRFxyXG4vLyAgICAgfSxcclxuLy8gICB9LFxyXG4vLyB9KTtcclxuXHJcblxyXG5cclxuLy8gbnBtIHVuaW5zdGFsbCB0YWlsd2luZGNzcyBwb3N0Y3NzIGF1dG9wcmVmaXhlclxyXG4vLyBucG0gaW5zdGFsbCB0YWlsd2luZGNzcyBwb3N0Y3NzIGF1dG9wcmVmaXhlciJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVUsU0FBUyxvQkFBb0I7QUFDdFcsT0FBTyxhQUFhO0FBR3BCLE9BQU8sU0FBUztBQUVoQixTQUFTLGVBQWUsV0FBVztBQU1uQyxPQUFPLGlCQUFpQjtBQVp1TCxJQUFNLDJDQUEyQztBQWVoUSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0E7QUFBQSxRQUNJLE9BQU8sQ0FBQyx5QkFBeUIscUJBQXFCO0FBQUEsUUFDdEQsU0FBUztBQUFBLE1BQ2I7QUFBQSxJQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJQSxJQUFJO0FBQUEsSUFDSixZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVdoQjtBQUFBO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDTCxVQUFTLGNBQWMsSUFBSSxJQUFJLGlCQUFpQix3Q0FBZSxDQUFDO0FBQUE7QUFBQTtBQUFBLE1BR2hFLFdBQVcsY0FBYyxJQUFJLElBQUksZ0JBQWdCLHdDQUFlLENBQUM7QUFBQTtBQUFBLElBRW5FO0FBQUEsRUFDRjtBQUNOLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
