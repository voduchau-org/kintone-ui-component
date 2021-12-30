import { html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { KucBase } from "../../base/kuc-base";
import { validateProps } from "../../base/validator";

type MobileTextProps = {
  className?: string;
  guid?: string;
  id?: string;
  value?: string;
};

export class MobileBaseError extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) guid = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) value = "";

  private _GUID = "";

  constructor(props?: MobileTextProps) {
    super();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("guid")) {
      this._GUID = this.guid;
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div
        class="kuc-mobile-base-error__error"
        id="${this._GUID}-error"
        role="alert"
        ?hidden="${!this.value}"
      >
        ${this.value}
      </div>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-mobile-base-error {
          display: block;
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-base-error,
        :lang(zh) kuc-mobile-base-error * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-mobile-base-error[hidden] {
          display: none;
        }
        .kuc-mobile-base-error__error {
          line-height: 1.5;
          color: #000000;
          background-color: #fdffc9;
          border: 1px solid #e5db68;
          border-radius: 0.4em;
          padding: 0.4em 1em;
          margin-top: 0.3em;
          margin-left: 0.5em;
        }
        .kuc-mobile-base-error__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-base-error")) {
  window.customElements.define("kuc-mobile-base-error", MobileBaseError);
}
