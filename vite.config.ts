import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const templateName = "harlandshair";

export default defineConfig({
  plugins: [react()],
  base: `/${templateName}/`
});
