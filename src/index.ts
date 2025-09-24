import { definePlugin } from "@readit-mod/plugins";

export default definePlugin({
    name: "ReadIt Plugin",
    description: "Provide a plugin description.",
    id: "my-plugin",
    version: "1.0.0",
    onLoad: (ctx) => {
        // Your code here
    }
})
