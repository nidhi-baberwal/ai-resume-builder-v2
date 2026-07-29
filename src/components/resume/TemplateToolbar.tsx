import type { Dispatch, SetStateAction } from "react";

type Template = "classic" | "modern" | "ATS";

type Props = {
  template: Template;
  setTemplate: Dispatch<SetStateAction<Template>>;
};

const templates: Template[] = ["classic", "modern", "ATS"];

export default function TemplateToolbar({
  template,
  setTemplate,
}: Props) {
  return (
    <div className="toolbar">

      {templates.map((item) => (
        <button
          key={item}
          className={template === item ? "active" : ""}
          onClick={() => setTemplate(item)}
        >
          {item}
        </button>
      ))}

    </div>
  );
}