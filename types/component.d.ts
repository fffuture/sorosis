import Vue from 'vue'

/** ElementUI component common definition */
export declare class SorosisUIComponent extends Vue {
  /** Install component into Vue */
  static install(vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type SorosisUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type SorosisUIHorizontalAlignment = 'left' | 'center' | 'right'
