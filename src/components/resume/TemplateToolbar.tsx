import type { Dispatch, SetStateAction } from "react";

type Template = "classic" | "modern" | "ATS";

type Props = {
  template: Template;
  setTemplate: Dispatch<SetStateAction<Template>>;
};

export default function TemplateToolbar({
  template,
  setTemplate,
}: Props) {
  return (
    <div className="toolbar">

      <button
        className={template === "classic" ? "active" : ""}
        onClick={() => setTemplate("classic")}
      >
        Classic
      </button>

      <button
        className={template === "modern" ? "active" : ""}
        onClick={() => setTemplate("modern")}
      >
        Modern
      </button>

      <button
        className={template === "ATS" ? "active" : ""}
        onClick={() => setTemplate("ATS")}
      >
        ATS
      </button>

    </div>
  );
}