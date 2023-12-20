import { AdvertisementListForm, ControlBarForm, LayoutForm, LogoForm, MiniPlayerForm, TimelinePreviewForm } from "_components/forms";
import { MetadataForm } from "_components/forms/MetadataForm";

type FormComponents =
  | typeof MetadataForm
  | typeof LayoutForm
  // | typeof MiniPlayerForm
  // | typeof LogoForm
  // | typeof ControlBarForm
  // | typeof TimelinePreviewForm
  // | typeof AdvertisementListForm;

export interface FormMenuItem {
  label: string;
  key: string;
  FormComponent: FormComponents;
}

export const formMenuItems: FormMenuItem[] = [
  {
    label: "Metadata",
    key: "metadata",
    FormComponent: MetadataForm,
  },
  {
    label: "Layout",
    key: "layout",
    FormComponent: LayoutForm,
  },
  // {
  //   label: "Layout - Logo",
  //   key: "logo",
  //   FormComponent: LogoForm,
  // },
  // {
  //   label: "Layout - Control Bar",
  //   key: "controlBar",
  //   FormComponent: ControlBarForm,
  // },
  // {
  //   label: "Timeline Preview",
  //   key: "timelinePreview",
  //   FormComponent: TimelinePreviewForm,
  // },
  // {
  //   label: "Mini Player",
  //   key: "miniPlayer",
  //   FormComponent: MiniPlayerForm,
  // },
  // {
  //   label: "Advertisement",
  //   key: "advertisement",
  //   FormComponent: AdvertisementListForm,
  // },
];