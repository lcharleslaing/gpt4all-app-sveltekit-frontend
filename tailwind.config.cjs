const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui: {
    themes: ["corporate"],
  },
  plugins: [require("daisyui")],
};

module.exports = config;
