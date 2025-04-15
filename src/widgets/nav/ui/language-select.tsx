"use client";
import { setUserLocale } from "@/shared/lib/cookies";
import { Locale } from "@/shared/models";
import { useLocale } from "next-intl";
import React from "react";
import * as Select from "@radix-ui/react-select";
import { useIsMounted } from "@/shared/lib/client";

const LANGUAGE_OPTIONS = [
  { value: "en", label: "🇺🇸 English" },
  { value: "pt-br", label: "🇧🇷 Português" },
];

export default function LanguageSelect() {
  const locale = useLocale();
  const [open, setOpen] = React.useState(false);
  const { withClientMounted } = useIsMounted();

  const SelectTrigger = withClientMounted(
    () => (
      <Select.Trigger className="text-sm text-black dark:text-white focus:outline-none p-2 with-hover">
        <Select.Value />
      </Select.Trigger>
    ),
    {
      fallback: () => <div className="h-3.5 w-12 place-self-center skeleton" />,
    },
  );

  return (
    <Select.Root
      open={open}
      onOpenChange={setOpen}
      defaultValue={locale}
      onValueChange={(value) => {
        setUserLocale(value as Locale);
      }}
    >
      <SelectTrigger />
      <Select.Portal>
        <Select.Content
          position="popper"
          align="end"
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="data-[state=open]:animate-pop-in p-4 shadow-lg bg-[#fdf2e2] border border-orange-900/10 dark:bg-neutral-900 dark:border-neutral-700 w-52"
        >
          <Select.Viewport>
            {LANGUAGE_OPTIONS.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="p-2 focus:outline-none with-hover"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
