import Vue, { PluginObject } from 'vue'
import { SorosisUIComponent, SorosisUIComponentSize, SorosisUIHorizontalAlignment } from './component'

import { SoButton } from './button'


export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of sorosis-ui */
export const version: string

/**
 * Install all sorosis-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(SorosisUI)` to install.
 */
export function install(vue: typeof Vue, options: InstallationOptions): void

/** SorosisUI component common definition */
export type Component = SorosisUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = SorosisUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = SorosisUIHorizontalAlignment


/** Button Component */
export class Button extends SoButton { }


