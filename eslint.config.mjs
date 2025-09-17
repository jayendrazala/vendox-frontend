import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat()

const eslintConfig = async () => {
  const eslintPluginUnusedImports = (
    await import("eslint-plugin-unused-imports")
  ).default
  const eslintPluginReact = (await import("eslint-plugin-react")).default
  const eslintPluginReactHooks = (await import("eslint-plugin-react-hooks"))
    .default

  return [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
      plugins: {
        "unused-imports": eslintPluginUnusedImports,
        react: eslintPluginReact,
        "react-hooks": eslintPluginReactHooks
      },
      rules: {
        "no-unused-vars": [
          "error",
          { vars: "all", args: "after-used", ignoreRestSiblings: true }
        ],
        "unused-imports/no-unused-vars": [
          "error",
          { args: "after-used", argsIgnorePattern: "^_" }
        ],
        "react/no-unused-state": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-unused-expressions": "error"
      },
      ignores: [
        "node_modules/**",
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
        "**/.next/**"
      ]
    }
  ]
}

export default await eslintConfig()
