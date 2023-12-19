import { formMenuItems } from "../constants";
import { ConfiguratorOptions, ExtendedFluidPlayerOptions } from "../models";
import { useState } from "react";
import { FormMenu } from "./FormMenu";
import { transformFluidPlayerOptions } from "../helpers/client";

export function FluidPlayerConfigurator({
  configuration,
  onSave,
}: {
  configuration: ConfiguratorOptions;
  onSave: (newOptions: Partial<ConfiguratorOptions>) => void;
}) {
  const [openedMenu, setOpenedMenu] = useState(formMenuItems[0].key);
  const [isDirty, setIsDirty] = useState(false);

  /**
   * Changes selected menu if there is no form errors
   */
  function handleChangeMenu({ key }: { key: string }) {
    if (!isDirty) {
      setOpenedMenu(key);
    }
  }

  /**
   * Handles saving and disabling the dirty form state
   */
  function handleSave(options: Partial<ConfiguratorOptions>) {
    setIsDirty(false);
    onSave({ ...options, options: transformFluidPlayerOptions(options?.options || {}) });
  }

  const { FormComponent } = formMenuItems.find((menuItem) => menuItem.key === openedMenu) || {};

  return (
    <>
      <div className="grid grid-cols-[minmax(160px,_1fr)_3fr]">
        <FormMenu onMenuChange={handleChangeMenu} preventNavigation={isDirty} selectedItem={openedMenu} />
        {FormComponent && (
          <FormComponent configuration={configuration} onSave={handleSave} onDirty={() => setIsDirty(true)} />
        )}
      </div>
    </>
  );
}
