import { MobileDropdown } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("mobile/dropdown", module)
  .addParameters({ viewport: { defaultViewport: "iPhone11Pro" } })
  .add("Base", () => {
    const root = document.createElement("div");
    const dropdown = new MobileDropdown({
      items: [
        {
          label: "-----",
          value: "-----"
        },
        {
          label: "Orange",
          value: "orange"
        },
        {
          label: "Apple",
          value: "apple"
        }
      ],
      value: "apple",
      label: "フルーツ一覧",
      requiredIcon: true,
      error: "エラーです"
    });
    dropdown.addEventListener("change", event => {
      console.log(event);
    });
    root.appendChild(dropdown);
    return root;
  })
  .add("Base2", () => {
    const root = document.createElement("div");
    const dropdown = new MobileDropdown();
    dropdown.value = "Orange";
    dropdown.items = [
      {
        label: "-----",
        value: "-----"
      },
      {
        label: "Orange",
        value: "orange"
      },
      {
        label: "Apple",
        value: "apple"
      }
    ];
    dropdown.label = "フルーツ一覧";
    dropdown.requiredIcon = true;
    dropdown.error = "エラーです";
    dropdown.value = "orange";
    root.appendChild(dropdown);
    return root;
  })
  .add("Base3", () => {
    const root = document.createElement("div");
    const dropdown = new MobileDropdown();
    dropdown.value = "orange";
    dropdown.items = [
      {
        label: "-----",
        value: "-----"
      },
      {
        label: "Orange",
        value: "orange"
      },
      {
        label: "Apple",
        value: "opple"
      }
    ];
    dropdown.label = "フルーツ一覧";
    dropdown.requiredIcon = true;
    dropdown.error = "エラーです";
    dropdown.disabled = true;
    root.appendChild(dropdown);
    return root;
  })
  // UI For document site. Do not change or delete below.
  .add("Document", () => {
    const root = document.createElement("div");
    const dropdown = new MobileDropdown({
      value: "Orange",
      items: [
        {
          label: "orange",
          value: "Orange"
        },
        {
          label: "apple",
          value: "Apple"
        }
      ]
    });
    root.appendChild(dropdown);
    return root;
  });
