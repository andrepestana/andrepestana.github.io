// plugins/navbar.ts

export default function NavbarFix() {
    return {
        name: 'vitepress-sidebar-logo-fix',
        enforce: 'pre',
        transform(code, id) {
            if (id.endsWith('VPNavBarTitle.vue')) {
                return `

<template>
  <div>
    TEST
  </div>
</template>
`
            }
        }
    }
}